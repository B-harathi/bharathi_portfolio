/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary → grant-amber (the site's only primary accent)
        primary: {
          50: '#2A210F',
          100: '#372A13',
          200: '#5C4519',
          300: '#9C7424',
          400: '#E8A33D',
          500: '#E8A33D',
          600: '#D9922B',
          700: '#B87820',
          800: '#94601A',
          900: '#7A4F15',
        },
        // secondary → trace-indigo
        secondary: {
          50: '#1B1D2E',
          100: '#26294A',
          200: '#383C70',
          300: '#5255B0',
          400: '#6C6FF0',
          500: '#7A7DF2',
          600: '#5A5CE0',
          700: '#494BC6',
          800: '#3B3DA3',
          900: '#303183',
        },
        // accent → grant-amber
        accent: {
          50: '#2A210F',
          100: '#372A13',
          200: '#5C4519',
          300: '#9C7424',
          400: '#E8A33D',
          500: '#E8A33D',
          600: '#D9922B',
          700: '#B87820',
          800: '#94601A',
          900: '#7A4F15',
        },
        // purple → trace-indigo
        purple: {
          50: '#1C1D33',
          100: '#262848',
          200: '#3A3D6E',
          300: '#5255B0',
          400: '#6C6FF0',
          500: '#6C6FF0',
          600: '#5A5CE0',
          700: '#494BC6',
          800: '#3B3DA3',
          900: '#303183',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // gray → dark-mode-safe values so light-only utilities render dark
        gray: {
          50: '#121828',
          100: '#182035',
          200: '#2A3348',
          300: '#3A4660',
          400: '#8A93AC',
          500: '#8A93AC',
          600: '#9AA3BC',
          700: '#C7CEE0',
          800: '#E6EAF4',
          900: '#EDEFF5',
        }
      },
      fontFamily: {
        'primary': ['"General Sans"', 'system-ui', 'sans-serif'],
        'heading': ['Geist', 'system-ui', 'sans-serif'],
        'mono': ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px -12px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 20px rgba(232, 163, 61, 0.12)',
        'glow-lg': '0 0 40px rgba(232, 163, 61, 0.18)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'typing-cursor': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-up': 'scaleUp 0.4s ease-out forwards',
        'slide-from-left': 'slideFromLeft 0.6s ease-out forwards',
        'slide-from-right': 'slideFromRight 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 163, 61, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 163, 61, 0.3)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(135deg, rgba(232, 163, 61, 0.05) 0%, rgba(108, 111, 240, 0.05) 100%)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}