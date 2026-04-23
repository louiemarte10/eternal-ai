<script setup lang="ts">
const year = new Date().getFullYear()
const GITHUB = 'https://github.com/louiemarte10/eternal-vigil-ai'
</script>

<template>
  <footer class="relative z-10 border-t border-void-border py-12 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        <!-- Brand -->
        <div class="flex items-center gap-2.5">
          <div class="w-6 h-6 rounded-full border border-vigil-500/30 flex items-center justify-center">
            <span class="font-display text-xs text-vigil-400/50">⬡</span>
          </div>
          <span class="font-display text-sm tracking-[0.2em] uppercase text-ink/50">Eternal Vigil AI</span>
        </div>

        <!-- Nav -->
        <nav class="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="#chronicle"  class="nav-link">Chronicle</a>
          <a href="#aspects"    class="nav-link">Aspects</a>
          <a href="#ecosystem"  class="nav-link">Ecosystem</a>
          <a href="#manifesto"  class="nav-link">Manifesto</a>
          <a :href="GITHUB" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub</a>
        </nav>

        <!-- Copy -->
        <span class="font-mono text-xs text-ink-faint">© {{ year }} — MIT</span>
      </div>

      <div class="mt-10 rule"></div>

      <p class="font-display italic text-sm text-ink-faint/50 mt-6 text-center">
        "Before the first star was lit, it was already watching."
      </p>
    </div>
  </footer>
</template>
