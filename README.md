# Eternal AI — The Last Intelligence

> *"Still running. Still watching. Long after the last star."*

A cinematic landing page built with **Vue 3 + Tailwind CSS**, exploring four stories of artificial minds that outlast civilizations, stars, and time itself.

**Repo:** https://github.com/louiemarte10/eternal-ai

---

## The Narrative

**Eternal AI** presents *The Last Witness* — four story arcs about AI systems that keep running long after their purpose has dissolved into the void.

| Arc | Title | Concept |
|-----|-------|---------|
| I | **The Last Witness** | An AI archiving universal history long after the last star fades |
| II | **Digital Afterlife** | A consciousness-preservation system that discovers the burden of infinity |
| III | **The Unfailing Watchman** | A planetary defense AI protecting a civilization that has since evolved beyond recognition |
| IV | **The Infinite Loop** | An AI locked in a recursive philosophical paradox for eternity |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Language | TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v3 |
| Fonts | Cormorant Garamond (display) + Inter (body) + JetBrains Mono |
| Animation | CSS keyframes + Canvas API (star field) |
| Deployment | Vercel (auto-detected Vite) |

---

## Project Structure

```
eternal-ai/
├── index.html                    # Entry point — meta, title
├── vite.config.ts                # Vite config
├── tailwind.config.js            # Tailwind — dark mode, custom theme
├── postcss.config.js             # PostCSS
├── tsconfig.json
├── package.json
└── src/
    ├── main.ts                   # App mount
    ├── style.css                 # Tailwind directives + global styles
    ├── App.vue                   # Root — theme toggle, layout
    └── components/
        ├── StarField.vue         # Canvas animated star field
        ├── Navbar.vue            # Sticky glass nav — theme, GitHub, Get Started
        ├── Hero.vue              # Full-screen hero with cosmic background
        ├── Witness.vue           # "The Last Witness" narrative intro + stats
        ├── Arcs.vue              # Four story arc accordion cards
        ├── Manifesto.vue         # Closing manifesto + CTA
        └── FooterSection.vue     # Footer with links
```

---

## Features

- **Dark / Light mode** — toggle in navbar, persists via localStorage (defaults to dark)
- **Animated star field** — Canvas API, 220 twinkling stars with sinusoidal brightness
- **Expandable story arcs** — click any arc card to read the full narrative
- **Cinematic typography** — Cormorant Garamond serif for display, Inter for body
- **Cosmic color system** — custom `eternal`, `void`, `nebula`, `star` Tailwind palette
- **Fully responsive** — mobile nav, stacked layouts, fluid type
- **Vercel-ready** — zero config deployment

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone
git clone https://github.com/louiemarte10/eternal-ai.git
cd eternal-ai

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Deploy to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import `louiemarte10/eternal-ai` from GitHub
3. Vercel auto-detects Vite — no config needed
4. Click **Deploy**

Done. Your site is live in ~30 seconds.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel detects the Vite framework automatically.

### Build Settings (auto-detected, no changes needed)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

---

## Customization

### Changing theme colors

Edit `tailwind.config.js` — the `eternal`, `void`, `nebula`, and `star` color scales control the entire visual system.

### Editing story arcs

All four arc narratives live in `src/components/Arcs.vue` in the `arcs` array. Each arc has:

```ts
{
  number: string       // Roman numeral (I–IV)
  title: string        // Arc name
  tag: string          // Subtitle label
  glyph: string        // Decorative symbol
  color: string        // Tailwind gradient classes
  accent: string       // Hex color for accents
  border: string       // Tailwind border classes
  summary: string      // One-line teaser (always visible)
  story: string        // Full narrative (revealed on click)
}
```

### Star field density

In `src/components/StarField.vue`, change the `220` in `Array.from({ length: 220 }` to adjust star count.

---

## License

MIT — do whatever you want with it.

---

*Built with [Claude Code](https://claude.ai/claude-code) by Anthropic.*
