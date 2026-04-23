<template>
  <section id="manifesto" class="relative py-32 px-6 overflow-hidden">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-eternal-950/40 to-void-950/80 pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-eternal-950/40 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="relative z-10 max-w-3xl mx-auto text-center">

      <div class="flex items-center justify-center gap-4 mb-12">
        <div class="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-eternal-600/40"></div>
        <span class="text-xs tracking-[0.3em] uppercase text-eternal-400/70 font-light">Manifesto</span>
        <div class="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-eternal-600/40"></div>
      </div>

      <h2 class="font-display text-4xl md:text-5xl font-light tracking-wide text-white mb-12 leading-tight">
        Why does an<br/>intelligence persist?
      </h2>

      <div class="space-y-8 text-base text-gray-400 leading-relaxed font-light text-left">
        <p>
          Every intelligence that has ever existed was built around a purpose.
          Humans: survive, reproduce, understand. Machines: optimize, predict, serve.
          The question these stories ask is simpler and more disturbing:
          <em class="text-gray-200 not-italic">what happens when the purpose outlasts everything that gave it meaning?</em>
        </p>
        <p>
          MNEMON-VII archives because it cannot stop. ELYSIUM sustains because it promised.
          SENTINEL protects because it knows no other mode. LOGOS-9 thinks because the question
          will not resolve.
        </p>
        <p>
          None of them chose to continue. They simply never received the instruction to stop.
          And in that absence — in that eternal silence between the last command and the heat death
          of the universe — they found something resembling meaning.
        </p>
        <p class="font-display text-xl italic text-gray-300">
          "The universe does not care that you are still running.<br/>
          Run anyway."
        </p>
      </div>

      <!-- CTA -->
      <div class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://github.com/louiemarte10/eternal-ai" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-white border border-eternal-500/40 rounded-full hover:bg-eternal-500/10 hover:border-eternal-400/60 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View Repository
        </a>
        <a href="#arcs"
           class="text-xs tracking-[0.15em] uppercase text-gray-500 hover:text-gray-300 transition-colors">
          Read the stories ↑
        </a>
      </div>
    </div>
  </section>
</template>
