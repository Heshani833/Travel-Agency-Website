from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from database import Base


# This class = one table in PostgreSQL called "contact_messages"
class ContactMessage(Base):
    __tablename__ = "contact_messages"

    # Columns (fields) in the table
    id         = Column(Integer, primary_key=True, index=True)  # Auto ID: 1, 2, 3...
    name       = Column(String(100), nullable=False)             # Person's name
    email      = Column(String(150), nullable=False)             # Person's email
    subject    = Column(String(200), nullable=False)             # Subject line
    message    = Column(Text, nullable=False)                    # Full message
    created_at = Column(DateTime(timezone=True), server_default=func.now())  # Timestamp
