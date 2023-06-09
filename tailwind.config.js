/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors: {
        'dark-transparent': 'rgba(0, 0, 0, 0.6)',
      },
      screens: {
        'xs': '420px',
        // => @media (min-width: 420px) { ... }
        'xxs': '370px',
      },
    },
  },
  plugins: [],
}

