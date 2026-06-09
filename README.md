# CrackTheCampus — Frontend Assessment

> A premium campus placement preparation landing page built with React 18, Tailwind CSS v3, and Framer Motion.

🔗 **Live Demo:** [Deploy link here]  
📦 **Repository:** [GitHub link here]

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Tailwind CSS v3 — `darkMode: 'class'` |
| Animations | Framer Motion |
| Icons | Lucide React |
| Count-up | react-countup + react-intersection-observer |
| Fonts | Inter (Google Fonts) |

---

## Folder Structure

```
frontend/
├── public/
│   └── logos/               # Real company SVG logos (served as static assets)
│       ├── google.svg
│       ├── microsoft.svg
│       ├── amazon.svg
│       ├── infosys.svg
│       ├── tcs.svg
│       ├── wipro.svg
│       ├── accenture.svg
│       └── flipkart.svg
│
└── src/
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav, backdrop-blur, dark toggle, mobile drawer
    │   ├── Hero.jsx            # Headline, CTAs, floating cards, progress bars, social proof
    │   ├── Companies.jsx       # Orbit animation + marquee strip of hiring companies
    │   ├── Features.jsx        # 8-card feature grid using FeatureCard
    │   ├── FeatureCard.jsx     # Reusable card with number accent + hover effects
    │   ├── Stats.jsx           # Count-up statistics triggered on scroll
    │   ├── Courses.jsx         # 4 course cards with skeleton loading + MCQ quiz trigger
    │   ├── QuizModal.jsx       # 5-question MCQ modal with score + answer review
    │   ├── Testimonials.jsx    # 3 testimonial cards with skeleton loading
    │   ├── CTA.jsx             # Full-width gradient conversion banner
    │   ├── Footer.jsx          # 4-column footer with newsletter + social links
    │   ├── Skeleton.jsx        # Reusable skeleton loaders (Course, Feature, Testimonial)
    │   └── ScrollProgress.jsx  # Fixed gradient scroll depth indicator
    │
    ├── data/
    │   ├── courses.js          # Course content with topics, companies, enroll count
    │   ├── features.js         # 8 platform features with Lucide icons
    │   ├── stats.js            # 4 placement statistics
    │   ├── testimonials.js     # 3 student success stories
    │   └── quizData.js         # 5 MCQ questions per course (hardcoded)
    │
    ├── layouts/
    │   └── MainLayout.jsx      # Wraps <main id="main-content"> for accessibility
    │
    ├── pages/
    │   └── Home.jsx            # Assembles all sections + skip-to-content link
    │
    ├── App.js                  # Dark mode state + OS preference detection
    └── index.css               # Tailwind directives, focus-visible ring, smooth scroll
```

---

## Getting Started

```bash
npm install
npm start       # http://localhost:3000
npm run build   # Production build
```

---

## Technical Approach

### Component Strategy
Every UI element is isolated into a single-responsibility component. Data is fully decoupled into `/data/` files — components only handle rendering logic.

### Styling Architecture
Pure Tailwind CSS utility classes throughout. No custom CSS except:
- `@layer base` for smooth scroll and `focus-visible` ring
- `@keyframes marquee` for infinite logo scroll (defined in `tailwind.config.js`)

### Dark Mode
Implemented via Tailwind's `class` strategy. `App.js` reads `localStorage` first, then falls back to `window.matchMedia('prefers-color-scheme: dark')`. Toggled via Navbar button and persisted to `localStorage`.

### Performance
- Company logos served from `public/logos/` as static assets — zero webpack transform overhead
- `loading="lazy"` on all `<img>` tags
- `react-intersection-observer` for scroll-triggered animations and count-up
- Skeleton loaders simulate API latency (1.2s courses, 1.5s testimonials)

### SEO
- `<title>`, `<meta description>`, Open Graph, Twitter Card in `public/index.html`
- Semantic HTML5 throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## Assumptions

| Assumption | Reason |
|---|---|
| Static data only — no backend API | Assessment scope; all content in `/data/` |
| Skeleton loading delays are simulated | Demonstrates real API latency handling pattern |
| Dark mode defaults to OS preference | Best UX practice — respects user system settings |
| Company logos from Wikimedia/worldvectorlogo | Official brand SVGs, served locally for reliability |
| Quiz questions are hardcoded | Assessment scope; 5 MCQs per course in `quizData.js` |
| Social links use real CrackTheCampus profiles | LinkedIn, Instagram, Facebook URLs provided by client |

---

## Extra Features (Beyond Requirements)

| Feature | Implementation |
|---|---|
| **Scroll progress bar** | Fixed gradient bar tracking scroll depth via `ScrollProgress.jsx` |
| **Skeleton loaders** | Pulse skeletons for Courses and Testimonials before data loads |
| **Framer Motion animations** | Entry animations on every section, floating hero cards |
| **Count-up on scroll** | Stats animate from 0 when scrolled into view |
| **Mobile drawer nav** | Animated slide-in drawer with smooth max-height transition |
| **Orbit animation** | Company logos orbit in two counter-rotating rings |
| **Dark mode toggle** | Persisted via localStorage, synced to `<html class="dark">` |
| **MCQ Quiz modal** | 5 questions per course, shows answer feedback + score review |
| **Skip to content** | `sr-only` keyboard-accessible link for screen readers |
| **SEO meta tags** | `<title>`, description, Open Graph, Twitter Card |
| **Inter font** | Google Fonts Inter loaded via `<link>` in `index.html` |
| **Focus-visible ring** | Global `focus:ring-2` on all interactive elements |

---

## Data Sources

| Data | Source |
|---|---|
| IT sector size (54 lakh employees) | Wikipedia — "Information technology in India" (FY2023) |
| Campus hiring companies | GeeksForGeeks Company-Wise Prep, Mettl Campus Hiring clients |
| Salary ranges (₹3.5–26 LPA) | Scaler Academy public placement reports |
| Exam patterns (TCS NQT, InfyTQ) | Official company career pages |
| Platform stats (900+ companies, 50K+ students) | NASSCOM 2024 fresher hiring outlook |
| Course topics | IBM SkillsBuild, Analytics Vidhya, GFG trending 2024 |
