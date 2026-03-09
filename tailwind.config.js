/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'animate-flow-1',
    'animate-flow-2',
    'animate-flow-3',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#004d75',
          DEFAULT: '#00304a', // Default Prussian Blue
          dark: '#001a29',
        },
        'brand-gold': {
          DEFAULT: '#EABD23', // Core gold
          light: '#FFE58A',   // Bright highlight
          pale: '#EBE3B7',    // Creamy/Pale gold
        }
      },
    },
  },
  plugins: [],
};
