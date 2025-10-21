# Security Setup Guide

## 🔒 Protecting Your Credentials

This guide explains how to secure your Firebase credentials and admin passwords now that your repository is public.

## What Changed

Your application now uses **secure environment configuration** instead of hardcoded credentials:

- ✅ Firebase API keys are loaded from `config.local.js` (git-ignored)
- ✅ Admin credentials are loaded from `config.local.js` (git-ignored)
- ✅ Template files show the structure without exposing real values
- ✅ `.gitignore` prevents accidental commits of sensitive files

## Quick Setup (5 minutes)

### 1. Create Your Local Configuration

```bash
# Copy the template
cp config.local.js.template config.local.js
```

### 2. Edit config.local.js

Open `config.local.js` and fill in your actual credentials:

```javascript
window.LOCAL_CONFIG = {
    // Your Firebase credentials from Firebase Console
    FIREBASE_API_KEY: "your_actual_firebase_api_key",
    FIREBASE_AUTH_DOMAIN: "your-project.firebaseapp.com",
    FIREBASE_PROJECT_ID: "your-project-id",
    FIREBASE_STORAGE_BUCKET: "your-project.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "123456789",
    FIREBASE_APP_ID: "1:123456789:web:abcdef",
    FIREBASE_MEASUREMENT_ID: "G-XXXXXXXXXX",

    // Choose a STRONG admin password
    ADMIN_USERNAME: "your_admin_username",
    ADMIN_PASSWORD: "your_very_strong_password_here"
};
```

### 3. Update Your HTML Files

You need to load `config.local.js` **before** other scripts. Add this line to your HTML files:

#### In `index.html`:
```html
<head>
    ...
    <!-- Load configuration FIRST -->
    <script src="config.local.js"></script>

    <!-- Then load Firebase and other scripts -->
    <script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js"></script>
    ...
</head>
```

#### In `admin.html`:
```html
<head>
    ...
    <!-- Load configuration FIRST -->
    <script src="config.local.js"></script>

    <!-- Then load other scripts -->
    <script type="module" src="js/admin.js"></script>
    ...
</head>
```

### 4. Verify Setup

1. Open your browser's DevTools (F12)
2. Load your application
3. Check the Console tab
4. You should see: "Firebase initialized successfully"
5. If you see errors, check that `config.local.js` exists and has correct values

## 🚨 Emergency: Credentials Were Already Exposed

If your credentials were already pushed to GitHub (in previous commits), follow these steps:

### Step 1: Secure Your Firebase Project

1. **Restrict API Key Usage:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select your project
   - Navigate to: **APIs & Services > Credentials**
   - Find your "Browser key (auto created by Firebase)"
   - Click "Edit"
   - Under "Application restrictions":
     - Select "HTTP referrers"
     - Add your domain(s): `https://yourdomain.com/*`
   - Under "API restrictions":
     - Select "Restrict key"
     - Enable only: Cloud Firestore API, Firebase ML API
   - Click "Save"

2. **Review Firestore Security Rules:**
   - Go to Firebase Console > Firestore Database > Rules
   - Ensure rules are restrictive (see FIREBASE_SETUP.md Step 3)
   - Verify comments can only be created/updated with proper validation

3. **Monitor for Suspicious Activity:**
   - Go to Firebase Console > Firestore Database > Usage tab
   - Check for unusual spikes in reads/writes
   - Go to Firestore > Data and review recent comments for spam

### Step 2: Change Admin Password

The admin password in git history is now useless because:
1. The app now reads from `config.local.js` (which is not in git)
2. Simply set a new, strong password in your `config.local.js`

**Generate a strong password:**
```bash
# On macOS/Linux
openssl rand -base64 20

# Or use a password manager like 1Password, Bitwarden, etc.
```

### Step 3: Clean Git History (Optional but Recommended)

⚠️ **Warning:** This rewrites git history and will affect collaborators.

If you want to remove credentials from git history entirely:

```bash
# Install BFG Repo-Cleaner (easier than git-filter-branch)
brew install bfg  # macOS
# or download from: https://rtyley.github.io/bfg-repo-cleaner/

# Create a backup first!
cd ..
cp -r CertQuiz CertQuiz-backup

# Remove the exposed files from history
cd CertQuiz
bfg --delete-files firebase-config.js
bfg --delete-files FIREBASE_SETUP.md

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (WARNING: This rewrites public history!)
git push --force
```

**Important:** After force pushing:
- Anyone who cloned the repo should delete their local copy and re-clone
- Consider creating a fresh repository if the exposure is serious

## 🔐 Best Practices Going Forward

### 1. Never Commit Sensitive Files
The `.gitignore` is configured to block:
- `config.local.js`
- `.env` files
- Any files matching `*.local.*`

### 2. Use Strong Passwords
```javascript
// ❌ BAD
ADMIN_PASSWORD: "admin"
ADMIN_PASSWORD: "password123"

// ✅ GOOD
ADMIN_PASSWORD: "Kx9$mP2#nQ8@wL5^rT3&vY7!zN4%"
```

### 3. Consider Firebase Authentication
For production, replace the simple admin login with Firebase Authentication:
- Email/Password authentication
- Google Sign-In
- Role-based access control

### 4. Enable GitHub Secret Scanning
If you have admin access to the repo:
1. Go to Settings > Security > Code security and analysis
2. Enable "Secret scanning"
3. Enable "Push protection"

This will alert you if secrets are accidentally committed.

### 5. Use Environment Variables for Deployment

If deploying to platforms like Netlify, Vercel, or GitHub Pages:

1. Set environment variables in your hosting platform
2. Use a build script to inject them
3. Never commit the built files with secrets

Example for Netlify/Vercel:
```bash
# In your hosting platform's environment variables:
FIREBASE_API_KEY=your_key
FIREBASE_PROJECT_ID=your_project
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

## 📊 Regular Security Checks

### Weekly:
- Check Firebase Console > Usage for anomalies
- Review recent comments in Firestore for spam

### Monthly:
- Rotate admin password
- Review Firestore security rules
- Check API key restrictions

### After Any Security Incident:
1. Immediately restrict API key in Google Cloud Console
2. Change admin password
3. Review Firestore data for unauthorized changes
4. Check Firebase Console logs

## 🆘 Getting Help

If you discover a security issue:
1. Don't commit any fixes that might reveal more information
2. Restrict API keys immediately
3. Change passwords
4. Review the Firebase security documentation

## Additional Resources

- [Firebase Security Documentation](https://firebase.google.com/docs/rules)
- [Google Cloud API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [OWASP Password Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

---

**Remember:** Security is an ongoing process, not a one-time setup. Stay vigilant! 🛡️
