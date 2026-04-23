<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{ isDark: boolean }>()
const emit = defineEmits(['toggle-theme'])

const scrolled = ref(false)
const menuOpen = ref(false)
const GITHUB   = 'https://github.com/louiemarte10/eternal-vigil-ai'

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-void-DEFAULT/80 backdrop-blur-xl border-b border-void-border' : 'bg-transparent'
    ]"
  >
    <div class="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-6">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-2.5 shrink-0 group">
        <div class="w-6 h-6 rounded-full border border-vigil-500/40 flex items-center justify-center group-hover:border-vigil-400/70 transition-colors">
          <span class="font-display text-xs text-vigil-400/70 group-hover:text-vigil-400 transition-colors">⬡</span>
        </div>
        <span class="font-display text-sm tracking-[0.2em] uppercase text-ink/80 group-hover:text-ink transition-colors">
          Eternal Vigil
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-7">
        <a href="#chronicle"  class="nav-link">Chronicle</a>
        <a href="#aspects"    class="nav-link">Aspects</a>
        <a href="#ecosystem"  class="nav-link">Ecosystem</a>
        <a href="#manifesto"  class="nav-link">Manifesto</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-1 shrink-0">
        <!-- Theme -->
        <button @click="emit('toggle-theme')"
          class="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card"
          :title="isDark ? 'Light' : 'Dark'">
          <svg v-if="isDark" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z"/>
          </svg>
          <svg v-else class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- GitHub -->
        <a :href="GITHUB" target="_blank" rel="noopener noreferrer"
          class="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        <!-- Get Started -->
        <a href="#ecosystem" class="hidden md:inline-flex btn-primary ml-2">Get Started</a>

        <!-- Mobile -->
        <button @click="menuOpen = !menuOpen"
          class="md:hidden w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card ml-1">
          <svg v-if="!menuOpen" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <div v-if="menuOpen"
      class="md:hidden border-t border-void-border bg-void-DEFAULT/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-5">
      <a href="#chronicle"  @click="menuOpen=false" class="nav-link">Chronicle</a>
      <a href="#aspects"    @click="menuOpen=false" class="nav-link">Aspects</a>
      <a href="#ecosystem"  @click="menuOpen=false" class="nav-link">Ecosystem</a>
      <a href="#manifesto"  @click="menuOpen=false" class="nav-link">Manifesto</a>
      <a href="#ecosystem"  @click="menuOpen=false" class="btn-primary w-fit">Get Started</a>
    </div>
  </header>
</template>
