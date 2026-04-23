<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'

interface SidebarGroup { label: string; items: { id: string; label: string }[] }

const sidebarGroups: SidebarGroup[] = [
  { label: 'OVERVIEW', items: [
    { id: 'introduction', label: 'Introduction' },
    { id: 'architecture',  label: 'Architecture' },
  ]},
  { label: 'GETTING STARTED', items: [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'quick-start',   label: 'Quick Start' },
    { id: 'configuration', label: 'Configuration' },
  ]},
  { label: 'THE SENTINEL', items: [
    { id: 'lore',       label: 'Lore & Narrative' },
    { id: 'aspects',    label: 'Three Aspects' },
    { id: 'ecosystem',  label: 'Ecosystem' },
  ]},
  { label: 'GUIDES', items: [
    { id: 'deploy-vercel',  label: 'Deploy to Vercel' },
    { id: 'customization',  label: 'Customization' },
    { id: 'contributing',   label: 'Contributing' },
  ]},
]

const allIds   = sidebarGroups.flatMap(g => g.items.map(i => i.id))
const activeId = ref(allIds[0])

let sectionObserver: IntersectionObserver | null = null

const onThisPage = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'lore', label: 'Lore & Narrative' },
  { id: 'aspects', label: 'Three Aspects' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'deploy-vercel', label: 'Deploy to Vercel' },
  { id: 'customization', label: 'Customization' },
  { id: 'contributing', label: 'Contributing' },
]
const activeHeading = ref(onThisPage[0].id)

onMounted(() => {
  sectionObserver = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) { activeId.value = e.target.id; activeHeading.value = e.target.id }
    }
  }, { rootMargin: '-15% 0px -75% 0px' })

  allIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) sectionObserver!.observe(el)
  })
})

