/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#070709',
          dark: '#0c0d12',
          card: '#12141a',
          border: '#1f242e',
          muted: '#7e8799',
          green: '#22c55e',
        },
        accent: {
          gold: '#f2ca50',
          goldLight: '#ffe088',
          goldMuted: '#d4af37',
        },
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse-slow': 'spin-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 2s infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
};
