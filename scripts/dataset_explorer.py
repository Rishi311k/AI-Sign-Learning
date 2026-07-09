from pathlib import Path


def find_dataset():
    """
    Automatically locate the datasets folder.
    """
    current = Path(__file__).resolve()

    for parent in current.parents:
        datasets = parent / "datasets"
        if datasets.exists():
            return datasets

    return None


def count_images(folder):
    image_extensions = {".jpg", ".jpeg", ".png"}

    return sum(
        1
        for file in folder.iterdir()
        if file.is_file() and file.suffix.lower() in image_extensions
    )


def explore_split(split_path, split_name):
    print(f"\n===== {split_name.upper()} =====")

    if not split_path.exists():
        print(f"{split_name} folder not found.")
        return

    class_folders = sorted(
        [folder for folder in split_path.iterdir() if folder.is_dir()]
    )

    total_images = 0

    for folder in class_folders:
        image_count = count_images(folder)
        total_images += image_count

        print(f"{folder.name:<15} : {image_count}")

    print("-" * 30)
    print(f"Total Classes : {len(class_folders)}")
    print(f"Total Images  : {total_images}")


def main():

    datasets = find_dataset()

    if datasets is None:
        print("datasets folder not found.")
        return

    asl_path = datasets / "asl_alphabet"

    if not asl_path.exists():
        print("asl_alphabet folder not found.")
        return

    print("=" * 40)
    print("ASL DATASET EXPLORER")
    print("=" * 40)

    explore_split(asl_path / "asl_train", "Training Dataset")
    explore_split(asl_path / "asl_test", "Testing Dataset")


if __name__ == "__main__":
    main()