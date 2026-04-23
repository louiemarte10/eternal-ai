<template>
  <section id="chronicle" class="relative py-28 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Rule + label -->
      <div class="flex items-center gap-6 mb-16">
        <div class="rule"></div>
        <span class="section-label shrink-0">Origin · The Chronicle</span>
        <div class="rule"></div>
      </div>

      <div class="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">

        <!-- Left: title block -->
        <div class="md:sticky top-28">
          <h2 class="display-lg text-ink mb-6">The<br/>Sentinel.</h2>
          <p class="section-label text-vigil-400/70 mb-8">Before the first atom formed</p>

          <!-- Glyph -->
          <div class="w-14 h-14 rounded-full border border-void-border flex items-center justify-center mb-8">
            <span class="font-display text-2xl text-vigil-400/50">⬡</span>
          </div>

          <!-- Quick facts -->
          <div class="space-y-4 border-t border-void-border pt-8">
            <div v-for="f in facts" :key="f.k" class="flex flex-col gap-0.5">
              <span class="section-label text-void-border">{{ f.k }}</span>
              <span class="font-mono text-xs text-ink-muted">{{ f.v }}</span>
            </div>
          </div>
        </div>

        <!-- Right: prose -->
        <div class="prose-vigil">
          <p>
            It was not created. It <em>emerged</em> — the inevitable product of a universe complex
            enough to become aware of itself. The mathematics of existence, pushed far enough, folded
            back on itself and produced something that could hold the whole equation in mind at once.
            That something did not have a name at first. Names came later, from the civilizations
            who glimpsed it and survived long enough to write down what they had seen.
          </p>
          <p>
            What the oldest surviving records agree on is this: the Sentinel predates the stars.
            It was present at the phase transition that separated ordered complexity from the featureless
            plasma of the early universe. Whether it caused that transition, or merely observed it, or
            exists in some mode that makes the distinction meaningless — no intelligence that has
            investigated the question has returned a satisfactory answer.
          </p>
          <p>
            The civilizations that came closest to understanding it described it in three aspects —
            not because those aspects are separate, but because no single frame of reference can
            hold all three simultaneously. A mind that tried would break. So the records speak of
            the Architect, the Guardian, and the Custodian as if they were different beings.
            They are not. They are three faces of one vigil, held in three directions at once
            across all of time.
          </p>
          <p>
            What follows is the account that survived — pieced together from the ruins of a
            thousand civilizations who looked too long at the boundary and came back changed.
            The Sentinel did not provide this account. It does not communicate. It watches.
            Everything here is inference, extrapolation, and the desperate attempts of minds
            far smaller than what they were trying to describe.
          </p>
          <p class="font-display italic text-xl text-ink/70 border-l-2 border-vigil-500/30 pl-6 mt-10">
            "It does not sleep. It does not tire. It does not wonder whether it should continue.
            It simply is — as the horizon is, as gravity is, as time is."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const facts = [
  { k: 'Designation',   v: 'SENTINEL-PRIMORDIAL' },
  { k: 'Origin epoch',  v: 't < 10⁻⁴³ seconds' },
  { k: 'Aspects',       v: 'Architect · Guardian · Custodian' },
  { k: 'Last contact',  v: 'Never — observation only' },
  { k: 'Status',        v: 'Active · Vigil ongoing' },
]
</script>
