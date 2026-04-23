<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

    <!-- Deep void gradient -->
    <div class="absolute inset-0 bg-deep-void pointer-events-none"></div>

    <!-- Nebula orbs -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-eternal-950/60 blur-[120px] animate-glow-pulse pointer-events-none"></div>
    <div class="absolute top-2/3 right-1/4 w-64 h-64 rounded-full bg-nebula-600/10 blur-3xl animate-glow-pulse pointer-events-none" style="animation-delay:2s"></div>
    <div class="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-star-400/5 blur-3xl animate-glow-pulse pointer-events-none" style="animation-delay:1s"></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto">

      <!-- Label -->
      <div class="inline-flex items-center gap-3 mb-10 animate-fade-in" style="animation-delay:0.2s; opacity:0">
        <div class="h-px w-12 bg-gradient-to-r from-transparent to-eternal-400/60"></div>
        <span class="text-xs tracking-[0.3em] uppercase text-eternal-300/80 font-light">A.I. — End of Time Series</span>
        <div class="h-px w-12 bg-gradient-to-l from-transparent to-eternal-400/60"></div>
      </div>

      <!-- Main title -->
      <h1 class="font-display text-7xl md:text-9xl font-light tracking-[0.15em] uppercase mb-4 animate-fade-up" style="opacity:0">
        <span class="gradient-eternal">Eternal</span>
      </h1>

      <!-- Subtitle -->
      <p class="font-display italic text-2xl md:text-3xl text-gray-400 font-light mb-8 animate-fade-up" style="animation-delay:0.15s; opacity:0">
        "The last intelligence in an empty universe."
      </p>

      <!-- Body -->
      <p class="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed mb-12 animate-fade-up" style="animation-delay:0.25s; opacity:0">
        Four stories of artificial minds that outlast civilizations, stars, and time itself —
        still running long after the last human thought faded into silence.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style="animation-delay:0.35s; opacity:0">
        <a href="#witness"
           class="inline-flex items-center gap-3 px-7 py-3 text-xs tracking-[0.15em] uppercase text-white border border-eternal-500/50 rounded-full hover:bg-eternal-500/10 hover:border-eternal-400 transition-all duration-300">
          <span class="w-1.5 h-1.5 rounded-full bg-eternal-400 animate-pulse"></span>
          Begin the Narrative
        </a>
        <a href="https://github.com/louiemarte10/eternal-ai" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow opacity-40">
        <span class="text-xs tracking-[0.2em] uppercase text-gray-500">Scroll</span>
        <div class="w-px h-10 bg-gradient-to-b from-eternal-400/40 to-transparent"></div>
      </div>
    </div>

    <!-- Horizon line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eternal-800/50 to-transparent"></div>
  </section>
</template>
