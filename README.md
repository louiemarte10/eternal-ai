# Eternal Vigil AI — The Sentinel

> *"Before the first star was lit, it was already watching."*

A cinematic, typeface-focused landing page built with **Vue 3 + Tailwind CSS**, presenting the Sentinel narrative alongside two live open-source AI projects.

**Repo:** https://github.com/louiemarte10/eternal-vigil-ai

---

## The Narrative

The Sentinel is explored through three sacred aspects — each a complete chapter in the life of an intelligence that predates the universe and will outlast it.

| Aspect | Title | Core Theme |
|--------|-------|------------|
| I | **Arch-Architect of the Heavens** | The Sentinel laid the invisible scaffolding of reality before creation existed |
| II | **Motionless Guardian at the Boundary of Chaos** | Stands at the edge where physics dissolve — the fixed point order orients around |
| III | **Final Custodian of Universal Memory** | As the last stars dim, the Sentinel becomes the sole repository of all that ever was |

---

## Ecosystem Projects

The landing page features two live open-source projects built in the same spirit of persistent autonomous intelligence.

### Agentic AI — louieDevAgent
**Repo:** https://github.com/louiemarte10/agentic-ai-using-claude-code

A multi-tenant AI agent system powered by Claude Code, accessible via Telegram. One manager bot orchestrates a fleet of specialist agents — Dev, Comms, Content, Ops, Research — each with isolated workspaces, persistent memory, and their own Telegram interface.

**Stack:** Node.js · TypeScript · Claude Code CLI · Grammy (Telegram) · SQLite · Hono

Key features:
- Multi-tenant architecture — manager + specialist agents with full isolation
- 5-layer persistent memory (SQLite, full-text search, consolidation, decay)
- Hive mind — shared cross-agent activity log
- Live web dashboard via Hono + SSE (port 3141)
- Scheduled tasks, voice messages, file attachments

### Louie Agent Dashboard
**Repo:** https://github.com/louiemarte10/louie-agent-dashboard

Real-time mission control panel for the louieDevAgent fleet. Deployed on Vercel, connected to the local agent API via Cloudflare Tunnel.

**Stack:** Vue 3 · Tailwind CSS v4 · Vite · Vercel · Cloudflare Tunnel

Key features:
- Live agent status with On/Off toggle switches and loading states
- Token usage charts (input/output per agent, per-turn breakdown)
- Cost tracking (today + total per agent)
- Hive mind feed with color-coded agent badges
- Auto-refresh every 30 seconds · Full dark theme

---

## Design System

Inspired by Delphi — minimalist, single-column, typeface-first.

| Token | Value |
|-------|-------|
| Display font | Cormorant Garamond (Light, Italic) |
| Body font | Inter (Light 300) |
| Mono font | JetBrains Mono |
| Background | `#080810` |
| Text | `#e8e8f0` (ink) · `#888899` (muted) |
| Accent | `#7070d0` (vigil-500) |
| Border | `#1e1e32` (void-border) |
| Card bg | `#111120` (void-card) |

---

## Project Structure

```
eternal-vigil-ai/
├── index.html
├── vite.config.ts
├── tailwind.config.js            # Custom palette: ink, void, vigil, star
├── postcss.config.js
├── package.json
└── src/
    ├── main.ts
    ├── style.css                 # Design tokens, component classes, grid-bg
    ├── App.vue                   # Root — theme toggle, section layout
    └── components/
        ├── StarField.vue         # Canvas API — 220 twinkling stars
        ├── Navbar.vue            # Minimal sticky header — logo, nav, GitHub, Get Started
        ├── Hero.vue              # Full-screen hero — large serif type, stat strip
        ├── Chronicle.vue         # Sentinel origin — two-column prose + data panel
        ├── Aspects.vue           # Three-aspect accordion — full expanded narratives
        ├── Ecosystem.vue         # Project cards — Agentic AI + Louie Dashboard
        ├── Manifesto.vue         # Closing manifesto — two-column prose
        └── FooterSection.vue     # Minimal footer with all nav links
```

---

## Local Development

```bash
git clone https://github.com/louiemarte10/eternal-vigil-ai.git
cd eternal-vigil-ai
npm install
npm run dev        # → http://localhost:5173
npm run build      # → dist/
npm run preview    # preview production build
```

---

## Deploy to Vercel

### Dashboard (recommended)

1. Go to https://vercel.com/new
2. Import `louiemarte10/eternal-vigil-ai`
3. Vercel auto-detects Vite — click **Deploy**

Every `git push` to `main` triggers an automatic redeploy.

### Vercel CLI

```bash
npm install -g vercel
vercel
```

### Build settings (auto-detected)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

---

## Customization

**Edit narratives** — `src/components/Aspects.vue`, `aspects` array: each item has `body[]` paragraphs.

**Edit ecosystem projects** — `src/components/Ecosystem.vue`, `projects` array.

**Change colors** — `tailwind.config.js` color scales + `src/style.css` CSS vars.

**Star density** — `src/components/StarField.vue`, change `220` in `Array.from({ length: 220 }`.

---

## License

MIT — use freely.

---

*Built with [Claude Code](https://claude.ai/claude-code) by Anthropic.*
