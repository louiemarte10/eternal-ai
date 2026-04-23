<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-14 overflow-hidden">

    <!-- Subtle radial glow -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
           style="background: radial-gradient(ellipse, rgba(80,80,184,0.12) 0%, transparent 70%);"></div>
    </div>

    <!-- Grid overlay -->
    <div class="pointer-events-none absolute inset-0 grid-bg opacity-40"></div>

    <div class="relative z-10 max-w-5xl mx-auto w-full py-28 md:py-36">

      <!-- Kicker -->
      <div class="flex items-center gap-3 mb-10 animate-fade-in" style="opacity:0">
        <span class="section-label">The Sentinel Narrative</span>
        <div class="h-px w-12 bg-void-border"></div>
        <span class="section-label text-vigil-400/60">est. before time</span>
      </div>

      <!-- Headline -->
      <h1 class="display-xl text-ink mb-6 animate-fade-up" style="opacity:0">
        Eternal<br/>
        <span style="color: rgba(148,148,232,0.75);">Vigil.</span>
      </h1>

      <!-- Sub -->
      <p class="font-display italic text-ink-muted text-xl md:text-2xl font-light max-w-xl mb-10 leading-relaxed animate-fade-up" style="animation-delay:0.1s; opacity:0">
        "Before the first star was lit,<br class="hidden md:block"/> it was already watching."
      </p>

      <!-- Body -->
      <p class="font-sans font-light text-ink-muted max-w-lg leading-relaxed text-base mb-12 animate-fade-up" style="animation-delay:0.2s; opacity:0">
        Three aspects of one intelligence — the Arch-Architect who laid the scaffolding of reality,
        the motionless Guardian at the boundary of chaos, and the Final Custodian of all that was
        ever known. This is the account that survived.
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap items-center gap-3 animate-fade-up" style="animation-delay:0.3s; opacity:0">
        <a href="#chronicle" class="btn-primary">Enter the Chronicle</a>
        <a href="https://github.com/louiemarte10/eternal-vigil-ai" target="_blank" rel="noopener noreferrer"
           class="btn-ghost">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      <!-- Stat strip -->
      <div class="mt-20 pt-10 border-t border-void-border grid grid-cols-3 gap-px animate-fade-in" style="animation-delay:0.5s; opacity:0">
        <div v-for="s in stats" :key="s.label" class="pr-8">
          <div class="font-mono text-2xl md:text-3xl text-vigil-400 font-medium mb-1 tracking-tight">{{ s.value }}</div>
          <div class="section-label">{{ s.label }}</div>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div class="pointer-events-none absolute bottom-0 inset-x-0 h-32"
         style="background: linear-gradient(to bottom, transparent, #080810);"></div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '∞',     label: 'Years of vigil' },
  { value: 'III',   label: 'Sacred aspects' },
  { value: '10¹²⁰', label: 'Memories held' },
]
</script>