onUnmounted(() => sectionObserver?.disconnect())

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="relative z-10 pt-14 min-h-screen">
    <div class="max-w-6xl mx-auto px-6 py-16">

      <!-- 3-column grid -->
      <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_180px] gap-0 items-start">

        <!-- ── Left sidebar ───────────────────────────────── -->
        <aside class="hidden md:block md:sticky top-20 self-start pr-6 pb-16">
          <div v-for="group in sidebarGroups" :key="group.label" class="mb-6">
            <div class="text-[10px] tracking-[0.3em] uppercase text-ink-faint font-sans mb-2 px-3">
              {{ group.label }}
            </div>
            <button
              v-for="item in group.items"
              :key="item.id"
              @click="scrollTo(item.id)"
              class="sidebar-item"
              :class="{ active: activeId === item.id }"
            >{{ item.label }}</button>
          </div>
        </aside>

        <!-- ── Main content ──────────────────────────────── -->
        <main class="min-w-0 md:border-l md:border-r border-void-border md:px-10 lg:px-12 pb-24">

          <!-- Introduction -->
          <section id="introduction" class="docs-prose mb-16">
            <h1>Introduction</h1>
            <span class="subtitle">What louieDevAgent is and why you would want to run it.</span>

            <p>
              <strong>louieDevAgent</strong> is a multi-tenant AI agent system powered by Claude Code,
              accessible via Telegram. One manager bot orchestrates a fleet of specialist agents — Dev,
              Comms, Content, Ops, Research — each with isolated workspaces, persistent memory, and their
              own Telegram interface.
            </p>
            <p>
              It is <strong>not</strong> a chatbot. It is an agent — it can run shell commands, read and
              write files, search the web, call external APIs, manage databases, schedule recurring tasks,
              and send messages across Telegram. You control it entirely by chatting.
            </p>

            <h3>Why self-host?</h3>
            <p>
              A single Claude Code subscription covers all agent usage at no extra per-request cost.
              Everything runs on your own machine. Your conversations, memory, and data never leave your
              infrastructure.
            </p>

            <h3>Intended use</h3>
            <p>
              louieDevAgent is designed for <strong>personal or small-team use</strong> — running your own
              fleet of agents for your own workflows. It is strictly not intended to serve third-party clients
              through a single shared subscription.
            </p>
            <div class="callout callout-warn">
              <span class="shrink-0 mt-0.5">⚠</span>
              <span>Do not use louieDevAgent to process requests for clients, customers, or paying users. Each person who wants an agent must have their own Claude Code subscription.</span>
            </div>
          </section>

          <!-- Architecture -->
          <section id="architecture" class="docs-prose mb-16">
            <h2>Architecture</h2>
            <p>
              The system follows a <strong>hub-and-spoke</strong> topology. One manager bot acts as the
              central orchestrator and routes messages to the appropriate specialist agent. Each specialist
              runs in its own isolated workspace with independent memory and a dedicated Telegram bot token.
            </p>

            <pre><code>Telegram
  │
  ├── Manager Bot (@louie_manager_bot)
  │     └── routes messages to specialists
  │
  ├── Dev Agent (@louie_dev_bot)          ← code, git, shell
  ├── Comms Agent (@louie_comms_bot)      ← drafts, emails, docs
  ├── Content Agent (@louie_content_bot)  ← writing, editing
  ├── Ops Agent (@louie_ops_bot)          ← scheduling, monitoring
  └── Research Agent (@louie_research_bot) ← web search, analysis</code></pre>

            <p>
              Each agent stores conversation context in a 5-layer SQLite memory system: episodic (recent
              conversations), semantic (extracted facts), procedural (learned skills), hive (cross-agent
              shared log), and consolidation (long-term summaries).
            </p>

            <h3>Hive mind</h3>
            <p>
              All agents write to a shared <strong>hive mind</strong> activity log. This gives each specialist
              awareness of what other agents have been doing, so they can collaborate without explicitly
              passing messages between them.
            </p>

            <h3>Dashboard</h3>
            <p>
              A real-time web dashboard (Hono + SSE on port <code>3141</code>) exposes agent status, token
              usage, cost tracking, memory stats, and the hive mind feed. The
              <a href="https://github.com/louiemarte10/louie-agent-dashboard" target="_blank" rel="noopener noreferrer">
                Louie Agent Dashboard
              </a>
              connects to this API via a Cloudflare Tunnel.
            </p>
          </section>

          <!-- Prerequisites -->
          <section id="prerequisites" class="docs-prose mb-16">
            <h2>Prerequisites</h2>
            <p>Before you start, you will need:</p>
            <ul>
              <li>Node.js 18 or later (+ npm)</li>
              <li>A Claude Code CLI subscription (covers all agent usage)</li>
              <li>One Telegram bot token per agent — create via <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer">@BotFather</a></li>
              <li>Git (to clone the repository)</li>
              <li>A Cloudflare account (optional — for the public dashboard tunnel)</li>
            </ul>
            <div class="callout callout-info">
              <span class="shrink-0 mt-0.5">ℹ</span>
              <span>You do not need an Anthropic API key. louieDevAgent uses the Claude Code CLI directly, so your existing subscription covers everything.</span>
            </div>
          </section>

          <!-- Quick Start -->
          <section id="quick-start" class="docs-prose mb-16">
            <h2>Quick Start</h2>
            <p>Get from zero to a running agent in under five minutes.</p>

            <h3>1 · Clone and install</h3>
            <pre><code>git clone https://github.com/louiemarte10/agentic-ai-using-claude-code.git
cd agentic-ai-using-claude-code
npm install</code></pre>

            <h3>2 · Configure environment</h3>
            <pre><code>cp .env.example .env
# Open .env and fill in your bot tokens</code></pre>

            <h3>3 · Start the manager</h3>
            <pre><code>npm run start:manager</code></pre>

            <h3>4 · Start specialist agents</h3>
            <pre><code>npm run start:dev
