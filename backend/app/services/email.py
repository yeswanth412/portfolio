import json
import logging
import smtplib
import urllib.error
import urllib.request
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from app.core.config import settings

logger = logging.getLogger(__name__)


class EmailDeliveryError(Exception):
    """Raised when an email cannot be delivered by any configured provider."""
    pass


def send_via_resend(api_key: str, name: str, sender_email: str, message: str) -> None:
    """Send an email using Resend transactional API."""
    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "Yeswanth-Portfolio-FastAPI/1.0",
    }
    payload = {
        "from": settings.EMAIL_FROM,
        "to": [settings.CONTACT_TO_EMAIL],
        "reply_to": sender_email,
        "subject": f"Portfolio Inquiry from {name}",
        "text": f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}",
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status not in (200, 201, 202):
                raise EmailDeliveryError(f"Resend API returned non-success status: {resp.status}")
            logger.info("Contact email successfully dispatched via Resend API.")
    except urllib.error.HTTPError as e:
        logger.error(f"Resend HTTP error: status {e.code}")
        raise EmailDeliveryError("Failed to deliver message via email provider.") from e
    except Exception as e:
        logger.error(f"Resend request error: {type(e).__name__}")
        raise EmailDeliveryError("Failed to deliver message via email provider.") from e


def send_via_smtp(name: str, sender_email: str, message: str) -> None:
    """Send an email using configured SMTP server."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Portfolio Inquiry from {name}"
    msg["From"] = settings.SMTP_FROM or settings.EMAIL_FROM
    msg["To"] = settings.CONTACT_TO_EMAIL
    msg["Reply-To"] = sender_email

    body_text = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body_text, "plain", "utf-8"))

    try:
        if settings.SMTP_PORT == 465:
            server = smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10)
        else:
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10)
            if settings.SMTP_TLS:
                server.starttls()

        if settings.SMTP_USER and settings.SMTP_PASSWORD:
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)

        server.send_message(msg)
        server.quit()
        logger.info("Contact email successfully dispatched via SMTP.")
    except Exception as e:
        logger.error(f"SMTP delivery error: {type(e).__name__}")
        raise EmailDeliveryError("Failed to deliver message via SMTP.") from e


def send_contact_email(name: str, sender_email: str, message: str) -> None:
    """
    Dispatches a contact inquiry. Tries Resend API first if configured,
    then SMTP if configured.
    """
    api_key = settings.EMAIL_SERVICE_API_KEY or settings.RESEND_API_KEY
    if api_key:
        send_via_resend(api_key, name, sender_email, message)
        return

    if settings.SMTP_HOST:
        send_via_smtp(name, sender_email, message)
        return

    # If neither is configured
    logger.error("No email service configured (EMAIL_SERVICE_API_KEY or SMTP_HOST required).")
    raise EmailDeliveryError("Email delivery service is not configured.")
