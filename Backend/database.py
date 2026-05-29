from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

# Read the DATABASE_URL from .env
DATABASE_URL = os.getenv("DATABASE_URL")

# Create the database engine (this is the connection to PostgreSQL)
engine = create_engine(DATABASE_URL)

# Each request gets its own session (like a conversation with the DB)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class that all our models (tables) will inherit from
Base = declarative_base()


# This function gives us a DB session for each request, then closes it
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
