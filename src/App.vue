<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Navbar      from './components/Navbar.vue'
import Hero        from './components/Hero.vue'
import Chronicle   from './components/Chronicle.vue'
import Aspects     from './components/Aspects.vue'
import Ecosystem   from './components/Ecosystem.vue'
import Manifesto   from './components/Manifesto.vue'
import FooterSection from './components/FooterSection.vue'
import StarField   from './components/StarField.vue'

const isDark = ref(true)

onMounted(() => {
  isDark.value = localStorage.getItem('vigil-theme') !== 'light'
  applyTheme(isDark.value)
})

watch(isDark, val => {
  localStorage.setItem('vigil-theme', val ? 'dark' : 'light')
  applyTheme(val)
})

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <StarField />
    <Navbar :isDark="isDark" @toggle-theme="isDark = !isDark" />
    <main class="relative z-10">
      <Hero />
      <Chronicle />
      <Aspects />
      <Ecosystem />
      <Manifesto />
    </main>
    <FooterSection />
  </div>
</template>
