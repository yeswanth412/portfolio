from typing import List, Union
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
import json


class Settings(BaseSettings):
    PROJECT_NAME: str = "Yeswanth Portfolio API"
    ENV: str = "development"
    DEBUG: bool = True
    API_V1_STR: str = "/api/v1"

    # CORS configuration
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://yeswanth-portfolio.onrender.com",
    ]

    # Contact & Email Notification Settings
    CONTACT_TO_EMAIL: str = "ugginayeswanthnarasayyanaidu@gmail.com"
    EMAIL_SERVICE_API_KEY: str = ""
    RESEND_API_KEY: str = ""
    EMAIL_FROM: str = "Yeswanth Portfolio <onboarding@resend.dev>"

    # Optional SMTP Fallback Settings
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    SMTP_FROM: str = ""
    SMTP_TLS: bool = True

    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        if isinstance(v, str):
            if v.startswith("[") and v.endswith("]"):
                try:
                    return json.loads(v)
                except json.JSONDecodeError:
                    pass
            return [origin.strip() for origin in v.split(",") if origin.strip()]
        elif isinstance(v, list):
            return v
        return []

    # PostgreSQL Database URL placeholder (overridden by DATABASE_URL env var)
    DATABASE_URL: str = (
        "postgresql+psycopg2://user:password@localhost:5432/portfolio_db"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )


settings = Settings()
