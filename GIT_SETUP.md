# Git Setup Guide

## Initial Setup

### 1. Initialize Git Repository (if not already done)
```bash
cd /app
git init
```

### 2. Configure Git (use your own credentials)
```bash
git config --global user.name "Erik Helander Bolme"
git config --global user.email "erikbolme@hotmail.com"
```

### 3. Create GitHub Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name: `cybersecurity-portfolio` (or your preferred name)
4. Description: "Professional cybersecurity portfolio showcasing skills and experience"
5. Keep it Public or Private (your choice)
6. **DO NOT** initialize with README (we already have one)

### 4. Add Remote and Push
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cybersecurity-portfolio.git

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Cybersecurity portfolio website

- Dark themed React frontend with purple accents
- Professional sections: Hero, About, Military Experience, Skills, Projects, Contact
- FastAPI backend ready for future features
- MongoDB integration
- Responsive design with Tailwind CSS
- GitHub integration"

# Push to GitHub
git push -u origin main
```

## Important Notes

⚠️ **Before pushing, make sure:**

1. **.env files are in .gitignore** ✅ (Already configured)
2. **No sensitive data** in committed files
3. **node_modules/** is ignored ✅ (Already in .gitignore)

## File Structure Being Committed

```
/app
├── README.md                    # Main project documentation
├── .gitignore                   # Ignore rules
├── backend/
│   ├── README.md               # Backend docs
│   ├── requirements.txt        # Python dependencies
│   └── server.py               # FastAPI server
└── frontend/
    ├── README.md               # Frontend docs
    ├── package.json            # Node dependencies
    ├── tailwind.config.js      # Tailwind config
    ├── public/
    │   └── index.html          # HTML template
    └── src/
        ├── App.js              # Main app component
        ├── App.css             # Global styles
        ├── index.js            # Entry point
        ├── index.css           # Base styles
        ├── components/         # All React components
        ├── data/               # Mock data
        ├── hooks/              # Custom hooks
        └── lib/                # Utilities
```

## Excluded Files (in .gitignore)

- `.env` files (contains sensitive data)
- `node_modules/` (too large, reinstall with yarn)
- `__pycache__/` (Python cache)
- `.ruff_cache/` (linting cache)
- `test_result.md` (temporary test file)
- `.emergent/` (Emergent specific)

## Future Updates

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Recommended Commit Messages Format

```
Type: Short description

Detailed explanation if needed
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `style:` Design changes
- `docs:` Documentation
- `refactor:` Code restructuring
- `test:` Testing updates

**Examples:**
```bash
git commit -m "feat: Add contact form validation"
git commit -m "style: Update hero section colors"
git commit -m "fix: Correct navigation scroll behavior"
git commit -m "docs: Update README with deployment info"
```

## GitHub Repository Settings

After pushing, consider:

1. **Add topics/tags**: cybersecurity, portfolio, react, fastapi, mongodb
2. **Add description**: Professional cybersecurity portfolio
3. **Enable GitHub Pages** (optional): For easy deployment
4. **Add LICENSE**: Consider MIT or similar

## Deploy to Vercel (Optional)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Framework: Create React App
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
4. Add environment variables if needed
5. Deploy!

---

**Good luck with your GitHub upload!** 🚀
