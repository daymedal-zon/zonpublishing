/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rainforest: {
          50: '#E6F5F0',
          100: '#C2E8DD',
          200: '#8DD4BC',
          300: '#5CBF9B',
          400: '#2DA67D',
          500: '#007F5F',
          600: '#006B4F',
          700: '#005540',
          800: '#004030',
          900: '#002B20',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C4C4C4',
          300: '#A0A0A0',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#333333',
          700: '#262626',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        silver: {
          50: '#FAFBFC',
          100: '#F0F2F4',
          200: '#E2E5E9',
          300: '#D1D5DB',
          400: '#BFC3C9',
          500: '#A8AEB6',
          600: '#8A909A',
          700: '#6B7280',
          800: '#525962',
          900: '#3D434B',
        },
        neon: {
          300: '#A5FF7D',
          400: '#5FFF3D',
          500: '#39FF14',
          600: '#2BD600',
          700: '#22B300',
        },
        success: {
          50: '#E6F5F0',
          100: '#C2E8DD',
          500: '#007F5F',
          600: '#006B4F',
          700: '#005540',
        },
        warning: {
          50: '#FFF8E6',
          100: '#FFEDB8',
          500: '#E8B500',
          600: '#C49A00',
        },
        error: {
          50: '#FEE9E9',
          100: '#FDC8C8',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
        },
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
