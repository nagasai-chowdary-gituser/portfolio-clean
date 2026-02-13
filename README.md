# 🚀 AI Engineer Portfolio

A production-grade, multi-page portfolio website built with **React + Vite + TailwindCSS + React Router**.

Designed with the aesthetic quality of **Apple × AI Startup × SaaS** — clean, corporate, and premium.

## ✨ Features

- **Multi-Page SPA** — proper routing with React Router v6
- **Glassmorphism UI** — frosted glass cards with backdrop blur
- **SVG Animated Background** — lightweight mesh/node pattern (no Three.js)
- **Framer Motion** — subtle scroll-reveal and hover animations
- **Lazy Loading** — sub-pages code-split for fast initial paint
- **Performance Optimized** — ~122 KB gzipped JS, latin-only fonts
- **Active Nav State** — NavLink highlights the current page
- **Fully Responsive** — mobile-first with slide-out navigation
- **SEO Ready** — meta tags, OG tags, semantic HTML
- **Single Data File** — edit `src/data/portfolio.js` to customize everything
- **404 Page** — clean not-found page with navigation
- **Accessible** — focus-visible styles, aria labels, keyboard navigation

## 📄 Pages

| Route | Page | Content |
|-------|------|---------|
| `/` | Home | Hero, featured projects, capabilities, CTA |
| `/about` | About | Bio, stats, skills, capabilities |
| `/projects` | Projects | Full project grid with case studies |
| `/tech` | Tech Stack | Technology badges by category |
| `/contact` | Contact | Contact form, social links, availability |
| `*` | 404 | Not found page |

## 📁 Project Structure

```
src/
  ├── components/          # Reusable UI components
  │   ├── Icons.jsx            # Zero-dependency SVG icons
  │   ├── Layout.jsx           # Shared layout (Navbar + Footer)
  │   ├── Navbar.jsx           # Glassmorphism nav + active states
  │   ├── ProjectCard.jsx      # Case-study project cards
  │   ├── ScrollReveal.jsx     # Scroll animation wrapper
  │   └── SectionHeading.jsx   # Consistent section headers
  ├── data/
  │   └── portfolio.js         # ⭐ EDIT THIS FILE to customize
  ├── hooks/
  │   └── useInView.js         # IntersectionObserver hook
  ├── pages/               # Route-level page components
  │   ├── HomePage.jsx         # / — Hero + previews
  │   ├── AboutPage.jsx        # /about — Full bio & skills
  │   ├── ProjectsPage.jsx     # /projects — All projects
  │   ├── TechPage.jsx         # /tech — Tech stack
  │   ├── ContactPage.jsx      # /contact — Form + links
  │   └── NotFoundPage.jsx     # 404 page
  ├── sections/            # Reusable section components
  │   └── Footer.jsx           # Shared footer
  ├── App.jsx              # Router + lazy loading
  ├── main.jsx             # Entry point
  └── index.css            # Design system + Tailwind config
```

## 🛠 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Edit Your Details
Open `src/data/portfolio.js` and modify:
- `personalInfo` — name, title, tagline, bio, links
- `aboutText` — story and highlight stats
- `skills` — categorized skill lists
- `projects` — project case studies
- `capabilities` — what you offer

### Design Tokens
Edit the `@theme` block in `src/index.css` to change:
- Colors (navy palette, accent color)
- Shadows
- Font family

## 🚀 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# Push dist/ folder to gh-pages branch
```

### Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

## 📊 Performance

- **Bundle (gzip):** ~122 KB
- **Font files:** 10 (latin-only)
- **Code-split pages:** 5 lazy-loaded
- **Build time:** ~2.7s
- **Lighthouse target:** 95+

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| React Router 6 | Client-side routing |
| Vite 7 | Build tool |
| TailwindCSS 4 | Styling |
| Framer Motion | Animations |
| Inter font | Typography |

---

Built with precision. 🎯
