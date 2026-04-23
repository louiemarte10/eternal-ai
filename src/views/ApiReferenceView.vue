<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FooterSection from '../components/FooterSection.vue'

interface SidebarGroup { label: string; items: { id: string; label: string }[] }

const sidebarGroups: SidebarGroup[] = [
  { label: 'API REFERENCE', items: [
    { id: 'overview', label: 'Overview' },
  ]},
  { label: 'AGENT SYSTEM', items: [
    { id: 'agent-list',   label: 'List Agents' },
    { id: 'agent-detail', label: 'Agent Detail' },
    { id: 'agent-start',  label: 'Start Agent' },
    { id: 'agent-stop',   label: 'Stop Agent' },
  ]},
  { label: 'MEMORY', items: [
    { id: 'memory-stats',  label: 'Memory Stats' },
    { id: 'memory-search', label: 'Memory Search' },
    { id: 'memory-decay',  label: 'Decay Cycle' },
  ]},
  { label: 'DASHBOARD', items: [
    { id: 'token-usage',  label: 'Token Usage' },
    { id: 'cost-tracking', label: 'Cost Tracking' },
    { id: 'hive-feed',    label: 'Hive Mind Feed' },
    { id: 'hive-stream',  label: 'SSE Stream' },
  ]},
  { label: 'TELEGRAM', items: [
    { id: 'webhook-handler', label: 'Webhook Handler' },
    { id: 'webhook-status',  label: 'Status Check' },
  ]},
  { label: 'CONFIGURATION', items: [
    { id: 'env-vars', label: 'Environment Variables' },
  ]},
]

const allIds   = sidebarGroups.flatMap(g => g.items.map(i => i.id))
const activeId = ref(allIds[0])

interface Endpoint {
  method: string
  path: string
  desc: string
  params?: { name: string; type: string; in: string; desc: string }[]
  response: string
}

const endpoints: Record<string, Endpoint> = {
  'agent-list': {
    method: 'GET', path: '/api/agents',
    desc: 'Returns all agents with their current status, uptime, and last activity timestamp.',
    params: [],
    response: `{
  "agents": [
    {
      "id": "dev",
      "name": "Dev Agent",
      "status": "running",
      "uptime": 3600,
      "lastActivity": "2026-04-23T12:00:00Z"
    }
  ]
}`,
  },
  'agent-detail': {
    method: 'GET', path: '/api/agents/:id',
    desc: 'Returns detailed information for a single agent including memory statistics, active tasks, and recent token usage.',
    params: [{ name: 'id', type: 'string', in: 'path', desc: 'Agent identifier (dev, comms, content, ops, research)' }],
    response: `{
  "id": "dev",
  "name": "Dev Agent",
  "status": "running",
  "memory": { "total": 1243, "episodic": 312, "semantic": 820 },
  "tokens": { "input": 48200, "output": 12100 }
}`,
  },
  'agent-start': {
    method: 'POST', path: '/api/agents/:id/start',
    desc: 'Spawns the Claude Code process for a stopped agent in its isolated workspace. Returns immediately; the agent may take a few seconds to become ready.',
    params: [{ name: 'id', type: 'string', in: 'path', desc: 'Agent identifier' }],
    response: `{ "success": true, "agent": { "id": "dev", "status": "running" } }`,
  },
  'agent-stop': {
    method: 'POST', path: '/api/agents/:id/stop',
    desc: 'Gracefully shuts down a running agent. Flushes in-memory state to SQLite before exit.',
    params: [{ name: 'id', type: 'string', in: 'path', desc: 'Agent identifier' }],
    response: `{ "success": true, "agent": { "id": "dev", "status": "stopped" } }`,
  },
  'memory-stats': {
    method: 'GET', path: '/api/memory/:agentId',
    desc: 'Returns memory statistics for an agent: total entry count, per-layer breakdown, and the top 10 most-accessed memories.',
    params: [{ name: 'agentId', type: 'string', in: 'path', desc: 'Agent identifier' }],
    response: `{
  "total": 1243,
  "layers": { "episodic": 312, "semantic": 820, "procedural": 111 },
  "topAccessed": [{ "id": 42, "content": "...", "accessCount": 18 }]
}`,
  },
  'memory-search': {
    method: 'GET', path: '/api/memory/:agentId/search',
    desc: 'Full-text search across all memory layers for an agent. Returns results ranked by relevance score.',
    params: [
      { name: 'agentId', type: 'string', in: 'path', desc: 'Agent identifier' },
      { name: 'q', type: 'string', in: 'query', desc: 'Search query (required)' },
    ],
    response: `{
  "results": [
    { "id": 42, "content": "...", "layer": "semantic", "score": 0.92 }
  ]
}`,
  },
  'memory-decay': {
    method: 'DELETE', path: '/api/memory/:agentId/decay',
    desc: 'Triggers a decay cycle: reduces access scores on stale memories and permanently prunes entries that fall below the minimum threshold.',
    params: [{ name: 'agentId', type: 'string', in: 'path', desc: 'Agent identifier' }],
    response: `{ "pruned": 12, "remaining": 1231 }`,
  },
  'token-usage': {
    method: 'GET', path: '/api/dashboard/tokens',
    desc: 'Returns token usage per agent: cumulative input and output totals plus a per-turn breakdown for charting.',
    params: [],
    response: `{
  "agents": [
    { "id": "dev", "inputTokens": 48200, "outputTokens": 12100, "turns": [...] }
  ]
}`,
  },
  'cost-tracking': {
    method: 'GET', path: '/api/dashboard/costs',
    desc: 'Returns cost breakdown per agent: spend today, total spend since inception, and a cost-per-turn time series.',
    params: [],
    response: `{
  "agents": [
    { "id": "dev", "today": 0.12, "total": 3.84, "series": [...] }
  ]
}`,
  },
  'hive-feed': {
    method: 'GET', path: '/api/hive',
    desc: 'Returns the most recent hive mind activity entries across all agents, newest first.',
    params: [],
    response: `{
  "entries": [
    { "agentId": "dev", "agentName": "Dev Agent", "color": "#9494e8",
      "message": "Completed git commit task", "timestamp": "2026-04-23T12:01:00Z" }
  ]
}`,
  },
  'hive-stream': {
    method: 'GET', path: '/api/hive/stream',
    desc: 'Server-Sent Events stream of live hive mind activity. Connect once and receive events as they happen. The response content type is text/event-stream.',
    params: [],
    response: `event: hive
data: {"agentId":"dev","message":"Starting build task","timestamp":"2026-04-23T12:01:00Z"}

event: hive
data: {"agentId":"comms","message":"Draft email sent","timestamp":"2026-04-23T12:01:05Z"}`,
  },
  'webhook-handler': {
    method: 'POST', path: '/webhook/:agentId',
    desc: 'Receives Telegram Update objects from the Bot API and dispatches them to the specified agent Grammy instance. Register this URL as your bot webhook via the Telegram Bot API.',
    params: [{ name: 'agentId', type: 'string', in: 'path', desc: 'Agent identifier matching the bot token' }],
    response: `{ "ok": true }`,
  },
  'webhook-status': {
    method: 'GET', path: '/api/telegram/status',
    desc: 'Returns webhook registration status for all agents: registered URL, last update ID processed, and pending update count.',
    params: [],
    response: `{
  "agents": [
    { "id": "dev", "webhookUrl": "https://tunnel.../webhook/dev",
      "lastUpdateId": 8841, "pendingUpdates": 0 }
  ]
}`,
  },
}

