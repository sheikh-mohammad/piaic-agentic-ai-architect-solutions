import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // FORMA v2 — Iridescent Dark
        ink: {
          DEFAULT: '#0A0A12',
          soft: '#14141F',
          dark: '#06060B',
        },
        gold: {
          DEFAULT: '#F5B841',
          light: '#FFD98A',
          deep: '#D4AF37',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
        },
        teal: {
          DEFAULT: '#2DD4BF',
        },
        coral: {
          DEFAULT: '#FB7185',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cinzel', 'serif'],
        body: ['var(--font-body)', 'Josefin Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      maxWidth: {
        container: '82rem',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(245,184,65,0.55)',
        'glow-violet': '0 0 40px -8px rgba(139,92,246,0.6)',
        'glow-teal': '0 0 40px -8px rgba(45,212,191,0.5)',
        'glow-lg': '0 18px 70px -18px rgba(139,92,246,0.55)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '200% 50%' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        scrollCue: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(22px)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 14s linear infinite',
        'scroll-cue': 'scrollCue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
