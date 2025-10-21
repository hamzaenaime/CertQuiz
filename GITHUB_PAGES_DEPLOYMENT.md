# 🚀 GitHub Pages Deployment Guide

## The Problem

GitHub Pages serves static files, so you can't use server-side environment variables. Your `config.local.js` file is git-ignored (which is correct for security), but that means it won't be deployed to GitHub Pages.

## ⚠️ Important: Firebase API Keys and Public Sites

**Good News:** Firebase API keys are **designed to be public**! They're not secret credentials. Security is enforced by:
- Firestore Security Rules (what data can be accessed)
- API Key restrictions (what domains can use the key)

However, you still want to:
1. Keep admin passwords secret ✅
2. Restrict your API key to specific domains ✅
3. Use proper Firestore security rules ✅

## 🎯 Recommended Solution: GitHub Actions

Use GitHub Actions to inject credentials during deployment while keeping them secret in your repository.

### Step 1: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each of these secrets:

| Secret Name | Value |
|------------|-------|
| `FIREBASE_API_KEY` | Your Firebase API key |
| `FIREBASE_AUTH_DOMAIN` | `certquiz-aada9.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | `certquiz-aada9` |
| `FIREBASE_STORAGE_BUCKET` | `certquiz-aada9.firebasestorage.app` |
| `FIREBASE_MESSAGING_SENDER_ID` | `212386801853` |
| `FIREBASE_APP_ID` | Your Firebase app ID |
| `FIREBASE_MEASUREMENT_ID` | Your measurement ID |
| `ADMIN_USERNAME` | Your admin username |
| `ADMIN_PASSWORD` | Your admin password |

### Step 2: Create GitHub Actions Workflow

I'll create this workflow file for you.

### Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Save

### Step 4: Push and Deploy

Once you commit the workflow file, every push to `main` will:
1. Generate `config.local.js` from secrets
2. Build and deploy to GitHub Pages
3. Your site will be live at: `https://yourusername.github.io/CertQuiz/`

## 🔒 Security Considerations

### Is This Secure?

**Yes, with proper precautions:**

1. ✅ **Firebase API Key is public** - This is normal and expected
   - Security is enforced by Firestore rules, not API key secrecy
   - Still restrict the key to your domain (see below)

2. ⚠️ **Admin password is exposed in source** - Anyone can view page source
   - **Solution**: The admin.js file will be in the deployed site, so the password is technically accessible
   - **Better Solution**: Use Firebase Authentication instead (see below)

3. ✅ **GitHub Secrets are secure** - Only accessible to repository admins

### Restricting Your Firebase API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to: **APIs & Services** → **Credentials**
3. Find: "Browser key (auto created by Firebase)"
4. Click **Edit**
5. Under **Application restrictions**:
   - Select "HTTP referrers"
   - Add: `https://yourusername.github.io/*`
   - Add: `http://localhost:*` (for local development)
6. Under **API restrictions**:
   - Select "Restrict key"
   - Enable: Cloud Firestore API, Firebase ML API
7. Click **Save**

## 🔐 Better Admin Security (Recommended)

Since the admin password will be visible in the deployed JavaScript, consider these improvements:

### Option A: Use Firebase Authentication (Best)

Replace the hardcoded admin login with Firebase Auth:
- Email/Password authentication
- Google Sign-In
- Role-based access control

See: https://firebase.google.com/docs/auth

### Option B: Environment-Specific Admin (Quick Fix)

Only enable admin features in local development:
```javascript
// In admin.js
if (window.location.hostname !== 'yourusername.github.io') {
    // Admin features only available locally
} else {
    // Disable admin page on production
    document.body.innerHTML = '<h1>Admin access disabled in production</h1>';
}
```

### Option C: Separate Admin Deployment

Host the admin page separately (not on GitHub Pages):
- Deploy admin.html to a private server
- Keep quiz app on GitHub Pages
- Only you can access the admin URL

## 📋 Deployment Checklist

- [ ] Added all secrets to GitHub repository
- [ ] Created `.github/workflows/deploy.yml` workflow file
- [ ] Enabled GitHub Pages with GitHub Actions source
- [ ] Restricted Firebase API key to your GitHub Pages domain
- [ ] Tested deployment by pushing to main branch
- [ ] Verified site works at your GitHub Pages URL
- [ ] Considered upgrading admin authentication

## 🔄 Alternative: Simple Deployment (Less Secure)

If you don't want to use GitHub Actions, you can commit a production config file:

### Create `config.prod.js` (committed to repo)

```javascript
window.LOCAL_CONFIG = {
    // These can be public
    FIREBASE_API_KEY: "your_api_key",
    FIREBASE_AUTH_DOMAIN: "certquiz-aada9.firebaseapp.com",
    FIREBASE_PROJECT_ID: "certquiz-aada9",
    FIREBASE_STORAGE_BUCKET: "certquiz-aada9.firebasestorage.app",
    FIREBASE_MESSAGING_SENDER_ID: "212386801853",
    FIREBASE_APP_ID: "your_app_id",
    FIREBASE_MEASUREMENT_ID: "your_measurement_id",

    // DON'T include admin credentials
    // or use dummy values and disable admin in production
    ADMIN_USERNAME: "",
    ADMIN_PASSWORD: ""
};
```

### Update HTML files

```html
<!-- For production (GitHub Pages) -->
<script src="config.prod.js"></script>

<!-- For local development, also load config.local.js which overrides prod -->
<script src="config.local.js"></script>
```

The local config will override the prod config when developing locally.

## 🎯 My Recommendation

**For your use case, I recommend:**

1. ✅ Use GitHub Actions workflow (I'll create it for you)
2. ✅ Restrict Firebase API key to your GitHub Pages domain
3. ✅ Either:
   - Upgrade to Firebase Authentication for admin, OR
   - Host admin page separately (not on GitHub Pages), OR
   - Accept that admin password is public and change it regularly

## 📚 Next Steps

1. Review the workflow file I'll create
2. Add secrets to your GitHub repository
3. Enable GitHub Pages with GitHub Actions
4. Restrict your Firebase API key
5. Consider admin security improvements

---

**Ready?** Let me know and I'll create the GitHub Actions workflow file for you!
