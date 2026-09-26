import unittest
from unittest.mock import patch, MagicMock
from app.schemas.contact import ContactMessageCreate
from app.services.email import send_contact_email, EmailDeliveryError
from app.api.endpoints.contact import submit_contact_message
from fastapi import HTTPException


class TestContactFlow(unittest.TestCase):
    def test_schema_valid_input(self):
        msg = ContactMessageCreate(
            name="John Doe",
            email="john@example.com",
            message="Valid inquiry message",
        )
        self.assertEqual(msg.name, "John Doe")
        self.assertEqual(msg.email, "john@example.com")

    def test_schema_invalid_email(self):
        with self.assertRaises(ValueError):
            ContactMessageCreate(
                name="John Doe",
                email="invalid-email-address",
                message="Valid inquiry message",
            )

    def test_schema_empty_name(self):
        with self.assertRaises(ValueError):
            ContactMessageCreate(
                name="   ",
                email="john@example.com",
                message="Valid inquiry message",
            )

    def test_schema_short_message(self):
        with self.assertRaises(ValueError):
            ContactMessageCreate(
                name="John Doe",
                email="john@example.com",
                message="hi",
            )

    @patch("app.services.email.urllib.request.urlopen")
    def test_send_email_resend_success(self, mock_urlopen):
        mock_response = MagicMock()
        mock_response.status = 200
        mock_urlopen.return_value.__enter__.return_value = mock_response

        with patch("app.core.config.settings.EMAIL_SERVICE_API_KEY", "re_test_key_123"):
            send_contact_email("Alice", "alice@example.com", "Testing Resend email sending")
            self.assertTrue(mock_urlopen.called)

    @patch("app.services.email.smtplib.SMTP")
    def test_send_email_smtp_success(self, mock_smtp):
        mock_server = MagicMock()
        mock_smtp.return_value = mock_server

        with patch("app.core.config.settings.EMAIL_SERVICE_API_KEY", ""):
            with patch("app.core.config.settings.SMTP_HOST", "smtp.test.com"):
                send_contact_email("Bob", "bob@example.com", "Testing SMTP email sending")
                self.assertTrue(mock_server.send_message.called)

    def test_unconfigured_service_fails_safe(self):
        with patch("app.core.config.settings.EMAIL_SERVICE_API_KEY", ""):
            with patch("app.core.config.settings.RESEND_API_KEY", ""):
                with patch("app.core.config.settings.SMTP_HOST", ""):
                    with self.assertRaises(EmailDeliveryError):
                        send_contact_email("Charlie", "charlie@example.com", "Should fail cleanly")

    @patch("app.api.endpoints.contact.send_contact_email")
    def test_submit_contact_endpoint_success(self, mock_send):
        mock_send.return_value = None
        payload = ContactMessageCreate(
            name="Diana",
            email="diana@example.com",
            message="Hello Yeswanth!",
        )
        res = submit_contact_message(payload)
        self.assertEqual(res.status, "success")
        self.assertEqual(res.message, "MESSAGE SENT SUCCESSFULLY")

    @patch("app.api.endpoints.contact.send_contact_email")
    def test_submit_contact_endpoint_failure(self, mock_send):
        mock_send.side_effect = EmailDeliveryError("Service down")
        payload = ContactMessageCreate(
            name="Diana",
            email="diana@example.com",
            message="Hello Yeswanth!",
        )
        with self.assertRaises(HTTPException) as ctx:
            submit_contact_message(payload)
        self.assertEqual(ctx.exception.status_code, 500)
        self.assertEqual(ctx.exception.detail, "MESSAGE COULD NOT BE SENT. PLEASE TRY AGAIN.")


if __name__ == "__main__":
    unittest.main()
