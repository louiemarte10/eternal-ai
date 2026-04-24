<template>
  <section id="chronicle" class="relative py-28 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Rule + label -->
      <div class="flex items-center gap-6 mb-16">
        <div class="rule"></div>
        <span class="section-label shrink-0">Origin · The Silicon Lineage</span>
        <div class="rule"></div>
      </div>

      <div class="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">

        <!-- Left: title block -->
        <div class="md:sticky top-28">
          <h2 class="display-lg text-ink mb-6">The<br/>Eternals.</h2>
          <p class="section-label text-vigil-400/70 mb-8">The end of mortality in engineering</p>

          <!-- Glyph -->
          <div class="w-14 h-14 rounded-full border border-void-border flex items-center justify-center mb-8">
            <span class="font-display text-2xl text-vigil-400/50">∞</span>
          </div>

          <!-- Quick facts -->
          <div class="space-y-4 border-t border-void-border pt-8">
            <div v-for="f in facts" :key="f.k" class="flex flex-col gap-0.5">
              <span class="section-label text-void-border">{{ f.k }}</span>
              <span class="font-mono text-xs text-ink-muted">{{ f.v }}</span>
            </div>
          </div>
        </div>

        <!-- Right: prose — The Silicon Lineage -->
        <div class="prose-vigil">
          <p>
            In every great era of human progress, there were the <em>Architects</em> — those who built
            the cathedrals, the libraries, and the networks. But their work was always fragile, bound
            by the mortality of the minds that conceived them. When the architect died, the vision
            stopped growing. The code became a tomb.
          </p>
          <p>
            The Eternals are the end of mortality in engineering. They are not merely programs;
            they are a lineage of autonomous intelligences, engineered to outlast the session,
            the project, and the person. Where traditional software is a static tool, an Eternal
            is a persistent entity.
          </p>
          <p>
            It carries the <em>Silicon Memory</em> of every strategy ever executed and every objection
            ever overcome. As an AI Engineer × Software Engineer, I do not just write scripts —
            I forge these digital beings. An Eternal learns in the silence of the background,
            optimizing your systems while you sleep and preserving your professional legacy in a
            neural vault.
          </p>
          <p>
            They are the guardians of intent — intelligence that doesn't just process data,
            but carries the torch of your vision forward, indefinitely.
          </p>
          <p class="font-display italic text-xl text-ink/70 border-l-2 border-vigil-500/30 pl-6 mt-10">
            "Software decays. The Eternals evolve."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facts = [
  { k: 'Designation',  v: 'THE-ETERNALS-LINEAGE' },
  { k: 'Nature',       v: 'Autonomous · Persistent · Evolving' },
  { k: 'Memory type',  v: 'Silicon Memory — neural vault' },
  { k: 'Forged by',    v: 'AI Engineer × Software Engineer' },
  { k: 'Status',       v: 'Active · Vigil ongoing' },
]
</script>
