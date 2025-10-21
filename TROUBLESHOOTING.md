# Troubleshooting Guide - Comments System

## Common Issues and Solutions

### Issue 1: "Error loading comments. Please refresh the page."

This error can have several causes. Check the browser console (press F12) for detailed error messages.

#### Cause A: Permission Denied Error
**Console shows:** `Error code: permission-denied`

**Solution:** Your Firestore security rules are blocking read access.

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Firestore Database** > **Rules**
4. Make sure your rules include:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /comments/{commentId} {
      // Allow anyone to read comments
      allow read: if true;

      // Allow anyone to create comments
      allow create: if request.resource.data.keys().hasAll([
        'questionId', 'text', 'author', 'isAnonymous',
        'userId', 'votes', 'timestamp', 'createdAt'
      ]);

      // Allow updates only to votes field
      allow update: if request.resource.data.diff(resource.data).affectedKeys()
        .hasOnly(['votes']);
    }
  }
}
```

5. Click **Publish**

#### Cause B: Firebase Not Configured
**Console shows:** `Firebase not initialized`

**Solution:** Configure Firebase in `js/firebase-config.js`

1. Open `js/firebase-config.js`
2. Replace the placeholder values with your actual Firebase config
3. Get your config from [Firebase Console](https://console.firebase.google.com/) > Project Settings

#### Cause C: Network/Connection Issue
**Console shows:** `Error code: unavailable`

**Solution:**
- Check your internet connection
- Check if Firebase services are down: https://status.firebase.google.com/
- Try disabling ad blockers or privacy extensions
- Check browser console for CORS errors

### Issue 2: Comments Post Successfully But Don't Appear

#### Check 1: Look at Console Logs
Open the browser console (F12) and look for these messages:
- `Initializing comments for question: [questionId]`
- `Loading comments for question: [questionId]`
- `Query successful. Found X comments`

#### Check 2: Verify Data in Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Go to **Firestore Database** > **Data**
3. Look for the `comments` collection
4. Check if your comments are there
5. Verify the `questionId` field matches what you see in the console logs

#### Common Problem: Question ID Mismatch
If comments appear for one topic but not another, the question IDs might be different.

**Solution:** The question ID is generated from the question text. Make sure you're looking at the same question.

### Issue 3: "Firebase Not Configured" Message

**Solution:**
1. Check that `js/firebase-config.js` has your actual Firebase credentials
2. Make sure you replaced ALL placeholder values:
   - `YOUR_API_KEY`
   - `YOUR_PROJECT_ID`
   - `YOUR_MESSAGING_SENDER_ID`
   - `YOUR_APP_ID`
3. Verify the Firebase SDK scripts are loaded in `index.html`

### Issue 4: Votes Not Working

#### Cause A: Update Permission Denied
**Solution:** Check Firestore security rules allow updates to the `votes` field (see Issue 1, Cause A)

#### Cause B: Vote Buttons Not Responding
**Solution:**
1. Check browser console for errors
2. Try refreshing the page
3. Clear browser cache
4. Check if JavaScript is enabled

### Issue 5: Character Counter Not Working

**Cause:** Event listeners not properly attached

**Solution:**
1. Refresh the page
2. Check browser console for errors
3. Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)

## Debugging Steps

### Step 1: Check Browser Console
1. Press F12 to open developer tools
2. Go to the "Console" tab
3. Look for red error messages
4. Copy the error message and search for it in this guide

### Step 2: Check Network Tab
1. Press F12 to open developer tools
2. Go to the "Network" tab
3. Look for failed requests (red)
4. Check if Firebase requests are being blocked

### Step 3: Verify Firebase Configuration

Open your browser console and run:
```javascript
console.log(firebase.apps.length); // Should be > 0
console.log(firebase.apps[0].options); // Should show your config
```

### Step 4: Test Firestore Access

Open your browser console and run:
```javascript
firebase.firestore().collection('comments').limit(1).get()
  .then(snapshot => console.log('Success! Found', snapshot.size, 'comments'))
  .catch(error => console.error('Error:', error));
```

## Error Messages Reference

### "Firebase not initialized"
- **Meaning:** Firebase SDK didn't load or configuration failed
- **Fix:** Check `js/firebase-config.js` and `index.html` for Firebase scripts

### "permission-denied"
- **Meaning:** Firestore security rules are blocking access
- **Fix:** Update security rules in Firebase Console

### "failed-precondition"
- **Meaning:** Missing database index (shouldn't happen with current implementation)
- **Fix:** Click the link in the error message to create the index

### "unavailable"
- **Meaning:** Cannot connect to Firebase
- **Fix:** Check internet connection and Firebase status

### "not-found"
- **Meaning:** Collection or document doesn't exist
- **Fix:** Make sure Firestore Database is enabled in Firebase Console

## Still Having Issues?

### Collect Debug Information:

1. Open browser console (F12)
2. Clear the console
3. Refresh the page
4. Navigate to a question
5. Copy all console messages
6. Take a screenshot of the comments section

### Check These:
- [ ] Firebase project is created and active
- [ ] Firestore Database is enabled
- [ ] Firebase configuration is correct in `js/firebase-config.js`
- [ ] Security rules are published
- [ ] Browser console shows no errors
- [ ] Internet connection is working
- [ ] Using a supported browser (Chrome, Firefox, Safari, Edge - latest versions)

## Useful Console Commands

Test Firebase connection:
```javascript
firebase.apps.length > 0 ? 'Firebase loaded' : 'Firebase not loaded'
```

Check current question ID:
```javascript
// Run this on the quiz page to see the question ID
console.log('Current question ID:', window.lastQuestionId);
```

Manually load comments:
```javascript
firebase.firestore().collection('comments').get()
  .then(snapshot => {
    console.log('Total comments in database:', snapshot.size);
    snapshot.forEach(doc => console.log(doc.id, doc.data()));
  });
```

## Contact

If you've tried all the above and still have issues:
1. Include your browser console output
2. Include Firebase error messages
3. Verify security rules are correct
4. Check Firebase Console for any error logs
