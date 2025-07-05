/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        ui: {
          light: '#ffffff',
          dark: '#0d0d0d',
          card: {
            light: '#ffffff',
            dark: '#1a1a1a'
          },
          border: {
            light: '#f0f0f0',
            dark: '#2a2a2a'
          }
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 6px 16px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 24px 0 rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 12px 32px 0 rgba(0, 0, 0, 0.05)',
        'dark-soft-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
        'dark-soft': '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
        'dark-soft-md': '0 6px 16px 0 rgba(0, 0, 0, 0.2)',
        'dark-soft-lg': '0 8px 24px 0 rgba(0, 0, 0, 0.2)',
        'dark-soft-xl': '0 12px 32px 0 rgba(0, 0, 0, 0.2)',
        'ios': '0 8px 32px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'ios-md': '0 12px 42px rgba(0, 0, 0, 0.08), 0 2px 3px rgba(0, 0, 0, 0.04)',
        'ios-lg': '0 16px 64px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'ios-dark': '0 8px 32px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
        'ios-dark-md': '0 12px 42px rgba(0, 0, 0, 0.35), 0 2px 3px rgba(0, 0, 0, 0.2)',
        'ios-dark-lg': '0 16px 64px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
        'slideInRight': 'slideInRight 0.5s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'oneui': 'cubic-bezier(0.33, 0, 0.67, 1)',
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [],
}
