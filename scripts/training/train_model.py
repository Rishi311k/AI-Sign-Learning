from pathlib import Path

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

MODELS_DIR = Path("models/trained_models")
ENCODER_DIR = Path("models/label_encoders")

MODELS_DIR.mkdir(parents=True, exist_ok=True)
ENCODER_DIR.mkdir(parents=True, exist_ok=True)

DATASET_PATH = Path("datasets/landmarks.csv")


def load_dataset():

    print("Loading dataset...")

    df = pd.read_csv(DATASET_PATH)

    print(f"Dataset Shape: {df.shape}")

    X = df.drop(columns=["label"])

    y = df["label"]

    encoder = LabelEncoder()

    y_encoded = encoder.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(
    X,
    y_encoded,
    test_size=0.2,
    random_state=42,
    stratify=y_encoded
)

    return X_train, X_test, y_train, y_test, encoder


def main():

    X_train, X_test, y_train, y_test, encoder = load_dataset()

    print("\nTraining Random Forest Model...")

    model = RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        n_jobs=-1
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    print(f"\nAccuracy : {accuracy * 100:.2f}%")

    print("\nClassification Report\n")
    print(classification_report(y_test, predictions))

    joblib.dump(
        model,
        MODELS_DIR / "asl_classifier.pkl"
    )

    joblib.dump(
        encoder,
        ENCODER_DIR / "label_encoder.pkl"
    )

    print("\nModel Saved Successfully!")


if __name__ == "__main__":
    main()