# 🚀 Quick Deploy to GitHub Pages

## Setup in 5 Minutes

### Step 1: Add Secrets to GitHub (2 minutes)

1. Go to your repository: https://github.com/YOUR_USERNAME/CertQuiz
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret** button

Add these 9 secrets one by one:

#### Firebase Secrets
```
Name: FIREBASE_API_KEY
Value: AIzaSyAW2uOYbgqQ3G_7krgW-PM4nQ8vQfA3l_k
```

```
Name: FIREBASE_AUTH_DOMAIN
Value: certquiz-aada9.firebaseapp.com
```

```
Name: FIREBASE_PROJECT_ID
Value: certquiz-aada9
```

```
Name: FIREBASE_STORAGE_BUCKET
Value: certquiz-aada9.firebasestorage.app
```

```
Name: FIREBASE_MESSAGING_SENDER_ID
Value: 212386801853
```

```
Name: FIREBASE_APP_ID
Value: 1:212386801853:web:70081b404d35cd265cafd4
```

```
Name: FIREBASE_MEASUREMENT_ID
Value: G-S1J6NPS95T
```

#### Admin Secrets
```
Name: ADMIN_USERNAME
Value: your_admin_username
```

```
Name: ADMIN_PASSWORD
Value: your_strong_password
```

**⚠️ Important:** Use a strong password for ADMIN_PASSWORD (not "admin")!

### Step 2: Enable GitHub Pages (1 minute)

1. Still in **Settings**, click **Pages** (left sidebar)
2. Under **Source**, select: **GitHub Actions**
3. Click **Save**

### Step 3: Push Your Changes (1 minute)

```bash
# Make sure you're in your CertQuiz directory
cd /path/to/CertQuiz

# Add all files
git add .

# Verify config.local.js is NOT being committed
git status | grep config.local.js
# Should only show: .github/workflows/deploy.yml and docs, NOT config.local.js

# Commit
git commit -m "Add GitHub Pages deployment workflow and documentation"

# Push
git push origin main
```

### Step 4: Watch It Deploy (1 minute)

1. Go to **Actions** tab in your GitHub repository
2. You'll see a workflow running: "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark ✅)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/CertQuiz/`

### Step 5: Restrict Firebase API Key (Security!)

1. Go to: https://console.cloud.google.com/
2. Select project: **certquiz-aada9**
3. Click **APIs & Services** → **Credentials**
4. Find "Browser key (auto created by Firebase)"
5. Click the **Edit** icon (pencil)
6. Under **Application restrictions**:
   - Select "HTTP referrers (web sites)"
   - Click **Add an item**
   - Add: `https://YOUR_USERNAME.github.io/*` (replace YOUR_USERNAME)
   - Add: `http://localhost:*` (for local testing)
   - Add: `http://127.0.0.1:*` (for local testing)
7. Under **API restrictions**:
   - Select "Restrict key"
   - Check: ✅ Cloud Firestore API
   - Check: ✅ Firebase ML API (optional)
8. Click **Save**

## ✅ Done!

Your app is now deployed to GitHub Pages!

Visit: `https://YOUR_USERNAME.github.io/CertQuiz/`

## 🔄 Future Updates

Every time you push to main branch:
- GitHub Actions automatically rebuilds
- Injects your secrets into config.local.js
- Deploys to GitHub Pages
- Usually takes 1-2 minutes

No manual deployment needed! 🎉

## 🔍 Troubleshooting

### Deployment Failed?

Check the Actions tab for error messages:
1. Go to **Actions** tab
2. Click the failed workflow
3. Check which step failed
4. Common issues:
   - Missing secrets → Add them in Settings → Secrets
   - Wrong secret names → Must match exactly (case-sensitive)
   - GitHub Pages not enabled → Enable in Settings → Pages

### Site Not Loading?

1. Check if deployment succeeded (Actions tab)
2. Wait a few minutes for DNS propagation
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check browser console (F12) for errors

### Firebase Errors?

1. Check browser console (F12)
2. If you see "Firebase not configured":
   - Verify all secrets are added in GitHub
   - Check secret values are correct
   - Redeploy by pushing a new commit

### Admin Login Not Working?

1. Check that ADMIN_USERNAME and ADMIN_PASSWORD secrets are set
2. Make sure you're using the correct credentials
3. The password will be visible in page source - this is expected
4. Consider upgrading to Firebase Authentication (see GITHUB_PAGES_DEPLOYMENT.md)

## 📚 More Information

- **[GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)** - Full deployment guide
- **[SECURITY_SETUP.md](SECURITY_SETUP.md)** - Security best practices
- **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)** - Firebase configuration

## ⚠️ Security Note

With this setup:
- ✅ Firebase API key is public (this is normal and secure with Firestore rules)
- ✅ API key is restricted to your GitHub Pages domain
- ⚠️ Admin password is visible in deployed JavaScript

**Recommendation:** For production, consider:
1. Using Firebase Authentication instead of hardcoded admin password
2. Hosting admin page separately (not on GitHub Pages)
3. Disabling admin features in production

See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) for security improvements.

---

Need help? Check the troubleshooting section or open an issue!
