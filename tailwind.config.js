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
      maxWidth: {
        'xmd': '400px',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'roboto' : ["'Roboto'", 'sans-serif'],
        'inter' : ["'Inter'" ,'sans-serif'],
    },
    lineHeight: {
      '11': '44px',
      '12': '48px',
      '13': '52px'
    }
    },
  },
  plugins: [],
}

