import argparse
from pathlib import Path
import cv2


def main():
    parser = argparse.ArgumentParser(description="Load and inspect an image")

    parser.add_argument(
        "--image",
        type=str,
        required=True,
        help="Path to the image"
    )

    args = parser.parse_args()

    image_path = Path(args.image)

    if not image_path.exists():
        print("Image not found!")
        return

    image = cv2.imread(str(image_path))

    if image is None:
        print("Failed to read image.")
        return

    height, width, channels = image.shape

    print("\n========== IMAGE INFORMATION ==========")
    print(f"File      : {image_path.name}")
    print(f"Height    : {height}")
    print(f"Width     : {width}")
    print(f"Channels  : {channels}")
    print(f"Image Size: {image.size} pixels")
    print("=" * 37)

    cv2.imshow("Loaded Image", image)

    cv2.waitKey(0)
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()