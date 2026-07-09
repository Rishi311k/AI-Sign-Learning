from fastapi import FastAPI

from app.api.routers.health import router as health_router
from app.api.routers.prediction import router as prediction_router
from app.api.routers.lesson import router as lesson_router
from app.api.routers.assessment import router as assessment_router
from app.api.routers.session import router as session_router
from app.core.logging_config import setup_logging

logger = setup_logging()

logger.info("Starting AI Sign Language Backend...")
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API for AI Sign Language Learning Platform"
)

app.include_router(health_router)
app.include_router(prediction_router)
app.include_router(lesson_router)
app.include_router(assessment_router)
app.include_router(session_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to AI Sign Language Learning API"
    }