/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eternal: {
          50:  '#f0f0ff',
          100: '#e0e0ff',
          200: '#c4c4ff',
          300: '#a0a0f8',
          400: '#8080f0',
          500: '#6060e0',
          600: '#4848c8',
          700: '#3434a8',
          800: '#242488',
          900: '#181868',
          950: '#0c0c40',
        },
        void: {
          900: '#05050f',
          950: '#020208',
        },
        star: {
          400: '#fde68a',
          500: '#fbbf24',
        },
        nebula: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'twinkle':       'twinkle 4s ease-in-out infinite',
        'drift':         'drift 20s linear infinite',
        'fade-up':       'fadeUp 0.8s ease-out forwards',
        'fade-in':       'fadeIn 1.2s ease-out forwards',
        'glow-pulse':    'glowPulse 4s ease-in-out infinite',
        'scan':          'scan 3s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'spin-slow':     'spin 60s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.3)' },
        },
        drift: {
          '0%':   { transform: 'translateX(0) translateY(0)' },
          '33%':  { transform: 'translateX(15px) translateY(-10px)' },
          '66%':  { transform: 'translateX(-10px) translateY(8px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '0.7' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
      },
      backgroundImage: {
        'star-field': "radial-gradient(ellipse at top, #1a1a3e 0%, #05050f 60%)",
        'deep-void':  "radial-gradient(ellipse at center, #0d0d2b 0%, #020208 100%)",
      },
    },
  },
  plugins: [],
}
