/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FAF9F7',
        surface: '#F2F0ED',
        border: '#E5E3DF',
        textPrimary: '#111111',
        textSecondary: '#555555',
        textMuted: '#737373',
        cta: '#111111',
        ctaText: '#FFFFFF',
        heroOverlay: '#0A0A0A',
        accentSoft: '#C5D0F5',
      },
      opacity: {
        15: '0.15',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      boxShadow: {
        glassDark: '0 8px 32px rgba(0, 0, 0, 0.4)',
        cardHover: '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(180deg, #C5D0F5 0%, #DAE2FA 40%, #EBF0FC 70%, #F2F4FC 100%)',
        'hero-glow': 'radial-gradient(ellipse at 80% 20%, rgba(197, 208, 245, 0.16), transparent 55%)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        grotesk: ['"Space Grotesk"', '"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
