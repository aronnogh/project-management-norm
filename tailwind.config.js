/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f7f6f4',
          100: '#edebe7',
          200: '#d6d2cb',
          300: '#b3aca1',
          400: '#8b8478',
          500: '#6e6759',
          600: '#564f44',
          700: '#3f3a32',
          800: '#28241f',
          900: '#1a1814',
          950: '#121110',
          960: '#0d0c0a',
        },
        gold: {
          50: '#fdf8ee',
          100: '#faedd3',
          200: '#f4d9a5',
          300: '#edbf6e',
          400: '#e6a945',
          500: '#d9932a',
          600: '#bc7420',
          700: '#95551d',
          800: '#7a441e',
          900: '#67391e',
        },
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      animation: {
        'float-slow': 'float 16s ease-in-out infinite',
        'float-slower': 'float 24s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -50px) scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
