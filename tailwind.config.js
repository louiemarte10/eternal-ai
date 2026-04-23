/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#e8e8f0', muted: '#888899', faint: '#44445a', dim: '#22223a' },
        void:   { DEFAULT: '#080810', soft: '#0e0e1c', card: '#111120', border: '#1e1e32' },
        vigil:  { 400: '#9494e8', 500: '#7070d0', 600: '#5050b8', glow: 'rgba(112,112,208,0.15)' },
        star:   { warm: '#f0d080', cool: '#c0c8ff' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      maxWidth: { prose: '68ch', wide: '88ch' },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'glow-slow':  'glowSlow 5s ease-in-out infinite',
        'twinkle':    'twinkle 4s ease-in-out infinite',
        'spin-slow':  'spin 90s linear infinite',
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        glowSlow: { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        twinkle:  { '0%,100%': { opacity: '0.15' }, '50%': { opacity: '0.9' } },
      },
    },
  },
  plugins: [],
}
