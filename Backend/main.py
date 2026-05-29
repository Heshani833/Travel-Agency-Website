from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import crud
from database import engine, get_db
from schemas import ContactCreate, ContactResponse

# ─────────────────────────────────────────────
# 1. Create all tables in PostgreSQL (runs once on startup)
# ─────────────────────────────────────────────
models.Base.metadata.create_all(bind=engine)

# ─────────────────────────────────────────────
# 2. Create FastAPI app
# ─────────────────────────────────────────────
app = FastAPI(title="Contact Form API")

# ─────────────────────────────────────────────
# 3. CORS — allow your React frontend to talk to this backend
#    Change the origin below to match your React dev server port
# ─────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# 4. Routes (API Endpoints)
# ─────────────────────────────────────────────

@app.get("/")
def root():
    """Health check — visit http://127.0.0.1:8000/ to confirm server is running"""
    return {"status": "Contact Form API is running ✅"}


@app.post("/contact", response_model=ContactResponse, status_code=201)
def submit_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    """
    Receives contact form data from the frontend.
    Validates it with Pydantic, then saves it to PostgreSQL.
    """
    try:
        saved = crud.create_contact(db=db, contact=contact)
        return saved
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")


@app.get("/contacts", response_model=list[ContactResponse])
def get_contacts(db: Session = Depends(get_db)):
    """
    Returns all submitted messages.
    Useful for building an admin dashboard later.
    """
    return crud.get_all_contacts(db=db)

