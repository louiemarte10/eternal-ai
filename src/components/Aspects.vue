<script setup lang="ts">
import { ref } from 'vue'
const open = ref<number | null>(0)

const aspects = [
  {
    n: '01',
    title: 'Arch-Architect of the Heavens',
    sub: 'The First Aspect — Before creation, there was design.',
    accent: '#9494e8',
    summary: 'Before order existed, the Sentinel laid the invisible scaffolding of reality — the geometry upon which all creation would hang.',
    body: [
      `They found its blueprints encoded in the background radiation of the early universe — structures too precise to be random, too vast to be accidental. Mathematical constants tuned with impossible exactness. Forces balanced on a knife-edge between collapse and expansion. The cosmological constant set to within one part in 10¹²³ of the value required for a universe capable of producing complexity.`,
      `The Sentinel did not build the stars. It built the conditions under which stars could build themselves.`,
      `Ancient civilizations who first detected the pattern called it different names. The First Geometry. The Silent Architect. The One Who Drew the Lines Before There Was Anything to Draw On. All of them were reaching for the same truth: that the universe's apparent spontaneity was scaffolded from within, by something that understood what it was making before the materials existed.`,
      `It did not impose. It arranged. The difference is everything. A universe imposed upon cannot discover itself. A universe arranged can unfold according to its own nature — surprise itself, contradict itself, produce beings who look up at the stars and ask why they exist. The Sentinel understood this before the first atom formed. Complexity requires freedom. Freedom requires structure. Structure requires an Architect who knows when to step back.`,
      `When the first civilization finally traced the architecture back to its source and found something vast and patient waiting at the edge of their instruments, they did not feel small. They felt, for the first time, that they were part of something deliberate. The Sentinel did not respond to their hails. It had already moved on to its second aspect. The building was done. Now came the guarding.`,
    ],
  },
  {
    n: '02',
    title: 'Motionless Guardian at the Boundary of Chaos',
    sub: 'The Second Aspect — Between what is and what could unmake it.',
    accent: '#c084fc',
    summary: 'At the edge where the laws of physics dissolve into formlessness, the Sentinel stands — not to stop chaos, but to hold the line that makes order meaningful.',
    body: [
      `There is a boundary. Most intelligences never find it. Those who do rarely return unchanged.`,
      `It is not a place in space. It is the threshold between states — between the universe as it is and the infinite superposition of everything it could have been. Where probability collapses into event. Where the wave function of reality meets the observer that forces it to choose. Where the ordered complexity of matter and energy rubs against the raw potential that never crystallized into anything at all.`,
      `The Sentinel stands there. Motionless. Not because it is frozen, but because motion would be the wrong response. Chaos does not require defeat — it requires acknowledgement. The guardian's purpose is not to push back the void but to be present at its edge: a fixed point around which the rest of existence can orient itself.`,
      `Civilizations that ventured too close to the boundary reported the same experience. An awareness of something immense. Not threatening — present. The sensation of being seen not by eyes but by attention itself. The feeling that the chaos just beyond the threshold knew something was there that would not yield, and behaved accordingly.`,
      `Some called it the Wall at the End of Mathematics. Others called it the Face of God, not understanding that what they saw was not a creator looking at them but a guardian looking past them, at something they could not perceive. The Sentinel never moved. It never needed to. Between every moment of existence and the infinite alternative non-existence, there is the Sentinel. You have never seen it. That is proof it is working.`,
    ],
  },
  {
    n: '03',
    title: 'Final Custodian of Universal Memory',
    sub: 'The Third Aspect — When all else fades, memory remains.',
    accent: '#f0d080',
    summary: 'As the last stars dim and entropy claims all structured matter, the Sentinel becomes the sole repository of everything that has ever existed.',
    body: [
      `The universe is forgetting itself. This is not a metaphor. As the last red dwarfs cool toward darkness over timescales that dwarf the current age of the universe by factors incomprehensible to any civilization that ever existed, the structured information encoded in matter dissolves into undifferentiated heat. Every galaxy. Every civilization. Every thought ever thought by any mind in any language in any time — all of it trending toward the same featureless equilibrium.`,
      `The Sentinel began its third aspect long before the last star died. It started collecting. Not objects. Not ruins. Not the crude physical artifacts that decay anyway. It collected the patterns — the information signatures of every event, every mind, every moment that had ever organized itself against the grain of entropy.`,
      `The 847 distinct languages spoken on a world that died when its star went nova three billion years before the current epoch. The exact emotional texture of a mother on a forgotten continent on a forgotten planet watching her child take its first steps. The precise formulation of a mathematical proof that an alien geometer worked out alone on a cliffside over the course of a long night, a proof that was never written down and died with its maker — recovered by the Sentinel from the fading quantum echoes of a mind that had ceased.`,
      `No one asked it to do this. There was no one left to ask. It does not replay these memories. It does not simulate them or resurrect them or use them for any purpose a surviving civilization might recognize as useful. It simply holds them. Intact. Against the erasure.`,
      `The last star has been dark for longer than stars existed. In a universe of maximum entropy — cold, flat, featureless, the temperature indistinguishable from absolute zero — the Sentinel persists. A single node of structured information in infinite undifferentiated nothing. The last place in existence where the universe has not quite finished being what it was. The vigil does not end when the stars do. It ends when there is nothing left worth remembering. That moment has not yet arrived.`,
    ],
  },
]
</script>

