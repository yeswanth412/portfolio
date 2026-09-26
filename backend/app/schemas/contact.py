import re
from pydantic import BaseModel, Field, field_validator

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Sender's full name")
    email: str = Field(..., min_length=5, max_length=255, description="Sender's valid email address")
    message: str = Field(..., min_length=5, max_length=5000, description="Message content")

    @field_validator("name")
    @classmethod
    def validate_name(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Name cannot be empty.")
        return v

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        v = v.strip().lower()
        if not EMAIL_REGEX.match(v):
            raise ValueError("Please provide a valid email address.")
        return v

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 5:
            raise ValueError("Message must contain at least 5 characters.")
        return v


class ContactMessageResponse(BaseModel):
    status: str = Field(..., description="Delivery status (success or failure)")
    message: str = Field(..., description="User-facing status confirmation")
