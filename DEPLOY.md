# Deploying Pet Haven SG Website

## Quick Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g., `ding2bat-git/petstore`)
2. Push this code:

```bash
git remote add origin https://github.com/ding2bat-git/petstore.git
git branch -M main
git push -u origin main
```

3. In GitHub repo settings → Pages → Source: select "Deploy from branch" → choose `main` / `/`
4. Your site will be live at: `https://ding2bat-git.github.io/petstore/`

## Alternative: Netlify Drop

Visit https://app.netlify.com/drop and drag the entire folder to deploy instantly.

## Alternative: Vercel

```bash
npm install -g vercel
vercel
```

---

The website is ready for immediate deployment with no build step required!