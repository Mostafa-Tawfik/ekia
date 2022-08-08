/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        goldenBrown: '#966F33',
        bdazzledBlue: '#335B96',
        darkLava: '#504538',
        earthYellow: '#CFA364',
        blanchedAlmond: '#FFECCB',
      },
    },
  },
  plugins: [],
}