from fastapi import APIRouter
from app.api.endpoints import health, contact

api_router = APIRouter()

# API v1 routes
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(contact.router, tags=["Contact"])

