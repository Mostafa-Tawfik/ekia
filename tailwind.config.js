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
        fieldDarb: '#665029',
        earthYellow: '#CFA364',
        blanchedAlmond: '#FFECCB',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}