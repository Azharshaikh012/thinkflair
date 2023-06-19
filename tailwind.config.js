/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      smallwide: '0.01em',
      smallwider: '0.02em',
      wide: '.025em',
      midwide: '.03em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
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

