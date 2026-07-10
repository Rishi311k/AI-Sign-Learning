from pathlib import Path
import joblib


class ModelLoader:

    def __init__(self):

        self.model_path = Path("models/trained_models/asl_classifier.pkl")
        self.encoder_path = Path("models/label_encoders/label_encoder.pkl")

        self.model = joblib.load(self.model_path)
        self.encoder = joblib.load(self.encoder_path)

    def predict(self, landmarks):

        prediction = self.model.predict([landmarks])[0]

        label = self.encoder.inverse_transform([prediction])[0]

        return label