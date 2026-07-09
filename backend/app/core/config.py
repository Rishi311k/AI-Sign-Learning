from pathlib import Path


class Settings:

    PROJECT_NAME = "AI Sign Language Learning API"

    VERSION = "1.0.0"

    DEBUG = True

    BASE_DIR = Path(__file__).resolve().parent.parent.parent

    DATASET_DIR = BASE_DIR / "datasets"

    MODEL_DIR = BASE_DIR / "models"

    CAPTURE_DIR = BASE_DIR / "captures"


settings = Settings()