<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{ isDark: boolean }>()
const emit = defineEmits(['toggle-theme', 'open-search'])

const scrolled  = ref(false)
const menuOpen  = ref(false)
const GITHUB    = 'https://github.com/louiemarte10/eternal-vigil-ai'

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-void-DEFAULT/85 backdrop-blur-xl border-b border-void-border' : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6">

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2.5 shrink-0 group">
        <div class="w-6 h-6 rounded-full border border-vigil-500/40 flex items-center justify-center group-hover:border-vigil-400/70 transition-colors">
          <span class="font-display text-xs text-vigil-400/70 group-hover:text-vigil-400 transition-colors">⬡</span>
        </div>
        <span class="font-display text-sm tracking-[0.18em] uppercase text-ink/80 group-hover:text-ink transition-colors">
          The Eternals
        </span>
      </RouterLink>

      <!-- Center nav -->
      <nav class="hidden md:flex flex-1 items-center justify-center gap-8">
        <RouterLink to="/docs"           class="nav-link relative py-1">Docs</RouterLink>
        <RouterLink to="/api-reference"  class="nav-link relative py-1">API Reference</RouterLink>
        <a :href="GITHUB" target="_blank" rel="noopener noreferrer"
           class="nav-link flex items-center gap-1.5">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-2 shrink-0 ml-auto md:ml-0">

        <!-- Search pill -->
        <button @click="emit('open-search')"
          class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-void-border text-ink-faint text-xs font-sans hover:border-vigil-500/40 hover:text-ink-muted transition-all duration-200">
          <svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"/>
          </svg>
          <span>Search</span>
          <kbd class="font-mono text-[10px] px-1.5 py-0.5 rounded border border-void-border leading-none">⌘K</kbd>
        </button>

        <!-- Search icon on very small screens -->
        <button @click="emit('open-search')"
          class="sm:hidden w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"/>
          </svg>
        </button>

        <!-- Theme toggle -->
        <button @click="emit('toggle-theme')"
          class="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card"
          :title="isDark ? 'Light mode' : 'Dark mode'">
          <svg v-if="isDark" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z"/>
          </svg>
          <svg v-else class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Get Started — filled button -->
        <RouterLink to="/docs"
          class="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-vigil-500 text-white text-xs font-sans font-normal hover:bg-vigil-600 transition-colors duration-200 tracking-wide">
          Get Started
        </RouterLink>

        <!-- Mobile menu toggle -->
        <button @click="menuOpen = !menuOpen"
          class="md:hidden w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-void-card">
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
      class="md:hidden border-t border-void-border bg-void-DEFAULT/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
      <RouterLink :to="{ path: '/', hash: '#chronicle' }" @click="menuOpen=false" class="nav-link">Chronicle</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#aspects' }"   @click="menuOpen=false" class="nav-link">Aspects</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#ecosystem' }" @click="menuOpen=false" class="nav-link">Ecosystem</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#manifesto' }" @click="menuOpen=false" class="nav-link">Manifesto</RouterLink>
      <div class="h-px bg-void-border"></div>
      <RouterLink to="/docs"           @click="menuOpen=false" class="nav-link">Docs</RouterLink>
      <RouterLink to="/api-reference"  @click="menuOpen=false" class="nav-link">API Reference</RouterLink>
      <a :href="GITHUB" target="_blank" rel="noopener noreferrer" @click="menuOpen=false" class="nav-link">GitHub</a>
      <RouterLink to="/docs" @click="menuOpen=false"
        class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-vigil-500 text-white text-xs font-sans mt-2">
        Get Started
      </RouterLink>
    </div>
  </header>
</template>