const methodColor: Record<string, { bg: string; text: string }> = {
  GET:    { bg: 'rgba(112,112,208,0.15)', text: '#9494e8' },
  POST:   { bg: 'rgba(80,180,120,0.15)',  text: '#80d4a0' },
  DELETE: { bg: 'rgba(220,80,80,0.15)',   text: '#e07070' },
  PATCH:  { bg: 'rgba(240,208,128,0.15)', text: '#f0d080' },
}

const onThisPage = allIds.map(id => ({
  id,
  label: sidebarGroups.flatMap(g => g.items).find(i => i.id === id)?.label ?? id,
}))
const activeHeading = ref(allIds[0])

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) { activeId.value = e.target.id; activeHeading.value = e.target.id }
    }
  }, { rootMargin: '-15% 0px -75% 0px' })

  allIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="relative z-10 pt-14 min-h-screen">
    <div class="max-w-6xl mx-auto px-6 py-16">

      <!-- 3-column grid -->
      <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_180px] gap-0 items-start">

        <!-- ── Left sidebar ───────────────────────────────── -->
        <aside class="hidden md:block md:sticky top-20 self-start pr-6 pb-16">
          <div v-for="group in sidebarGroups" :key="group.label" class="mb-5">
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

          <!-- Overview -->
          <section id="overview" class="docs-prose mb-16">
            <h1>API Reference Overview</h1>
            <span class="subtitle">Tools and endpoints available in louieDevAgent.</span>

            <p>
              The louieDevAgent exposes a REST API built with <strong>Hono</strong>, served locally on
              port <code>3141</code> and exposed externally via Cloudflare Tunnel. The Louie Agent
              Dashboard uses this API for all real-time data.
            </p>

            <table class="docs-table">
              <thead>
                <tr><th>Property</th><th>Value</th></tr>
              </thead>
              <tbody>
                <tr><td>Base URL (local)</td><td style="color:#888899">http://localhost:3141</td></tr>
                <tr><td>Base URL (tunnel)</td><td style="color:#888899">https://&lt;tunnel&gt;.trycloudflare.com</td></tr>
                <tr><td>Content-Type</td><td style="color:#888899">application/json</td></tr>
                <tr><td>Authentication</td><td style="color:#888899">Bearer token — Authorization header</td></tr>
              </tbody>
            </table>

            <h2 style="margin-top: 2rem;">Endpoint Categories</h2>
            <table class="docs-table">
              <thead>
                <tr><th>Category</th><th>Endpoints</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent System</td>
                  <td>
                    <span v-for="s in ['List Agents','Agent Detail','Start Agent','Stop Agent']" :key="s"
                      class="inline-block font-mono text-xs text-vigil-400 mr-2">{{ s }}</span>
                  </td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>
                    <span v-for="s in ['Memory Stats','Memory Search','Decay Cycle']" :key="s"
                      class="inline-block font-mono text-xs text-vigil-400 mr-2">{{ s }}</span>
                  </td>
                </tr>
                <tr>
                  <td>Dashboard</td>
                  <td>
                    <span v-for="s in ['Token Usage','Cost Tracking','Hive Feed','SSE Stream']" :key="s"
                      class="inline-block font-mono text-xs text-vigil-400 mr-2">{{ s }}</span>
                  </td>
                </tr>
                <tr>
                  <td>Telegram</td>
                  <td>
                    <span v-for="s in ['Webhook Handler','Status Check']" :key="s"
                      class="inline-block font-mono text-xs text-vigil-400 mr-2">{{ s }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Individual endpoint sections -->
          <template v-for="sectionId in allIds.filter(id => id !== 'overview' && id !== 'env-vars')" :key="sectionId">
            <section :id="sectionId" class="docs-prose mb-12" v-if="endpoints[sectionId]">
              <h2>{{ sidebarGroups.flatMap(g => g.items).find(i => i.id === sectionId)?.label }}</h2>

              <!-- Method + path -->
              <div class="flex items-center gap-3 mb-4 p-3 rounded-lg bg-void-card border border-void-border font-mono">
                <span class="text-xs px-2.5 py-1 rounded font-medium shrink-0"
                  :style="{ background: methodColor[endpoints[sectionId].method].bg, color: methodColor[endpoints[sectionId].method].text }">
                  {{ endpoints[sectionId].method }}
                </span>
                <code class="text-sm text-ink" style="background:transparent; color: #e8e8f0; padding: 0;">{{ endpoints[sectionId].path }}</code>
              </div>

              <p>{{ endpoints[sectionId].desc }}</p>

              <!-- Path/query params -->
              <template v-if="endpoints[sectionId].params && endpoints[sectionId].params!.length">
                <h3>Parameters</h3>
                <table class="docs-table">
                  <thead><tr><th>Name</th><th>Type</th><th>In</th><th>Description</th></tr></thead>
                  <tbody>
                    <tr v-for="p in endpoints[sectionId].params" :key="p.name">
                      <td>{{ p.name }}</td>
                      <td style="color:#888899">{{ p.type }}</td>
                      <td style="color:#888899">{{ p.in }}</td>
                      <td>{{ p.desc }}</td>
                    </tr>
                  </tbody>
                </table>
              </template>

              <!-- Response -->
              <h3>Response</h3>
              <pre class="docs-prose"><code style="color:#888899">{{ endpoints[sectionId].response }}</code></pre>
            </section>
          </template>

          <!-- Configuration / env vars -->
          <section id="env-vars" class="docs-prose mb-16">
            <h2>Environment Variables</h2>
            <p>
              All configuration lives in a <code>.env</code> file in the louieDevAgent project root.
              Copy <code>.env.example</code> to get started.
            </p>
            <table class="docs-table">
              <thead>
                <tr><th>Variable</th><th>Required</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr v-for="v in [
                  { name: 'MANAGER_BOT_TOKEN',  req: true,  desc: 'Telegram bot token for the manager bot.' },
                  { name: 'DEV_BOT_TOKEN',       req: false, desc: 'Token for the Dev specialist agent.' },
                  { name: 'COMMS_BOT_TOKEN',     req: false, desc: 'Token for the Comms specialist agent.' },
                  { name: 'CONTENT_BOT_TOKEN',   req: false, desc: 'Token for the Content specialist agent.' },
                  { name: 'OPS_BOT_TOKEN',       req: false, desc: 'Token for the Ops specialist agent.' },
                  { name: 'RESEARCH_BOT_TOKEN',  req: false, desc: 'Token for the Research specialist agent.' },
                  { name: 'API_PORT',            req: false, desc: 'Hono API server port. Default: 3141.' },
                  { name: 'TUNNEL_URL',          req: false, desc: 'Cloudflare Tunnel URL for webhook registration.' },
                  { name: 'AUTH_TOKEN',          req: false, desc: 'Bearer token for dashboard API authentication.' },
                ]" :key="v.name">
                  <td>{{ v.name }}</td>
                  <td>
                    <span :style="v.req ? 'color:#e07070' : 'color:#44445a'">{{ v.req ? 'Yes' : 'No' }}</span>
                  </td>
                  <td>{{ v.desc }}</td>
                </tr>
              </tbody>
            </table>
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