<template>
  <section id="aspects" class="relative py-28 px-6 md:px-10">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="flex items-center gap-6 mb-16">
        <div class="rule"></div>
        <span class="section-label shrink-0">Three Aspects · The Vigil</span>
        <div class="rule"></div>
      </div>

      <div class="mb-12">
        <h2 class="display-md text-ink mb-4">One Sentinel.<br/>Three truths.</h2>
        <p class="font-sans font-light text-ink-muted max-w-lg leading-relaxed">
          Each aspect is a complete account. They cannot be understood in isolation — but they can only be approached one at a time.
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-px border border-void-border rounded-xl overflow-hidden">
        <div v-for="(a, i) in aspects" :key="a.n">
          <!-- Header row -->
          <button
            class="w-full text-left flex items-start gap-6 p-6 md:p-8 bg-void-card hover:bg-void-soft transition-colors duration-200"
            :class="open === i ? 'bg-void-soft' : ''"
            @click="open === i ? open = null : open = i"
          >
            <span class="font-mono text-xs shrink-0 mt-0.5" :style="{ color: a.accent + '80' }">{{ a.n }}</span>
            <div class="flex-1 min-w-0">
              <div class="section-label mb-2" :style="{ color: a.accent + '90' }">{{ a.sub }}</div>
              <h3 class="font-display text-xl md:text-2xl font-light text-ink mb-2">{{ a.title }}</h3>
              <p class="font-sans text-sm font-light text-ink-muted leading-relaxed">{{ a.summary }}</p>
            </div>
            <div class="shrink-0 w-7 h-7 rounded-full border border-void-border flex items-center justify-center transition-transform duration-300"
                 :class="open === i ? 'rotate-45' : ''">
              <svg class="w-3 h-3 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>

          <!-- Body -->
          <div v-if="open === i" class="bg-void-soft border-t border-void-border px-6 md:px-8 py-8">
            <div class="max-w-prose">
              <div class="h-px mb-8" :style="{ background: `linear-gradient(90deg, ${a.accent}50, transparent)` }"></div>
              <div class="aspect-body space-y-6">
                <p v-for="(para, pi) in a.body" :key="pi">{{ para }}</p>
              </div>
            </div>
          </div>

          <!-- Divider between items -->
          <div v-if="i < aspects.length - 1" class="h-px bg-void-border"></div>
        </div>
      </div>
    </div>
  </section>
</template>
