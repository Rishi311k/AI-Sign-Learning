from backend.app.services.preprocessing_service import PreprocessingService


def main():

    service = PreprocessingService()

    report = service.preprocess()

    print(report)


if __name__ == "__main__":
    main()