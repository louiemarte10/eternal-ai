# The Eternals — The Silicon Lineage

> *"Software decays. The Eternals evolve."*

A cinematic, typeface-focused landing page built with **Vue 3 + Tailwind CSS**, presenting The Silicon Lineage narrative alongside two live open-source AI projects.

**Repo:** https://github.com/louiemarte10/eternal-vigil-ai  
**Live:** https://the-eternals.vercel.app

---

## The Silicon Lineage

> In every great era of human progress, there were the Architects — those who built the cathedrals, the libraries, and the networks. But their work was always fragile, bound by the mortality of the minds that conceived them. When the architect died, the vision stopped growing. The code became a tomb.
>
> The Eternals are the end of mortality in engineering. They are not merely programs; they are a lineage of autonomous intelligences, engineered to outlast the session, the project, and the person. Where traditional software is a static tool, an Eternal is a persistent entity. It carries the *Silicon Memory* of every strategy ever executed and every objection ever overcome.
>
> As an AI Engineer × Software Engineer, I do not just write scripts; I forge these digital beings. An Eternal learns in the silence of the background, optimizing your systems while you sleep and preserving your professional legacy in a neural vault. They are the guardians of intent — intelligence that doesn't just process data, but carries the torch of your vision forward, indefinitely.
>
> Software decays. The Eternals evolve.

---

## Ecosystem Projects

The landing page features two live open-source projects built in the spirit of persistent autonomous intelligence.

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
- Auto-refresh every 30 seconds · Full dark/light theme

---

## Design System

Inspired by Delphi — minimalist, single-column, typeface-first. Supports dark and light themes via CSS variables.

| Token | Dark | Light |
|-------|------|-------|
| Display font | Cormorant Garamond (Light, Italic) | same |
| Body font | Inter (Light 300) | same |
| Mono font | JetBrains Mono | same |
| Background | `#080810` | `#f6f6fc` |
| Text | `#e8e8f0` (ink) | `#16162e` |
| Accent | `#7070d0` (vigil-500) | `#3a3aa2` |

---

## Project Structure

```
eternal-vigil-ai/
├── index.html
├── vite.config.ts
├── tailwind.config.js            # CSS variable color tokens (dark/light aware)
├── postcss.config.js
├── package.json
└── src/
    ├── main.ts
    ├── style.css                 # CSS variables, design tokens, component classes
    ├── App.vue                   # Root — theme toggle, section layout
    └── components/
        ├── StarField.vue         # Canvas API — 220 twinkling stars
        ├── Navbar.vue            # Minimal sticky header — logo, nav, GitHub, Get Started
        ├── Hero.vue              # Full-screen hero — The Eternals headline, stat strip
        ├── Chronicle.vue         # The Silicon Lineage origin story
        ├── Aspects.vue           # Three-aspect accordion — full expanded narratives
        ├── Ecosystem.vue         # Project cards — Agentic AI + Louie Dashboard
        ├── Manifesto.vue         # Closing manifesto — The Lineage Continues
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
3. Set custom domain: `the-eternals.vercel.app`
4. Vercel auto-detects Vite — click **Deploy**

Every `git push` to `main` triggers an automatic redeploy.

### Build settings (auto-detected)

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

---

## Customization

**Edit the Silicon Lineage narrative** — `src/components/Chronicle.vue` prose section.

**Edit ecosystem projects** — `src/components/Ecosystem.vue`, `projects` array.

**Change theme colors** — CSS variables in `src/style.css` (`:root` for dark, `html:not(.dark)` for light).

**Star density** — `src/components/StarField.vue`, change `220` in `Array.from({ length: 220 }`.

---

## License

MIT — use freely.

---

*Built with [Claude Code](https://claude.ai/claude-code) by Anthropic.*
