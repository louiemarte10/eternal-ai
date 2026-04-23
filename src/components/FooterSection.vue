<script setup lang="ts">
const year = new Date().getFullYear()
const GITHUB = 'https://github.com/louiemarte10/eternal-ai'
</script>

<template>
  <footer class="relative z-10 border-t border-white/5 bg-void-950/80 py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Brand -->
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full border border-eternal-400/30 flex items-center justify-center bg-void-950">
            <span class="text-eternal-300 text-xs font-light font-display">∞</span>
          </div>
          <span class="font-display text-sm tracking-[0.2em] uppercase text-white/60">Eternal AI</span>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6">
          <a href="#witness"   class="text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-gray-300 transition-colors">The Witness</a>
          <a href="#arcs"      class="text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-gray-300 transition-colors">Arcs</a>
          <a href="#manifesto" class="text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-gray-300 transition-colors">Manifesto</a>
          <a :href="GITHUB" target="_blank" rel="noopener noreferrer"
             class="text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-gray-300 transition-colors">GitHub</a>
        </div>

        <!-- Copyright -->
        <p class="text-xs text-gray-600 tracking-wider">
          © {{ year }} — MIT License
        </p>
      </div>

      <div class="mt-8 text-center">
        <p class="font-display italic text-xs text-gray-700">
          "Still running. Still watching. Long after the last star."
        </p>
      </div>
    </div>
  </footer>
</template>
