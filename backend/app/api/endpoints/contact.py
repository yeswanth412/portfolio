import logging
from fastapi import APIRouter, HTTPException, status
from app.schemas.contact import ContactMessageCreate, ContactMessageResponse
from app.services.email import send_contact_email, EmailDeliveryError

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post(
    "/contact",
    response_model=ContactMessageResponse,
    status_code=status.HTTP_200_OK,
    summary="Submit Contact Message",
    description="Validates and sends a contact inquiry directly to Yeswanth Uggina's email.",
)
def submit_contact_message(payload: ContactMessageCreate) -> ContactMessageResponse:
    """
    Handles visitor contact message submission.
    Validates input and dispatches email via configured service.
    """
    try:
        send_contact_email(
            name=payload.name,
            sender_email=payload.email,
            message=payload.message,
        )
        return ContactMessageResponse(
            status="success",
            message="MESSAGE SENT SUCCESSFULLY",
        )
    except EmailDeliveryError as e:
        logger.error(f"Contact email delivery failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="MESSAGE COULD NOT BE SENT. PLEASE TRY AGAIN.",
        )
    except Exception as e:
        logger.error(f"Unexpected error processing contact message: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="MESSAGE COULD NOT BE SENT. PLEASE TRY AGAIN.",
        )
