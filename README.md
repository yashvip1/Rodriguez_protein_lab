# Rodríguez Martínez Lab Website

Professional lab website for **Prof. María Rodríguez Martínez**, Associate Professor of Biomedical Informatics & Data Science, Yale School of Medicine.

## 📁 File Structure

```
lab-website/
├── index.html          ← Homepage (PI, news, publications, research overview)
├── people.html         ← PI, research scientists, postdocs, grad students, alumni
├── research.html       ← 4 research areas in detail
├── publications.html   ← Publication list by year
├── gallery.html        ← Photo gallery with lightbox
├── contact.html        ← Contact info, map, open positions
├── style.css           ← All styles
├── main.js             ← Nav interactions + scroll animations
├── images/             ← CREATE this folder and add your photos here
│   ├── pi-photo.jpg
│   ├── claus-horn.jpg
│   ├── postdoc-1.jpg … postdoc-3.jpg
│   ├── grad-1.jpg … grad-3.jpg
│   ├── undergrad-1.jpg
│   ├── gallery-group.jpg
│   ├── gallery-lab-1.jpg … gallery-lab-3.jpg
│   ├── gallery-yale.jpg
│   ├── gallery-conf-1.jpg … gallery-conf-2.jpg
│   ├── gallery-outreach.jpg
│   ├── research-immunology.jpg
│   ├── research-xai.jpg
│   ├── research-cancer.jpg
│   └── research-generative.jpg
└── README.md
```

## 🚀 Deploy to GitHub Pages

1. Create a GitHub repo named `rodriguezmartinez-lab` (or `yourusername.github.io` for a root site)
2. Upload ALL files, keeping the folder structure
3. Go to **Settings → Pages** → Source: `main` branch, `/ (root)` → Save
4. Your site will be live at `https://yourusername.github.io/rodriguezmartinez-lab/`

---

## ✏️ Customization Checklist

Search for `[` in any HTML file to find all placeholders. Here's a summary:

### 🔴 Essential — do these first

- [ ] **PI photo** — save as `images/pi-photo.jpg` (appears on Home + People pages)
- [ ] **Team photos** — save as `images/postdoc-1.jpg`, `images/grad-1.jpg`, etc.
- [ ] **Email** — search for `[REPLACE-EMAIL]` and update (currently `maria.rodriguezmartinez@yale.edu` — confirm this is correct)
- [ ] **Building/Room** — search for `[Building & Room — add when known]` (4 occurrences across HTML files)
- [ ] **News items** — replace `[Mon YYYY]` placeholder news in `index.html` with real updates
- [ ] **Lab member names** — replace `[Postdoc Full Name]`, `[Student Full Name]`, etc. in `people.html`

### 🟡 Important — fill in when you have the info

- [ ] **Recent publications** — replace `[YYYY]` placeholder pub in `index.html` and `publications.html` with newest papers from Google Scholar
- [ ] **Funding** — replace `[Grant Agency & Number]` / `[Grant Title]` in `research.html`
- [ ] **Research area detail** — each research section in `research.html` has a `<!-- REPLACE -->` comment where you can add a current project sentence
- [ ] **Gallery photos** — save real lab photos in `images/` and update `gallery.html` src attributes
- [ ] **Research images** — replace the placehold.co colored boxes in `research.html` with real figures or images
- [ ] **Alumni list** — update `[Alumni Name]` entries in `people.html`
- [ ] **Mailing address** — confirm correct PO Box in `contact.html`
- [ ] **Stat numbers** — update `[#]` lab members count in the Yale strip on `index.html`

### 🟢 Optional

- [ ] **Twitter/X handle** — add real URL in `contact.html`
- [ ] **GitHub org** — add lab GitHub URL in `contact.html`
- [ ] **ORCID** — consider adding ORCID link (0000-0003-3766-4233) to PI profile

---

## 🖼️ Photo Tips

- **PI headshot**: ideally 480×640px or 3:4 ratio, JPG
- **Team photos**: square (400×400px) works best for the grid
- **Gallery**: mix landscape (16:9) and square photos
- **Research figures**: 800×600px (4:3 ratio) is ideal

All images have `onerror` fallbacks so the site won't break while photos are pending — it shows a styled blue placeholder instead.

---

## 🎨 Design Notes

- **Colors**: Yale Blue `#00356B` · Yale Gold `#C0973B` · Sky Blue `#286DC0`
- **Fonts**: Cormorant Garamond (headings) · DM Sans (body) · DM Mono (labels/tags)
- **Responsive**: mobile, tablet, desktop — hamburger menu on small screens
- **Animations**: scroll-triggered fade-in, hover lift effects, sticky frosted-glass nav
- **Gallery**: click any photo to open full-screen lightbox (press Escape to close)

© 2026 Rodríguez Martínez Lab · Yale University
