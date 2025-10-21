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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
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

**IMPORTANT: This application now uses secure credential management. Never commit your actual credentials to Git!**

1. Copy the configuration template:
   ```bash
   cp config.local.js.template config.local.js
   ```

2. Open `config.local.js` in your editor

3. Replace the placeholder values with your Firebase configuration from Step 2:
   ```javascript
   window.LOCAL_CONFIG = {
       FIREBASE_API_KEY: "your_actual_api_key",
       FIREBASE_AUTH_DOMAIN: "your_project_id.firebaseapp.com",
       FIREBASE_PROJECT_ID: "your_project_id",
       FIREBASE_STORAGE_BUCKET: "your_project_id.appspot.com",
       FIREBASE_MESSAGING_SENDER_ID: "your_messaging_sender_id",
       FIREBASE_APP_ID: "your_app_id",
       FIREBASE_MEASUREMENT_ID: "your_measurement_id",

       // Set strong admin credentials
       ADMIN_USERNAME: "your_chosen_username",
       ADMIN_PASSWORD: "your_strong_password"
   };
   ```

4. Save the file. **The `.gitignore` file ensures `config.local.js` will never be committed to Git.**

5. Add `config.local.js` to your HTML files. In `index.html` and `admin.html`, add this line **before** other script imports:
   ```html
   <script src="config.local.js"></script>
   ```

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

1. ✅ **Never commit credentials** - This app now uses `config.local.js` which is automatically git-ignored
2. ✅ **Strong admin passwords** - Change the default admin credentials in `config.local.js`
3. ✅ **Firebase security rules** - Properly configured in Step 3 above
4. ⚠️ **Firebase API keys are public by design** - They identify your project but security is enforced by Firestore rules
5. 🔄 **Rotate credentials if exposed** - See "Emergency: Credentials Exposed" section below
6. 📊 **Monitor usage** - Check Firebase Console regularly for unusual activity
7. 🔐 **Consider authentication** - For production, implement Firebase Authentication instead of hardcoded admin passwords
8. 🛡️ **Use reCAPTCHA** - Add spam protection for comment submissions (optional enhancement)

### Emergency: Credentials Already Exposed

If your credentials were already committed to Git (as in previous commits):

**For Firebase API Keys:**
1. Go to Firebase Console > Project Settings
2. Under "General" tab, you can't rotate API keys directly
3. Instead, restrict your API key:
   - Go to Google Cloud Console > APIs & Services > Credentials
   - Find your Browser key (Auto-created by Firebase)
   - Add HTTP referrer restrictions (e.g., only your domain)
   - Add API restrictions (only enable required APIs)

**For Admin Password:**
1. Update `config.local.js` with a new strong password immediately
2. The old password in git history won't work anymore once you update your config

**For Firestore Data:**
1. Ensure your security rules from Step 3 are properly configured
2. These rules prevent unauthorized data modification regardless of API key exposure

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
