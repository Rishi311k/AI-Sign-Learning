# 🤟 AI Sign Language Learning & Assessment Platform

An AI-powered platform designed to help users learn and practice American Sign Language (ASL) using real-time hand tracking, computer vision, and machine learning.

The platform provides interactive learning, real-time gesture recognition, progress tracking, and AI-based feedback to make sign language education more engaging and accessible.

---

## 🚀 Features

### Current Features

- ✅ Modern React Frontend
- ✅ Responsive Landing Page
- ✅ Authentication Pages
- ✅ FastAPI Backend
- ✅ RESTful API Architecture
- ✅ Swagger API Documentation
- ✅ Lesson Management APIs
- ✅ Practice Session Management
- ✅ Assessment Workflow
- ✅ Webcam Integration
- ✅ Real-Time MediaPipe Hand Tracking
- ✅ 21 Hand Landmark Detection
- ✅ Multi-Hand Detection
- ✅ Live FPS Counter
- ✅ Hand Count Display
- ✅ JSON Landmark Capture Utility
- ✅ Dataset Explorer
- ✅ Image Loader Utility
- ✅ Logging Configuration
- ✅ Centralized Project Configuration
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
│   │   │   ├── gesture_recognition/
│   │   │   └── utils/
│   │   │
│   │   ├── api/
│   │   │   └── routers/
│   │   │       ├── health.py
│   │   │       ├── prediction.py
│   │   │       ├── lesson.py
│   │   │       ├── assessment.py
│   │   │       └── session.py
│   │   │
│   │   ├── content/
│   │   ├── core/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── captures/
│   └── requirements.txt
│
├── frontend/
├── datasets/
├── models/
├── scripts/
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
- FastAPI
- Uvicorn
- Pydantic

---

## AI / Machine Learning

- MediaPipe Hands
- OpenCV
- Computer Vision
- TensorFlow *(Upcoming)*
- Keras *(Upcoming)*
- Scikit-learn *(Upcoming)*

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
## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root Endpoint |
| GET | `/health` | Backend Health Check |
| POST | `/predict` | Gesture Prediction (Placeholder) |
| GET | `/lessons` | Get All Lessons |
| GET | `/lessons/{id}` | Get Lesson Details |
| POST | `/assessment/start/{lesson_id}` | Start Practice |
| GET | `/assessment/process` | Process Landmarks |
| POST | `/assessment/end` | End Practice |
| POST | `/sessions/start/{lesson_id}` | Start Session |
| POST | `/sessions/{session_id}/attempt` | Increase Attempt Count |
| POST | `/sessions/{session_id}/end` | End Session |
| GET | `/sessions/{session_id}` | Get Session Details |

Swagger Documentation

```
http://127.0.0.1:8000/docs
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
- FastAPI Backend
- Backend Architecture
- REST APIs
- Lesson Module
- Session Management
- Assessment Workflow
- Dataset Utilities
- Webcam Module
- MediaPipe Integration
- FPS Counter
- Landmark Extraction
- JSON Capture
- Logging
- Configuration
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