from fastapi import APIRouter

from app.services.assessment_service import AssessmentService

router = APIRouter(
    prefix="/assessment",
    tags=["Assessment"]
)

assessment_service = AssessmentService()


@router.post("/start/{lesson_id}")
def start_practice(lesson_id: int):
    return assessment_service.start_practice(lesson_id)


@router.get("/process")
def process():
    return assessment_service.process_landmarks()


@router.post("/end")
def end():
    return assessment_service.end_practice()