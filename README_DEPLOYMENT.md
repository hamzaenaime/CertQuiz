# 📖 CertQuiz - Deployment README

## 🌟 Two Ways to Run This App

### Option 1: Local Development (Private)
✅ Use `config.local.js` (git-ignored)
✅ Full admin access
✅ Keep credentials private

### Option 2: GitHub Pages (Public)
✅ Use GitHub Actions + Secrets
✅ Auto-deploy on push
✅ Public quiz site

---

## 🏠 Local Development Setup

For running on your computer:

1. **Create your config:**
   ```bash
   cp config.local.js.template config.local.js
   ```

2. **Edit `config.local.js`** with your Firebase credentials

3. **Open in browser:**
   ```bash
   open index.html
   ```

**Files Used:**
- `config.local.js` (your actual credentials - git-ignored ✅)
- `js/env-loader.js` (loads config)
- `js/firebase-config.js` (uses loaded config)

---

## 🚀 GitHub Pages Deployment

For hosting publicly at `https://username.github.io/CertQuiz/`:

### Quick Setup

1. **Add GitHub Secrets** (Settings → Secrets → Actions)
   - Add 9 secrets (Firebase + Admin credentials)
   - See [QUICK_DEPLOY_GUIDE.md](QUICK_DEPLOY_GUIDE.md) for exact values

2. **Enable GitHub Pages** (Settings → Pages)
   - Source: GitHub Actions

3. **Push to deploy:**
   ```bash
   git push origin main
   ```

4. **Watch it deploy** (Actions tab)
   - Takes 1-2 minutes
   - Your site: `https://username.github.io/CertQuiz/`

**How It Works:**
- GitHub Actions workflow (`.github/workflows/deploy.yml`) runs
- Creates `config.local.js` from your secrets
- Deploys everything to GitHub Pages
- Your secrets stay private ✅

**Files Used:**
- `.github/workflows/deploy.yml` (deployment automation)
- GitHub Secrets (store credentials)
- Generated `config.local.js` (created during build)

---

## 📁 File Structure

```
CertQuiz/
├── config.local.js              ← YOUR CREDENTIALS (git-ignored, local only)
├── config.local.js.template     ← Template for others
├── .github/workflows/deploy.yml ← GitHub Pages deployment
├── js/
│   ├── env-loader.js           ← Loads configuration
│   ├── firebase-config.js      ← Uses loaded config
│   └── admin.js                ← Admin features
├── index.html                   ← Main quiz app
├── admin.html                   ← Admin portal
└── Documentation/
    ├── QUICK_DEPLOY_GUIDE.md   ← START HERE for GitHub Pages
    ├── GITHUB_PAGES_DEPLOYMENT.md
    ├── SECURITY_SETUP.md
    └── FIREBASE_SETUP.md
```

---

## 🔒 Security Summary

| Component | Local Dev | GitHub Pages |
|-----------|-----------|--------------|
| **Firebase API Key** | In `config.local.js` | From GitHub Secrets → Public in deployed code |
| **Admin Password** | In `config.local.js` | From GitHub Secrets → Public in deployed code |
| **Git Status** | ✅ Not committed | ✅ Not committed (generated during build) |
| **API Key Restriction** | Optional | ⚠️ Required! Restrict to your domain |

### Important Security Notes

1. **Firebase API keys are meant to be public**
   - Security is enforced by Firestore Rules
   - Still restrict to your domain in Google Cloud Console

2. **Admin password will be visible** on GitHub Pages
   - It's in the deployed JavaScript
   - Anyone can view page source and see it
   - **Solutions:**
     - Use Firebase Authentication (recommended)
     - Host admin page separately
     - Accept it and change password regularly

3. **GitHub Secrets are secure**
   - Only repository admins can see them
   - Used during build, not stored in deployed code
   - But the output (config.local.js) is public

---

## 📚 Documentation

### For Deployment
- **[QUICK_DEPLOY_GUIDE.md](QUICK_DEPLOY_GUIDE.md)** ← 5-minute GitHub Pages setup
- **[GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)** ← Full deployment guide

### For Security
- **[SECURITY_SETUP.md](SECURITY_SETUP.md)** ← Security best practices
- **[SECURITY_MIGRATION.md](SECURITY_MIGRATION.md)** ← What changed and why

### For Setup
- **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)** ← Firebase configuration
- **[COMMIT_THESE_CHANGES.md](COMMIT_THESE_CHANGES.md)** ← How to commit security changes

---

## 🎯 Quick Commands

### Local Development
```bash
# First time setup
cp config.local.js.template config.local.js
# Edit config.local.js with your credentials
open index.html
```

### Deploy to GitHub Pages
```bash
# Make sure secrets are added in GitHub Settings first!
git add .
git commit -m "Your message"
git push origin main
# Check Actions tab to watch deployment
```

### Update Deployment
```bash
# Just push - auto-deploys!
git push origin main
```

---

## ✅ Quick Checklist

### For Local Development
- [ ] Created `config.local.js` from template
- [ ] Added Firebase credentials
- [ ] App loads without errors
- [ ] Comments system works
- [ ] Admin login works

### For GitHub Pages
- [ ] Added all 9 secrets to GitHub
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Pushed code with workflow file
- [ ] Deployment succeeded (Actions tab)
- [ ] Restricted Firebase API key to GitHub Pages domain
- [ ] Site works at `https://username.github.io/CertQuiz/`

---

## 🆘 Need Help?

1. **For local development issues:** See [SECURITY_SETUP.md](SECURITY_SETUP.md)
2. **For deployment issues:** See [QUICK_DEPLOY_GUIDE.md](QUICK_DEPLOY_GUIDE.md) → Troubleshooting
3. **For security questions:** See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md)

---

## 🎉 Summary

**Local Development:**
- ✅ Use `config.local.js` (git-ignored)
- ✅ Private and secure
- ✅ Full admin access

**GitHub Pages:**
- ✅ Use GitHub Actions + Secrets
- ✅ Auto-deploy on push
- ✅ Public quiz site
- ⚠️ Admin password is visible (consider Firebase Auth)

Choose the right approach for your needs! 🚀
