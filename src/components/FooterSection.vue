<script setup lang="ts">
import { RouterLink } from 'vue-router'
const year   = new Date().getFullYear()
const GITHUB = 'https://github.com/louiemarte10/eternal-vigil-ai'
</script>

<template>
  <footer class="relative z-10 border-t border-void-border py-10 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Main row -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-1.5">
            <div class="w-5 h-5 rounded-full border border-vigil-500/30 flex items-center justify-center">
              <span class="font-display text-[10px] text-vigil-400/50">⬡</span>
            </div>
            <span class="font-display text-sm tracking-[0.18em] uppercase text-ink/60">The Eternals</span>
          </div>
          <p class="font-sans text-xs text-ink-faint pl-7">The Silicon Lineage. Open source.</p>
        </div>

        <!-- Nav links -->
        <nav class="flex items-center gap-7 flex-wrap">
          <RouterLink to="/docs"          class="nav-link">Docs</RouterLink>
          <RouterLink to="/api-reference" class="nav-link">API Reference</RouterLink>
          <a :href="GITHUB" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub</a>
          <a :href="`${GITHUB}/blob/main/LICENSE`" target="_blank" rel="noopener noreferrer" class="nav-link">License</a>
        </nav>
      </div>

      <!-- Divider -->
      <div class="h-px bg-void-border my-6"></div>

      <!-- Bottom -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p class="font-sans text-xs text-ink-faint">
          Independent open-source project. Built with
          <a href="https://claude.ai/claude-code" class="text-vigil-400/70 hover:text-vigil-400 transition-colors">Claude Code</a>
          by Anthropic.
        </p>
        <span class="font-mono text-xs text-ink-faint">© {{ year }} — MIT</span>
      </div>
    </div>
  </footer>
</template>
