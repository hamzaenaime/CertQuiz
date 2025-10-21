# Admin Portal & Questions Management Guide

## Overview
The CertQuiz application now includes a complete admin portal for managing both comments and questions, with support for deploying questions to Firebase.

## Files Created/Modified

### New Files
- **admin.html** - Admin portal interface
- **js/admin.js** - Admin portal logic
- **deploy-questions.html** - Tool for deploying questions to Firebase

### Modified Files
- **js/quiz.js** - Updated to load questions from Firebase with local fallback
- **data/quiz-data.js** - All questions uncommented for local fallback

## Admin Portal Features

### 🔐 Login
- **URL**: `/admin.html` or `admin.html`
- **Username**: `admin`
- **Password**: `admin`

### 💬 Comments Management
- View all comments from all questions
- Delete comments
- Filter by:
  - Anonymous/Named users
  - Positive/Negative votes
  - All comments
- Search by text, author, or question ID
- Real-time statistics

### 📝 Questions Management
- View all questions from Firebase
- Delete individual questions
- Filter by topic (Data Architect, Data Cloud, Integration)
- Search questions by text
- View complete question details including:
  - Question text
  - All answer options
  - Correct answers
  - Explanations
  - Multi-select indicators

## ⚠️ Important: Firebase Security Rules

Before deploying questions or using the application, you **MUST** update Firebase security rules:

**See [FIREBASE_SECURITY_SETUP.md](FIREBASE_SECURITY_SETUP.md) for detailed instructions.**

Quick steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project → Firestore Database → Rules
3. Copy the rules from `firestore.rules` file
4. Click "Publish"

Without this step, you'll get "Missing or insufficient permissions" errors.

---

## Deploying Questions to Firebase

### Step 1: Open Deploy Tool
Open `deploy-questions.html` in your browser

### Step 2: Select Topic
Choose the topic you want to deploy:
- Data Architect
- Data Cloud
- Integration

### Step 3: Deploy
Click "🚀 Deploy Questions" button

The tool will:
- Show progress in real-time
- Display statistics (total, deployed, failed)
- Log each operation
- Complete with a success message

### Step 4: Verify
Open the admin portal and navigate to the Questions tab to verify deployment.

## How Questions Are Loaded

The quiz now follows this loading strategy:

1. **Primary**: Try to load from Firebase
   - Queries `questions` collection by topic
   - Sorts by question number
   - Shows loading message

2. **Fallback**: If Firebase fails or no data found
   - Falls back to local JS files
   - Uses the original import system
   - Shows appropriate loading message

## Firebase Structure

### Questions Collection
```javascript
{
  question: "Question text...",
  answers: {
    a: "Option A",
    b: "Option B",
    c: "Option C",
    d: "Option D"
  },
  correctAnswer: "a" or ["a", "b"],
  explanation: "Explanation text...",
  multiSelect: true/false,
  topic: "architect" | "cloud" | "integration",
  questionNumber: 1,
  createdAt: "2025-01-21T...",
  updatedAt: "2025-01-21T..."
}
```

### Comments Collection
```javascript
{
  questionId: 0,
  text: "Comment text...",
  author: "User Name",
  isAnonymous: false,
  userId: "user_123...",
  votes: 0,
  timestamp: Firestore.Timestamp,
  createdAt: "2025-01-21T..."
}
```

## Features Summary

### ✅ Comment Deletion Fixed
- Changed from inline onclick to proper event listeners
- Now properly deletes comments from Firebase
- Updates UI immediately

### ✅ Questions Management
- Full CRUD operations for questions
- Topic-based filtering
- Search functionality
- Statistics dashboard

### ✅ Hybrid Loading System
- Firebase-first approach
- Automatic fallback to local files
- Smooth user experience
- Loading indicators

## Security Notes

⚠️ **Current Implementation**: Credentials are hardcoded in `js/admin.js`

For production, consider:
- Firebase Authentication
- Backend authentication service
- Role-based access control
- Rate limiting for login attempts

## Troubleshooting

### Questions Not Loading from Firebase
1. Check Firebase configuration in `firebase-config.js`
2. Verify Firestore security rules allow reads
3. Check browser console for errors
4. Ensure questions were deployed for the correct topic

### Comments Not Deleting
1. Verify Firestore security rules allow deletes
2. Check browser console for errors
3. Ensure admin is logged in

### Deploy Tool Issues
1. Verify Firebase configuration
2. Check that `quiz-data.js` exports `quizData`
3. Review browser console for errors
4. Check Firestore security rules allow writes

## Next Steps

To fully utilize this system:

1. **Deploy Questions**: Use `deploy-questions.html` to load questions into Firebase
2. **Test Quiz**: Open `index.html` and verify questions load from Firebase
3. **Manage Content**: Use `admin.html` to manage both questions and comments
4. **Monitor**: Check statistics in admin portal regularly

## URLs Quick Reference

- **Main Quiz**: `/index.html`
- **Admin Portal**: `/admin.html`
- **Deploy Tool**: `/deploy-questions.html`
- **Test Firebase**: `/test-firebase.html`
