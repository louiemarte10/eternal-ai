<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import Navbar       from './components/Navbar.vue'
import StarField    from './components/StarField.vue'
import SearchModal  from './components/SearchModal.vue'

const isDark     = ref(true)
const searchOpen = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('eternals-theme') !== 'light'
  applyTheme(isDark.value)
  window.addEventListener('keydown', onGlobalKey)
})

onUnmounted(() => window.removeEventListener('keydown', onGlobalKey))

watch(isDark, val => {
  localStorage.setItem('eternals-theme', val ? 'dark' : 'light')
  applyTheme(val)
})

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

function onGlobalKey(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    searchOpen.value = true
  }
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <StarField />
    <Navbar
      :isDark="isDark"
      @toggle-theme="isDark = !isDark"
      @open-search="searchOpen = true"
    />
    <RouterView />
    <SearchModal v-if="searchOpen" @close="searchOpen = false" />
  </div>
</template>
