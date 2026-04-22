# Jan Snyders Carpentry — website

Static website for **Jan Snyders Carpentry**, Grabouw, Western Cape.
Plain HTML, CSS and a tiny bit of JavaScript. No build step. Hosted on Netlify.

## Local preview

Just open `index.html` in a browser, or run a tiny local server so links work
exactly like in production:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

## Project structure

```
.
├── index.html              # Home
├── services.html           # Services list
├── gallery.html            # Project photos
├── about.html              # About Jan
├── contact.html            # Contact details + form
├── thanks.html             # Form submission landing page
├── 404.html                # Not-found page
├── robots.txt              # Tells search engines what to crawl
├── sitemap.xml             # Pointers to every page (for Google)
├── netlify.toml            # Netlify config (cache, headers)
└── assets/
    ├── css/styles.css      # All styles
    ├── js/main.js          # Mobile nav + lightbox
    └── images/             # Drop your images here (see images/README.md)
```

## Deploying to Netlify

1. Push this repo to GitHub.
2. On Netlify: **Add new site → Import an existing project → GitHub** and
   pick the repo.
3. **Build command**: leave blank. **Publish directory**: `.` (the root).
4. Netlify will deploy. You'll get a temporary URL like
   `something-something.netlify.app`.
5. In **Domain settings** add your custom domain `jansnyderscarpenter.com`
   and follow the DNS instructions Netlify gives you.

## SEO checklist (after going live)

- [ ] Verify the site in [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `https://jansnyderscarpenter.com/sitemap.xml`
- [ ] Create a [Google Business Profile](https://www.google.com/business/) —
      this is the single biggest thing for local "carpenter near me" searches.
- [ ] List the business on local directories (Brabys, Yellow Pages SA, etc.)
- [ ] Ask happy clients for short Google reviews.

## Updating content

All page copy lives directly in the HTML files — easy to edit. No databases,
no admin panel. Commit and push and Netlify redeploys automatically.
