from fastapi import APIRouter
from app.api.endpoints import health

api_router = APIRouter()

# API v1 routes
api_router.include_router(health.router, tags=["Health"])
