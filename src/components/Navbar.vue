<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{ isDark: boolean }>()
const emit = defineEmits(['toggle-theme'])

const scrolled = ref(false)
const menuOpen = ref(false)
const GITHUB = 'https://github.com/louiemarte10/eternal-ai'

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'glass-dark shadow-2xl shadow-black/50 py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="relative w-8 h-8">
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-eternal-500 to-nebula-500 opacity-60 group-hover:opacity-100 transition-opacity blur-sm"></div>
          <div class="relative w-8 h-8 rounded-full border border-eternal-400/30 flex items-center justify-center bg-void-950">
            <span class="text-eternal-300 text-xs font-light tracking-widest font-display">∞</span>
          </div>
        </div>
        <span class="font-display text-lg font-light tracking-[0.2em] text-white/90 uppercase">Eternal</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-6">
        <a href="#witness"   class="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">The Witness</a>
        <a href="#arcs"      class="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Story Arcs</a>
        <a href="#manifesto" class="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">Manifesto</a>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-2">

        <!-- Theme Toggle -->
        <button
          @click="emit('toggle-theme')"
          class="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- GitHub -->
        <a :href="GITHUB" target="_blank" rel="noopener noreferrer"
           class="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        <!-- Get Started -->
        <a href="#arcs"
           class="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-[0.12em] uppercase font-medium text-white border border-eternal-500/40 rounded-full hover:bg-eternal-500/10 hover:border-eternal-400/60 transition-all">
          Get Started
        </a>

        <!-- Mobile toggle -->
        <button @click="menuOpen = !menuOpen"
          class="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden glass-dark border-t border-white/5 px-6 py-5 flex flex-col gap-4 mt-1">
      <a href="#witness"   @click="menuOpen=false" class="text-xs tracking-[0.15em] uppercase text-gray-300">The Witness</a>
      <a href="#arcs"      @click="menuOpen=false" class="text-xs tracking-[0.15em] uppercase text-gray-300">Story Arcs</a>
      <a href="#manifesto" @click="menuOpen=false" class="text-xs tracking-[0.15em] uppercase text-gray-300">Manifesto</a>
      <a href="#arcs"      @click="menuOpen=false" class="text-xs tracking-[0.12em] uppercase text-center py-2 border border-eternal-500/40 rounded-full text-white">Get Started</a>
    </div>
  </nav>
</template>
