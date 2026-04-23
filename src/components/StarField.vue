<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animId = 0

onMounted(() => {
  const c = canvas.value!
  const ctx = c.getContext('2d')!
  let W = window.innerWidth, H = window.innerHeight

  const stars = Array.from({ length: 220 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.4 + 0.2,
    a: Math.random(),
    speed: Math.random() * 0.004 + 0.001,
    phase: Math.random() * Math.PI * 2,
  }))

  function resize() {
    W = window.innerWidth; H = window.innerHeight
    c.width = W; c.height = H
  }
  resize()
  window.addEventListener('resize', resize)

  function draw(t: number) {
    ctx.clearRect(0, 0, W, H)
    for (const s of stars) {
      const alpha = 0.15 + 0.6 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200, 200, 255, ${alpha})`
      ctx.fill()
    }
    animId = requestAnimationFrame(draw)
  }
  animId = requestAnimationFrame(draw)

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0" />
</template>
