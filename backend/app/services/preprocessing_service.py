from pathlib import Path
import csv
import json

from app.ai.hand_tracking.landmark_extractor import LandmarkExtractor


class PreprocessingService:

    def __init__(self):

        self.dataset_path = Path("datasets/asl_alphabet/asl_train")
        self.csv_path = Path("datasets/landmarks.csv")
        self.report_path = Path("datasets/dataset_report.json")

    def preprocess(self):

        extractor = LandmarkExtractor()

        columns = []

        for i in range(21):
            columns.extend([
                f"x{i}",
                f"y{i}",
                f"z{i}",
            ])

        columns.append("label")

        total = 0
        successful = 0
        failed = 0
        unreadable = 0

        with open(self.csv_path, "w", newline="") as csv_file:

            writer = csv.writer(csv_file)
            writer.writerow(columns)

            for class_folder in sorted(self.dataset_path.iterdir()):

                if not class_folder.is_dir():
                    continue

                label = class_folder.name

                print(f"Processing {label}...")

                MAX_IMAGES_PER_CLASS = 100  # Set to None to process all

                images = list(class_folder.glob("*"))

                if MAX_IMAGES_PER_CLASS is not None:
                  images = images[:MAX_IMAGES_PER_CLASS]

                for image_path in images:

                    total += 1

                    try:

                        landmarks = extractor.extract(image_path)

                        if landmarks is None:
                            failed += 1
                            continue

                        writer.writerow(landmarks + [label])

                        successful += 1

                    except Exception:
                        unreadable += 1

        extractor.close()

        success_percentage = (
            round((successful / total) * 100, 2)
            if total > 0 else 0
        )

        report = {
            "images_processed": total,
            "successful": successful,
            "failed": failed,
            "unreadable": unreadable,
            "success_percentage": success_percentage,
            "csv_file": str(self.csv_path),
        }

        with open(self.report_path, "w") as file:
            json.dump(report, file, indent=4)

        return report