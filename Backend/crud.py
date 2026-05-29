from sqlalchemy.orm import Session
from models import ContactMessage
from schemas import ContactCreate


# Save a new contact message to the database
def create_contact(db: Session, contact: ContactCreate):
    # Create a new ContactMessage object from the incoming data
    db_contact = ContactMessage(
        name=contact.name,
        email=contact.email,
        subject=contact.subject,
        message=contact.message,
    )

    db.add(db_contact)    # Stage it (like git add)
    db.commit()           # Save it to DB (like git commit)
    db.refresh(db_contact) # Get the saved object back (with id, created_at)

    return db_contact


# Get all messages (useful for an admin dashboard later)
def get_all_contacts(db: Session):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()
