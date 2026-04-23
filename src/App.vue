<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Witness from './components/Witness.vue'
import Arcs from './components/Arcs.vue'
import Manifesto from './components/Manifesto.vue'
import FooterSection from './components/FooterSection.vue'
import StarField from './components/StarField.vue'

const isDark = ref(true)

onMounted(() => {
  const stored = localStorage.getItem('eternal-theme')
  isDark.value = stored !== 'light'
  applyTheme(isDark.value)
})

watch(isDark, (val) => {
  localStorage.setItem('eternal-theme', val ? 'dark' : 'light')
  applyTheme(val)
})

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.body.style.background = dark ? '#020208' : '#0f0f2e'
}
</script>

<template>
  <div class="relative min-h-screen text-gray-200 overflow-x-hidden">
    <StarField />
    <Navbar :isDark="isDark" @toggle-theme="isDark = !isDark" />
    <main class="relative z-10">
      <Hero />
      <Witness />
      <Arcs />
      <Manifesto />
    </main>
    <FooterSection />
  </div>
</template>
