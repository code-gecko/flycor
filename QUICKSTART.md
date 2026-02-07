# 🚀 Quick Start Guide

Get your Flycorp Farms website running in 3 minutes!

## Step 1: Upload to GitHub

### Option A: Via GitHub Website
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `flycorp-website` (or your preferred name)
3. Don't initialize with README (we already have one)
4. Click "uploading an existing file" or use GitHub Desktop
5. Drag and drop all files from this folder

### Option B: Via Command Line
```bash
# Navigate to this folder in terminal
cd path/to/flycorp-website-github

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Flycorp Farms website"

# Add your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:8080` in your browser!

## Step 3: Deploy Online (Choose One)

### 🟢 Vercel (Easiest - Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live in ~1 minute

### 🔵 Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

### 📦 GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## ✏️ Customization Tips

### Change Website Title
Edit `index.html` line 6:
```html
<title>Your Custom Title</title>
```

### Modify Homepage Content
Edit files in `src/components/home/`:
- `HeroSection.tsx` - Main banner
- `AboutSection.tsx` - About section
- `ProductsSection.tsx` - Products showcase

### Update Colors
Edit `src/index.css` and `tailwind.config.ts`

### Add New Pages
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Change port in vite.config.ts
server: { port: 3000 }
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Need help?**
Open an issue on GitHub!

---

🎉 **That's it!** Your website is ready to go!
