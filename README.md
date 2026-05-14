# 📌 Task Tracker

A full-stack Task Tracker web application developed to help users manage daily tasks efficiently through a clean, responsive, and interactive interface. This project allows users to create tasks, organize pending and completed work, manage deleted tasks through a trash system, and monitor task progress in real time.
---
# 📖 Overview
The Task Tracker application is designed to simplify daily task management by providing a modern web-based productivity solution. The system helps users organize their workflow digitally instead of maintaining tasks manually.
The platform includes:
- Pending Tasks Management
- Completed Tasks Management
- Trash / Deleted Tasks Management
The application supports task creation, editing, completion tracking, restore functionality, dark mode, search functionality, and real-time cloud database integration.
---
# ✨ Key Features
## 👤 User Features
- Add New Tasks
- Edit Existing Tasks
- Delete Tasks
- Restore Deleted Tasks
- Mark Tasks as Completed
- Search Tasks Dynamically
- Filter Pending & Completed Tasks
- Dark Mode Support
- Responsive UI Design
---
# 📊 Task Management Features
- Real-time Task Updates
- Dynamic Task Search
- Pending Task Tracking
- Completed Task Tracking
- Trash Management System
- Task Priority Levels
- Deadline Tracking
- Overdue Task Highlighting
---
# 🛠️ Tech Stack
## Frontend
- HTML5
- CSS3
- JavaScript
- Responsive UI Design
## Backend
- Node.js
 Express.js
## Database & Backend Services
- Supabase
## Development Tools
- VS Code
- Git & GitHub
- Postman
- Nodemon
---
# 📂 Project Architecture
```text
TASK-TRACKER/
│
├── frontend/
│   ├── index.html
│   ├── pending.html
│   ├── completed.html
│   ├── deleted.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── config/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```
---
# ⚙️ Installation & Setup Guide

## Step 1 — Clone Repository

```bash
git clone https://github.com/yourusername/task-tracker.git
```

## Step 2 — Navigate to Project

```bash
cd task-tracker
```

## Step 3 — Install Dependencies

```bash
npm install
```

## Step 4 — Configure Environment Variables

Create a `.env` file inside the backend folder and configure:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=5000
```

## Step 5 — Start Development Server

```bash
npm run dev
```

or

```bash
node server.js
```
---
# 🔄 System Workflow

1. User enters task details through the frontend interface.
2. Frontend sends task data to the backend using Fetch API.
3. Backend validates and processes requests.
4. Task data is stored securely in Supabase database.
5. Tasks are retrieved dynamically and displayed on webpages.
6. Users can update, complete, delete, or restore tasks anytime.
---
# 🔐 Security & Validation
- Environment Variable Protection
- Input Validation
- Secure Database Integration
- Dynamic CRUD Operations
- Task Status Management
---
# 📊 Dashboard Features
- Total Tasks Counter
- Pending Tasks Counter
- Completed Tasks Counter
- Dynamic Search Functionality
- Dark Mode Interface
- Responsive Dashboard Design
---
# 🚀 Future Enhancements
- User Authentication System
- Task Reminder Notifications
- Team Collaboration Features
- Task Categories & Labels
- Calendar Integration
- Mobile Application Version
- Advanced Analytics Dashboard
---
# 🎯 Learning Outcomes
This project helped in understanding:
- Full Stack Web Development
- REST API Development
- Database Integration
- Frontend & Backend Communication
- Cloud Database Management
- Git & GitHub Version Control
- Deployment Process
- Debugging & Troubleshooting
---
# 👩‍💻 Developed By
Harshini  
B.Tech Student | Full Stack Web Development Enthusiast
---
# 📌 GitHub Repository
https://github.com/yourusername/task-tracker
---
# 📄 License
This project is licensed under the MIT License.
---
# 📌 About
Task Tracker is a modern full-stack task management application built using HTML, CSS, JavaScript, Node.js, Express.js, and Supabase with task organization, trash management, dark mode, and responsive UI support.
