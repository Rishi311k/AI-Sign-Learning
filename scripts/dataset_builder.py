from pathlib import Path
import csv

from extract_landmarks import LandmarkExtractor


DATASET_PATH = Path("datasets/asl_alphabet/asl_train")
OUTPUT_FILE = Path("datasets/landmarks.csv")


def build_dataset():

    extractor = LandmarkExtractor()

    columns = []

    for i in range(21):
        columns.extend([
            f"x{i}",
            f"y{i}",
            f"z{i}"
        ])

    columns.append("label")

    total_images = 0
    successful = 0

    with open(OUTPUT_FILE, "w", newline="") as csv_file:

        writer = csv.writer(csv_file)
        writer.writerow(columns)

        for class_folder in sorted(DATASET_PATH.iterdir()):

            if not class_folder.is_dir():
                continue

            label = class_folder.name

            print(f"Processing {label}...")

            # Process only first 100 images while testing
            images = list(class_folder.glob("*"))[:100]

            for image_path in images:

                total_images += 1

                landmarks = extractor.extract(image_path)

                if landmarks is None:
                    continue

                writer.writerow(landmarks + [label])

                successful += 1

    extractor.close()

    print("\n==========================")
    print("Dataset Builder Completed")
    print("==========================")
    print(f"Images Processed : {total_images}")
    print(f"Successful       : {successful}")
    print(f"CSV Saved To     : {OUTPUT_FILE}")


if __name__ == "__main__":
    build_dataset()