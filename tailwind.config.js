/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1013',
          900: '#060A0C',
          800: '#0A1013',
          700: '#101A1F',
          600: '#182831',
        },
        floe: {
          red: '#E01B2E',
          redDark: '#B4111F',
          ice: '#EAF7FB',
          mist: '#CFEAF3',
          glacier: '#8FCBE0',
          deep: '#2E6E88',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        wordmark: ['"Poppins"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) scale(var(--s,1))', opacity: '0' },
          '10%': { opacity: 'var(--o, 0.6)' },
          '90%': { opacity: 'var(--o, 0.6)' },
          '100%': { transform: 'translateY(-120vh) scale(var(--s,1))', opacity: '0' },
        },
        glitch1: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0,0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-3px,1px)' },
          '40%': { clipPath: 'inset(60% 0 5% 0)', transform: 'translate(3px,-1px)' },
          '60%': { clipPath: 'inset(10% 0 70% 0)', transform: 'translate(-2px,2px)' },
          '80%': { clipPath: 'inset(75% 0 5% 0)', transform: 'translate(2px,-2px)' },
        },
        glitch2: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0,0)' },
          '20%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(3px,-1px)' },
          '40%': { clipPath: 'inset(10% 0 65% 0)', transform: 'translate(-3px,1px)' },
          '60%': { clipPath: 'inset(70% 0 8% 0)', transform: 'translate(2px,-2px)' },
          '80%': { clipPath: 'inset(5% 0 80% 0)', transform: 'translate(-2px,2px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r0, -3deg))' },
          '50%': { transform: 'translateY(-22px) rotate(var(--r1, 3deg))' },
        },
        freezeCrack: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-6px,2px)' },
          '40%': { transform: 'translate(5px,-3px)' },
          '60%': { transform: 'translate(-4px,3px)' },
          '80%': { transform: 'translate(3px,-2px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise linear infinite',
        glitch1: 'glitch1 0.6s steps(2,end) 3',
        glitch2: 'glitch2 0.6s steps(2,end) 3',
        shimmer: 'shimmer 3s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        freezeCrack: 'freezeCrack 0.4s ease-out forwards',
        shake: 'shake 0.5s ease-in-out',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      transitionTimingFunction: {
        floe: 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
}