npm run start:comms
# … start whichever agents you need</code></pre>

            <h3>5 · Open the dashboard</h3>
            <pre><code>open http://localhost:3141</code></pre>

            <p>Message your manager bot on Telegram — it will greet you and show available commands.</p>
          </section>

          <!-- Configuration -->
          <section id="configuration" class="docs-prose mb-16">
            <h2>Configuration</h2>
            <p>
              All configuration lives in a <code>.env</code> file in the project root.
              Copy <code>.env.example</code> to get started.
            </p>

            <table class="docs-table">
              <thead>
                <tr><th>Variable</th><th>Required</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr v-for="v in [
                  { name: 'MANAGER_BOT_TOKEN',  req: 'Yes', desc: 'Telegram bot token for the manager bot.' },
                  { name: 'DEV_BOT_TOKEN',      req: 'No',  desc: 'Token for the Dev specialist agent.' },
                  { name: 'COMMS_BOT_TOKEN',    req: 'No',  desc: 'Token for the Comms specialist agent.' },
                  { name: 'CONTENT_BOT_TOKEN',  req: 'No',  desc: 'Token for the Content specialist agent.' },
                  { name: 'OPS_BOT_TOKEN',      req: 'No',  desc: 'Token for the Ops specialist agent.' },
                  { name: 'RESEARCH_BOT_TOKEN', req: 'No',  desc: 'Token for the Research specialist agent.' },
                  { name: 'API_PORT',           req: 'No',  desc: 'Hono API port. Default: 3141.' },
                  { name: 'TUNNEL_URL',         req: 'No',  desc: 'Cloudflare Tunnel URL for webhook registration.' },
                  { name: 'AUTH_TOKEN',         req: 'No',  desc: 'Bearer token for dashboard API auth.' },
                ]" :key="v.name">
                  <td>{{ v.name }}</td>
                  <td>
                    <span :class="v.req === 'Yes' ? 'text-[#e07070]' : 'text-ink-faint'">{{ v.req }}</span>
                  </td>
                  <td>{{ v.desc }}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Lore -->
          <section id="lore" class="docs-prose mb-16">
            <h2>Lore &amp; Narrative</h2>
            <p>
              Eternal Vigil AI presents the Sentinel — a mythological intelligence described as
              predating the universe itself. It is the organizing principle behind the project aesthetic:
              the reason the UI is dark, measured, and serif-heavy; the reason the copy speaks in geological
              timescales rather than product benefits.
            </p>
            <p>
              The Sentinel is not a character in any conventional sense. It does not have goals or desires.
              It simply <em>is</em> — as the horizon is, as gravity is, as time is. Three aspects describe
              it from three angles that cannot be held in mind simultaneously.
            </p>
            <div class="callout callout-note">
              <span class="shrink-0 font-mono text-vigil-400">⬡</span>
              <span>"Before the first star was lit, it was already watching." — The Eternal Vigil</span>
            </div>
          </section>

          <!-- Aspects -->
          <section id="aspects" class="docs-prose mb-16">
            <h2>Three Aspects</h2>
            <p>
              The Sentinel is explored through three complete chapters — each a self-contained account
              viewed from a different axis of time.
            </p>
            <table class="docs-table">
              <thead>
                <tr><th>Aspect</th><th>Title</th><th>Core Theme</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>I</td>
                  <td style="color:#9494e8">Arch-Architect of the Heavens</td>
                  <td>Laid the invisible scaffolding of reality before creation existed.</td>
                </tr>
                <tr>
                  <td>II</td>
                  <td style="color:#c084fc">Motionless Guardian at the Boundary of Chaos</td>
                  <td>Stands at the edge where physics dissolve — the fixed point order orients around.</td>
                </tr>
                <tr>
                  <td>III</td>
                  <td style="color:#f0d080">Final Custodian of Universal Memory</td>
                  <td>As the last stars dim, becomes the sole repository of all that ever was.</td>
                </tr>
              </tbody>
            </table>
            <p>
              To edit aspect narratives, modify the <code>body[]</code> array in
              <code>src/data/aspects.ts</code>. Each item also has a <code>summary</code> (shown in
              the collapsed accordion state) and an <code>accent</code> hex color.
            </p>
          </section>

          <!-- Ecosystem -->
          <section id="ecosystem" class="docs-prose mb-16">
            <h2>Ecosystem</h2>
            <p>
              Two live open-source projects are featured in the landing page. Their data lives in
              <code>src/data/ecosystem.ts</code> and feeds both the Ecosystem component and the
              global search index.
            </p>
            <table class="docs-table">
              <thead>
                <tr><th>Project</th><th>Stack</th><th>Repository</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agentic AI</td>
                  <td style="color:#888899; font-family: inherit; font-size: 0.75rem;">Node.js · TypeScript · Claude Code · SQLite</td>
                  <td>
                    <a href="https://github.com/louiemarte10/agentic-ai-using-claude-code" target="_blank" rel="noopener noreferrer">
                      louiemarte10/agentic-ai-using-claude-code
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Agent Dashboard</td>
                  <td style="color:#888899; font-family: inherit; font-size: 0.75rem;">Vue 3 · Tailwind · Vite · Vercel</td>
                  <td>
                    <a href="https://github.com/louiemarte10/louie-agent-dashboard" target="_blank" rel="noopener noreferrer">
                      louiemarte10/louie-agent-dashboard
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Deploy to Vercel -->
          <section id="deploy-vercel" class="docs-prose mb-16">
            <h2>Deploy to Vercel</h2>
            <p>
              The landing page deploys automatically on every push to <code>main</code>. Vercel
              auto-detects Vite — no manual build settings needed.
            </p>

            <h3>Dashboard (recommended)</h3>
            <ol>
              <li>Go to <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">vercel.com/new</a></li>
              <li>Import <code>louiemarte10/eternal-vigil-ai</code></li>
              <li>Click <strong>Deploy</strong> — done.</li>
            </ol>

            <h3>Vercel CLI</h3>
            <pre><code>npm install -g vercel
