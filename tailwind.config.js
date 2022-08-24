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
      boxShadow: {
        primary: "0px 5px 15px rgb(207,163,100)",
        icon: "0px 0px 0px 8px rgb(207,163,100)",
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out 1.5',
        'spin-fast': 'spin 0.7s linear infinite',
        fade: 'fadeOut 2s ease-in-out',
        pulseFast: 'pulseFast 0.7s linear'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
        pulseFast: {
          '0%': { opacity: 1},
          '20%': { opacity: 0},
          '40%': { opacity: 1},
          '60%': { opacity: 0},
          '100%': { opacity: 1}
        }
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}