/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'm-md': { 'max': '767px' },
        'm-sm': { 'max': '639px' },
        'm-xs': { 'max': '479px' },
        'xs': '480px',
      }
    },
  },
  plugins: [],
}

