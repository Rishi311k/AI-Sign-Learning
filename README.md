# 🤟 AI Sign Language Learning & Assessment Platform

An AI-powered platform designed to help users learn and practice American Sign Language (ASL) using real-time hand tracking, computer vision, and machine learning.

The platform provides interactive learning, real-time gesture recognition, progress tracking, and AI-based feedback to make sign language education more engaging and accessible.

---

## 🚀 Features

### Current Features

- ✅ Modern React Frontend
- ✅ Responsive Landing Page
- ✅ Authentication Pages
- ✅ Modular Backend Architecture
- ✅ Webcam Integration
- ✅ Real-Time MediaPipe Hand Tracking
- ✅ 21 Hand Landmark Detection
- ✅ Multi-Hand Detection
- ✅ Live FPS Counter
- ✅ Hand Count Display
- ✅ JSON Landmark Capture Utility
- ✅ Dataset Explorer
- ✅ Image Loader Utility

---

## 🚧 Upcoming Features

- AI Gesture Recognition
- ASL Alphabet Classification
- Interactive Learning Modules
- Practice Sessions
- Real-Time Assessment
- User Dashboard
- Progress Tracking
- Quiz Mode
- Performance Analytics
- Sentence Recognition
- Video-Based Learning

---

# 🏗 Project Structure

```text
AI-Sign-Learning/
│
├── backend/
│   ├── app/
│   │   ├── ai/
│   │   │   ├── hand_tracking/
│   │   │   │   ├── camera.py
│   │   │   │   ├── detector.py
│   │   │   │   ├── fps.py
│   │   │   │   └── __init__.py
│   │   │   │
│   │   │   ├── gesture_recognition/
│   │   │   │   └── __init__.py
│   │   │   │
│   │   │   └── utils/
│   │   │       ├── landmark_utils.py
│   │   │       ├── file_utils.py
│   │   │       └── __init__.py
│   │   │
│   │   └── main.py
│   │
│   ├── captures/
│   └── requirements.txt
│
├── frontend/
│
├── datasets/
│
├── scripts/
│   ├── dataset_explorer.py
│   ├── image_loader.py
│   ├── camera_test.py
│   └── preprocess_dataset.py
│
└── README.md
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion
- Lucide Icons

---

## Backend

- Python
- OpenCV
- MediaPipe
- NumPy

---

## AI / Machine Learning

- TensorFlow *(Upcoming)*
- Keras *(Upcoming)*
- MediaPipe Hands
- Computer Vision

---

## Dataset

- ASL Alphabet Dataset
- WLASL Dataset *(Upcoming)*

---

# 📷 AI Pipeline

```text
Webcam
     │
     ▼
Camera Module
     │
     ▼
MediaPipe Hand Detection
     │
     ▼
21 Hand Landmarks
     │
     ▼
Landmark Extraction
     │
     ▼
JSON Capture
     │
     ▼
Gesture Recognition (Upcoming)
     │
     ▼
Prediction
```

---

# 📂 Current Modules

## Camera Module

- Webcam Initialization
- Error Handling
- Frame Capture
- Graceful Exit

---

## Hand Tracking

- Detect One or Multiple Hands
- Draw 21 Landmarks
- Draw Landmark Connections

---

## FPS Module

Displays

- Current FPS
- Number of Hands
- "No Hand Detected" Status

---

## Landmark Utility

Extracts

- x Coordinate
- y Coordinate
- z Coordinate

for all 21 landmarks.

---

## JSON Capture Utility

Stores

- Timestamp
- Hand Number
- Landmark Coordinates

Example

```json
{
  "timestamp": "...",
  "hands": [
    {
      "hand": 1,
      "landmarks": [
        {
          "id": 0,
          "x": 0.52,
          "y": 0.73,
          "z": -0.02
        }
      ]
    }
  ]
}
```

---

# 📊 Dataset Utilities

### Dataset Explorer

Automatically

- Counts gesture classes
- Counts images
- Lists class names
- Finds largest class *(Upcoming)*
- Finds smallest class *(Upcoming)*
- CSV Export *(Upcoming)*

---

### Image Loader

Displays

- Image
- Height
- Width
- Channels
- File Size

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Sign-Learning.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run

```bash
cd app

python main.py
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 📸 Screenshots

### Landing Page

*(Coming Soon)*

---

### Hand Tracking

*(Coming Soon)*

---

### Landmark Detection

*(Coming Soon)*

---

# 📅 Development Roadmap

### Phase 1 ✅

- Project Setup
- Frontend UI
- Backend Architecture
- Dataset Utilities
- Webcam Module
- MediaPipe Integration
- FPS Counter
- Landmark Extraction
- JSON Capture

---

### Phase 2 🚧

- Data Preprocessing
- CNN Model
- Gesture Classification
- Model Evaluation

---

### Phase 3 🚧

- Real-Time Prediction
- Learning Module
- Assessment Module
- User Dashboard

---

### Phase 4 🚧

- Sentence Recognition
- Progress Analytics
- Cloud Deployment
- Performance Optimization

---

# 🤝 Contributing

Contributions, feature suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📜 License

This project is intended for educational and research purposes.

---

# 👩‍💻 Developer

**Rishika**

B.Tech Information Technology

AI | Machine Learning | Computer Vision | Full Stack Development

---

⭐ If you found this project useful, consider giving it a star.