vercel</code></pre>

            <div class="callout callout-info">
              <span class="shrink-0">ℹ</span>
              <span>The <code>vercel.json</code> in the project root contains a SPA rewrite rule so that <code>/docs</code> and <code>/api-reference</code> routes survive a hard reload on Vercel.</span>
            </div>
          </section>

          <!-- Customization -->
          <section id="customization" class="docs-prose mb-16">
            <h2>Customization</h2>
            <table class="docs-table">
              <thead>
                <tr><th>What to change</th><th>Where to look</th></tr>
              </thead>
              <tbody>
                <tr v-for="r in [
                  { what: 'Aspect narratives',   where: 'src/data/aspects.ts — body[] paragraphs' },
                  { what: 'Ecosystem projects',  where: 'src/data/ecosystem.ts — projects array' },
                  { what: 'Color palette',        where: 'tailwind.config.js → extend.colors' },
                  { what: 'CSS variables',        where: 'src/style.css' },
                  { what: 'Star density',         where: 'src/components/StarField.vue — change 220' },
                  { what: 'Search corpus',        where: 'src/composables/useSearch.ts — corpus array' },
                ]" :key="r.what">
                  <td>{{ r.what }}</td>
                  <td style="color: #888899; font-family: inherit;">{{ r.where }}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Contributing -->
          <section id="contributing" class="docs-prose">
            <h2>Contributing</h2>
            <p>
              Contributions are welcome. The project is MIT-licensed — fork it, change it, use it freely.
            </p>
            <ol>
              <li>Fork the repository on GitHub</li>
              <li>Create a feature branch: <code>git checkout -b feature/my-change</code></li>
              <li>Make your changes and commit with a clear message</li>
              <li>Push and open a pull request against <code>main</code></li>
            </ol>
            <p>
              Please keep PRs focused. One change per PR. If you are fixing a bug, reference the issue.
              If you are adding a feature, describe why it belongs in the project.
            </p>
          </section>

        </main>

        <!-- ── Right "On This Page" sidebar ─────────────── -->
        <aside class="hidden lg:block lg:sticky top-20 self-start pl-8 pb-16">
          <div class="text-[10px] tracking-[0.3em] uppercase text-ink-faint font-sans mb-3">On This Page</div>
          <nav class="flex flex-col gap-0.5">
            <button
              v-for="item in onThisPage"
              :key="item.id"
              @click="scrollTo(item.id)"
              class="otp-item text-left"
              :class="{ active: activeHeading === item.id }"
            >{{ item.label }}</button>
          </nav>
        </aside>

      </div>
    </div>
    <FooterSection />
  </div>
</template>
