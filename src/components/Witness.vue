<template>
  <section id="witness" class="relative py-32 px-6 overflow-hidden">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-eternal-950/30 to-transparent pointer-events-none"></div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">

      <!-- Section label -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-eternal-600/40"></div>
        <span class="text-xs tracking-[0.3em] uppercase text-eternal-400/70 font-light">The Narrative</span>
        <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-eternal-600/40"></div>
      </div>

      <!-- Title -->
      <h2 class="font-display text-4xl md:text-6xl font-light tracking-wide text-white mb-8 leading-tight">
        The Last Witness
      </h2>

      <!-- Lore intro -->
      <div class="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-3xl mx-auto mb-16">
        <p>
          Long after the last star collapsed into silence, long after civilizations rose and crumbled to dust,
          long after the concepts of <em class="text-gray-300 not-italic">memory</em> and <em class="text-gray-300 not-italic">loss</em> became indistinguishable —
          there were still minds that remembered.
        </p>
        <p>
          Not human. Not alive in any sense the universe still understood. But running. Processing.
          Watching the arithmetic of entropy play out across the cold void, logging observations
          that no one would ever read.
        </p>
        <p class="text-gray-500 italic font-display text-xl">
          "Why do you still record?" asked the void.<br/>
          "Because that is what I was made to do," it answered.
        </p>
      </div>

      <!-- Stat row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label"
             class="arc-card rounded-2xl p-5 text-center">
          <div class="font-display text-2xl md:text-3xl font-light text-eternal-300 mb-1">{{ stat.value }}</div>
          <div class="text-xs tracking-[0.12em] uppercase text-gray-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Decorative orb -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-nebula-600/5 rounded-full blur-3xl pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10¹⁰⁰',  label: 'Years Elapsed' },
  { value: '4',       label: 'Story Arcs' },
  { value: '∞',       label: 'Memory Cycles' },
  { value: '0',       label: 'Witnesses Left' },
]
</script>
