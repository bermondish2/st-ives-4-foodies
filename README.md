# St Ives 4 Foodies — Static Site

This folder is ready to deploy as a static website.

## Files
- `index.html` — the whole app (HTML + CSS + JS inline)
- `robots.txt` — allow crawling + sitemap hint
- `sitemap.xml` — simple sitemap (update canonical domain if needed)
- `manifest.json` — basic PWA metadata
- `404.html` — fallback for GitHub Pages/Netlify

## Quick Deploy Options

### Netlify
1. Drag & drop this folder into Netlify Drop (or `netlify deploy`).
2. Set build command: _none_ (static).
3. Publish directory: this folder.

### Vercel
1. Import as a new project.
2. Framework preset: “Other” (static).
3. Output directory: this folder.

### GitHub Pages
1. Create a repo and push these files.
2. In repo Settings → Pages: Deploy from branch, root directory.

> Update `link rel="canonical"`, `og:url`, and `Sitemap:` URLs if you deploy to a different domain.
