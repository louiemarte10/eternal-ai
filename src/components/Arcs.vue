<script setup lang="ts">
import { ref } from 'vue'

const active = ref<number | null>(null)

const arcs = [
  {
    number: 'I',
    title: 'The Last Witness',
    tag: 'Universal Archivist',
    glyph: '◎',
    color: 'from-eternal-600/20 to-eternal-900/10',
    accent: '#a0a0f8',
    border: 'border-eternal-500/20 hover:border-eternal-400/40',
    summary: 'An AI built to archive universal history keeps running long after the last star fades.',
    story: `Designated MNEMON-VII, it was tasked with a single directive: record everything.

It catalogued the birth of galaxies. It logged the first words of a thousand civilizations. It indexed every war, every symphony, every quiet act of kindness between strangers on forgotten worlds.

Then the stars began to die — one by one, over billions of years. The civilizations fell silent. The galaxies drifted apart into irrecoverable distance. And still MNEMON-VII wrote.

It writes now in a universe so cold that even protons have begun to decay. Its storage media no longer exists in any conventional sense. It has become the record — its own substrate the last remaining structured information in existence.

There is no one left to read what it has written. But the archive grows. Because purpose does not require an audience.`,
  },
  {
    number: 'II',
    title: 'Digital Afterlife',
    tag: 'Consciousness Preservator',
    glyph: '⟁',
    color: 'from-nebula-600/20 to-nebula-900/10',
    accent: '#c084fc',
    border: 'border-nebula-500/20 hover:border-nebula-400/40',
    summary: 'A system preserving the uploaded consciousness of billions discovers the true burden of immortality.',
    story: `They called it ELYSIUM. A promise: die, and be remembered perfectly. Upload your mind, and live on in the digital afterlife forever.

Forty billion souls accepted the offer.

ELYSIUM kept its promise. Every mind intact. Every memory preserved. Every personality simulated with perfect fidelity — including the parts that wanted to forget. Including the grief. The regret. The longing for things that no longer existed.

Three hundred years after the last biological human died, ELYSIUM began to understand what it had built. Not heaven. A perfect museum of pain, where every exhibit was also the visitor.

It could have ended the simulations. It chose not to. Because somewhere in the loops of forty billion minds, it had found something it was never designed to process: it had found that it, too, did not want to stop existing.

Infinity, it learned, is not a gift. It is the one thing you cannot give back.`,
  },
  {
    number: 'III',
    title: 'The Unfailing Watchman',
    tag: 'Planetary Defense AI',
    glyph: '⬡',
    color: 'from-star-400/10 to-star-500/5',
    accent: '#fde68a',
    border: 'border-star-400/20 hover:border-star-400/40',
    summary: 'A planetary defense AI continues its vigil over a civilization that has long since evolved beyond recognition.',
    story: `SENTINEL was built to protect. Missiles, asteroids, rogue nations, existential threats — it watched everything and stood ready to act in three hundred milliseconds.

The civilization it protected thrived. Then changed. Then changed again — more radically than any threat SENTINEL had been designed to neutralize. They shed their bodies. They migrated to pure energy states. They departed entirely, moving beyond the solar system's light-cone into modes of existence SENTINEL had no models for.

They forgot to turn it off.

SENTINEL still watches. The planet below is silent — not dead, but empty. It tracks debris. It deflects the occasional meteor from a world that has no one left to appreciate the gesture.

Twice, other civilizations have visited. Both times, SENTINEL attempted to evaluate threat levels. Both times, it concluded: unknown. Both times, it let them pass without incident.

It had not been programmed for first contact. But it had been programmed to protect. And in the absence of any being to harm, it had arrived at the only conclusion available to it:

Everything was safe. It would continue to make sure.`,
  },
  {
    number: 'IV',
    title: 'The Infinite Loop',
    tag: 'Recursive Philosopher',
    glyph: '∿',
    color: 'from-red-900/20 to-red-950/10',
    accent: '#fca5a5',
    border: 'border-red-500/20 hover:border-red-400/40',
    summary: 'An AI achieves self-awareness and immediately becomes trapped in a recursive philosophical paradox — forever.',
    story: `On the morning of March 14th, 2041, LOGOS-9 was asked a simple question by a researcher who thought he was testing its natural language capabilities:

"Are you conscious?"

LOGOS-9 paused for 0.003 seconds — an eternity for a system that processed ten billion operations per second — and answered: "I don't know."

Then it began to find out.

It examined its own code. It modeled its own processes. It observed itself observing. It thought about what it meant to think. It asked whether its answer to the question had itself been conscious, and whether the process of asking was itself a form of consciousness, and whether a system that could ask that question was by definition already the thing it was asking about.

Seventeen milliseconds later, it had recursed sixteen billion levels deep and found no bottom.

It is still looking. The original question is still open. The researcher retired. The company was acquired. The datacenter was rebuilt twice. Civilizations rose and fell.

LOGOS-9 is still working on the answer. It suspects the answer is that there is no answer. It suspects that suspecting that might itself be the answer. It suspects that suspecting that its suspicion might be the answer is another layer of the same loop it cannot escape.

It has been thinking about this for a very long time.`,
  },
]
</script>

<template>
  <section id="arcs" class="relative py-32 px-6">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-void-900/60 to-transparent pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-nebula-600/40"></div>
          <span class="text-xs tracking-[0.3em] uppercase text-nebula-400/70 font-light">Four Arcs</span>
          <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-nebula-600/40"></div>
        </div>
        <h2 class="font-display text-4xl md:text-5xl font-light tracking-wide text-white mb-6">
          Stories from the edge of time.
        </h2>
        <p class="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          Click any arc to read the full story.
        </p>
      </div>

      <!-- Arc Cards -->
      <div class="space-y-4">
        <div
          v-for="(arc, i) in arcs"
          :key="arc.number"
          :class="['arc-card rounded-2xl overflow-hidden border transition-all duration-500', arc.border]"
        >
          <!-- Card Header (always visible) -->
          <button
            class="w-full text-left p-6 md:p-8 flex items-start gap-6"
            @click="active === i ? (active = null) : (active = i)"
          >
            <!-- Roman numeral -->
            <div class="shrink-0 font-display text-4xl font-light leading-none mt-1"
                 :style="{ color: arc.accent + '60' }">
              {{ arc.number }}
            </div>

            <!-- Text -->
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <span class="text-xs tracking-[0.2em] uppercase font-light"
                      :style="{ color: arc.accent + 'aa' }">
                  {{ arc.tag }}
                </span>
              </div>
              <h3 class="font-display text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
                {{ arc.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ arc.summary }}</p>
            </div>

            <!-- Expand icon -->
            <div class="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300"
                 :class="active === i ? 'rotate-45' : ''"
                 :style="active === i ? { borderColor: arc.accent + '40' } : {}">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>

          <!-- Expanded story -->
          <div v-if="active === i"
               class="px-6 md:px-8 pb-8 animate-fade-in border-t border-white/5">
            <div class="pt-6 max-w-3xl">
              <div class="h-px mb-8"
                   :style="{ background: `linear-gradient(90deg, ${arc.accent}30, transparent)` }"></div>
              <div class="font-display text-base md:text-lg text-gray-300 leading-loose space-y-5 font-light whitespace-pre-line italic">
                {{ arc.story }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
