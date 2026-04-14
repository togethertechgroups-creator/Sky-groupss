/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4A017',
        'gold-light': '#F0C842',
        'gold-dark': '#A07810',
        orange: '#E8640A',
        'orange-dark': '#B84E08',
        charcoal: '#1A1A1A',
        'grey-text': '#4A4A4A',
        'off-white': '#FAF8F4',
        border: '#E8E0D0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        label: ['"Montserrat"', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.125rem', // slightly squared edges
      }
    },
  },
  plugins: [],
}
