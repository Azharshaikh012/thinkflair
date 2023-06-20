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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '4xxl' :'2.5rem',
      '5mxl' :'2.8rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'dark-transparent': 'rgba(0, 0, 0, 0.6)',
        'nero' : '#1A1A1A'
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

