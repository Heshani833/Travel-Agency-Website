from pydantic import BaseModel, EmailStr


# This is what the frontend SENDS to us (request body)
# Pydantic automatically validates each field
class ContactCreate(BaseModel):
    name: str       # Must be a string, cannot be empty
    email: EmailStr # Must be a valid email like "abc@gmail.com"
    subject: str    # Must be a string
    message: str    # Must be a string


# This is what we SEND BACK to the frontend (response body)
class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str

    class Config:
        from_attributes = True  # Allows reading from SQLAlchemy model objects
