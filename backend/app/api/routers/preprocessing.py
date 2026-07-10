from fastapi import APIRouter

from app.services.preprocessing_service import PreprocessingService

router = APIRouter(
    prefix="/preprocess",
    tags=["Preprocessing"]
)

preprocessing_service = PreprocessingService()


@router.post("/")
def preprocess():

    report = preprocessing_service.preprocess()

    return {
        "success": True,
        "message": "Dataset preprocessing completed.",
        "data": report
    }