import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0B0B',
        panel: '#111111',
        muted: '#A1A1AA',
        stroke: 'rgba(255,255,255,0.08)',
        accent: '#8B5CF6',
        accentBlue: '#4F46E5',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.35)',
        glow: '0 0 80px rgba(99, 102, 241, 0.25)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(99, 102, 241, 0.22), transparent 34%), radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.18), transparent 24%)',
        'card-glow':
          'linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(56, 189, 248, 0.06))',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
