# Firebase Setup Guide for CertQuiz Comments System

This guide will walk you through setting up Firebase for the comments system in your quiz application.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Enter a project name (e.g., "CertQuiz")
4. (Optional) Enable Google Analytics
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project, click the **Web icon** (`</>`) to add a web app
2. Enter an app nickname (e.g., "CertQuiz Web")
3. (Optional) Set up Firebase Hosting if you want
4. Click "Register app"
5. **Copy the configuration object** - you'll need this in Step 4

The configuration should look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAW2uOYbgqQ3G_7krgW-PM4nQ8vQfA3l_k",
  authDomain: "certquiz-aada9.firebaseapp.com",
  projectId: "certquiz-aada9",
  storageBucket: "certquiz-aada9.firebasestorage.app",
  messagingSenderId: "212386801853",
  appId: "1:212386801853:web:70081b404d35cd265cafd4",
  measurementId: "G-S1J6NPS95T"
};
```

## Step 3: Set Up Firestore Database

1. In the Firebase Console, go to **Build** > **Firestore Database**
2. Click "Create database"
3. Choose a starting mode:
   - **Production mode** (recommended for production): Requires security rules
   - **Test mode** (easier for development): Open for 30 days
4. Select a Cloud Firestore location (choose one close to your users)
5. Click "Enable"

### Security Rules (Important!)

After creating your database, set up security rules:

1. Go to **Firestore Database** > **Rules** tab
2. Replace the default rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Comments collection
    match /comments/{commentId} {
      // Allow anyone to read comments
      allow read: if true;

      // Allow anyone to create comments
      allow create: if request.resource.data.keys().hasAll([
        'questionId', 'text', 'author', 'isAnonymous',
        'userId', 'votes', 'timestamp', 'createdAt'
      ])
      && request.resource.data.text is string
      && request.resource.data.text.size() <= 500
      && request.resource.data.author is string
      && request.resource.data.author.size() <= 30;

      // Allow updates only to the votes field
      allow update: if request.resource.data.diff(resource.data).affectedKeys()
        .hasOnly(['votes']);

      // Prevent deletion (optional - remove this line if you want to allow deletions)
      allow delete: if false;
    }
  }
}
```

3. Click "Publish"

**Note:** These rules allow anyone to:
- Read all comments
- Create new comments (with validation)
- Update only the vote count
- NOT delete comments

Adjust these rules based on your security requirements.

## Step 4: Configure Your Application

1. Open `js/firebase-config.js` in your project
2. Replace the placeholder values with your Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",                    // Replace with your API key
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // Replace with your auth domain
    projectId: "YOUR_PROJECT_ID",              // Replace with your project ID
    storageBucket: "YOUR_PROJECT_ID.appspot.com",   // Replace with your storage bucket
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // Replace with your sender ID
    appId: "YOUR_APP_ID"                       // Replace with your app ID
};
```

3. Save the file

## Step 5: Create Indexes (Optional - Not Required!)

**Good news:** The app is designed to work without composite indexes! Comments are sorted in the application code, so you don't need to create any custom indexes.

However, if you want optimal performance with many comments, you can create a single-field index:

1. Go to **Firestore Database** > **Indexes** tab
2. Single-field indexes are automatically created for `questionId`
3. No action needed - Firebase handles this automatically!

**Note:** The app fetches all comments for a question and sorts them locally, which works great for typical quiz usage (few comments per question). This approach avoids the need for complex composite indexes.

## Step 6: Test Your Setup

1. Open your quiz application in a browser
2. Navigate to a question
3. Scroll down to the comments section
4. Try posting a comment
5. Try voting on a comment
6. Check the Firebase Console > Firestore Database to see your data

## Features Overview

### Comment System Features:
- ✅ Users can post comments on each question
- ✅ Optional username (generates anonymous name if blank)
- ✅ Upvote/downvote system
- ✅ Comments sorted by votes (highest first)
- ✅ Character limit: 500 characters
- ✅ Username limit: 30 characters
- ✅ Timestamps for each comment
- ✅ Anonymous badge for auto-generated names
- ✅ User vote tracking (localStorage)
- ✅ Unique question IDs across different topics

### Anonymous Name Generator:
If a user doesn't provide a name, the system generates one like:
- `WiseStudent482`
- `CleverArchitect729`
- `ThoughtfulExpert156`

## Troubleshooting

### "Firebase Not Configured" Error
- Make sure you've replaced the placeholder values in `js/firebase-config.js`
- Check that all values are correct and in quotes
- Verify that Firebase SDK scripts are loaded in `index.html`

### Comments Not Loading
- Check browser console for errors (F12)
- Verify Firestore Database is created and enabled
- Check security rules allow read access
- Ensure you have an internet connection

### Comments Not Posting
- Check security rules allow create operations
- Verify character limits (500 for comments, 30 for usernames)
- Check browser console for detailed error messages

### Votes Not Working
- Check security rules allow update operations on 'votes' field
- Clear browser cache and try again
- Verify you're not rate-limited by Firebase

## Firebase Pricing

Firebase offers a **generous free tier** (Spark plan) that includes:
- 50,000 reads/day
- 20,000 writes/day
- 20,000 deletes/day
- 1 GB storage

This should be sufficient for most quiz applications. Monitor usage in the Firebase Console.

For more users, consider upgrading to the **Blaze plan** (pay-as-you-go).

## Security Best Practices

1. **Never commit** your Firebase configuration to public repositories if it contains sensitive data
2. Set up **proper security rules** before deploying to production
3. Consider implementing **rate limiting** to prevent abuse
4. Monitor your **Firebase usage** regularly
5. Consider adding **authentication** for added security
6. Use **reCAPTCHA** to prevent spam (optional enhancement)

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Console](https://console.firebase.google.com/)

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Review Firebase Console logs
3. Verify all configuration values are correct
4. Ensure security rules are properly set

---

**Congratulations!** Your comments system should now be fully functional. Users can discuss questions, report issues, and vote on helpful comments.
