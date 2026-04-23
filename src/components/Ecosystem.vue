<script setup lang="ts">
const projects = [
  {
    name: 'Agentic AI',
    subtitle: 'louieDevAgent — Multi-Tenant AI System',
    repo: 'louiemarte10/agentic-ai-using-claude-code',
    url: 'https://github.com/louiemarte10/agentic-ai-using-claude-code',
    desc: 'A multi-tenant AI agent system powered by Claude Code, accessible via Telegram. One manager bot orchestrates a fleet of specialist agents — Dev, Comms, Content, Ops, Research — each with isolated workspaces, persistent memory, and their own Telegram interface. No extra API costs. Runs entirely on your existing Claude Code subscription.',
    stack: ['Node.js', 'TypeScript', 'Claude Code', 'Telegram', 'SQLite'],
    accent: '#9494e8',
    status: 'Active',
    features: [
      'Multi-tenant manager + specialist architecture',
      '5-layer persistent memory system',
      'Hive mind — shared cross-agent awareness',
      'Live web dashboard via Hono + SSE',
      'Scheduled tasks, voice messages, file sending',
    ],
  },
  {
    name: 'Louie Agent Dashboard',
    subtitle: 'Mission Control — Vue.js Fleet Monitor',
    repo: 'louiemarte10/louie-agent-dashboard',
    url: 'https://github.com/louiemarte10/louie-agent-dashboard',
    desc: 'Real-time mission control panel for the louieDevAgent fleet. Deployed on Vercel, connected to the local agent API via Cloudflare Tunnel. Monitor agent status, token usage, costs, hive mind activity, memory health, and scheduled tasks — from any device, anywhere.',
    stack: ['Vue 3', 'Tailwind CSS', 'Vite', 'Vercel', 'Cloudflare Tunnel'],
    accent: '#c084fc',
    status: 'Active',
    features: [
      'Live agent status with On/Off toggle switches',
      'Token usage charts and cost tracking per agent',
      'Hive mind feed with color-coded agent badges',
      'Memory browser — stats, decay, top accessed',
      'Auto-refresh every 30 seconds, full dark theme',
    ],
  },
]
</script>

<template>
  <section id="ecosystem" class="relative py-28 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="flex items-center gap-6 mb-16">
        <div class="rule"></div>
        <span class="section-label shrink-0">Ecosystem · Live Projects</span>
        <div class="rule"></div>
      </div>

      <div class="mb-12">
        <h2 class="display-md text-ink mb-4">The living work.</h2>
        <p class="font-sans font-light text-ink-muted max-w-xl leading-relaxed">
          The Sentinel narrative is the myth. These are the machines — two open-source projects
          built in the same spirit of persistent, autonomous intelligence.
        </p>
      </div>

      <!-- Project cards -->
      <div class="space-y-6">
        <div v-for="p in projects" :key="p.repo" class="vigil-card p-6 md:p-10">

          <!-- Card header -->
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="section-label" :style="{ color: p.accent + '90' }">{{ p.subtitle }}</span>
                <span class="pill text-2xs" :style="{ borderColor: p.accent + '30', color: p.accent + '80' }">
                  {{ p.status }}
                </span>
              </div>
              <h3 class="font-display text-2xl md:text-3xl font-light text-ink">{{ p.name }}</h3>
            </div>

            <!-- GitHub link -->
            <a :href="p.url" target="_blank" rel="noopener noreferrer"
               class="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-void-border hover:border-vigil-500/30 text-ink-muted hover:text-ink transition-all duration-200 text-xs font-mono">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              {{ p.repo }}
            </a>
          </div>

          <div class="rule mb-6"></div>

          <!-- Description + features -->
          <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12">
            <div>
              <p class="font-sans font-light text-ink-muted leading-relaxed text-sm mb-6">{{ p.desc }}</p>

              <!-- Features -->
              <ul class="space-y-2">
                <li v-for="f in p.features" :key="f"
                    class="flex items-start gap-3 text-sm font-sans font-light text-ink-muted">
                  <span class="shrink-0 mt-1.5 w-1 h-1 rounded-full" :style="{ background: p.accent + '70' }"></span>
                  {{ f }}
                </li>
              </ul>
            </div>

            <!-- Stack + CTA -->
            <div class="flex flex-col justify-between gap-6">
              <div>
                <div class="section-label mb-3">Stack</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="s in p.stack" :key="s"
                        class="font-mono text-xs px-2.5 py-1 rounded border border-void-border text-ink-faint bg-void-card">
                    {{ s }}
                  </span>
                </div>
              </div>

              <a :href="p.url" target="_blank" rel="noopener noreferrer"
                 class="btn-primary w-fit text-xs" :style="{ borderColor: p.accent + '40', color: p.accent }">
                View Repository →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
