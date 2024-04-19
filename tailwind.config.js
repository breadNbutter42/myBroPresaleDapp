const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Pixelify Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-purple': 'var(--clr-purple)',
        'brand-pink': 'var(--clr-pink)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'navajoWhite': 'var(--navajo-White)',
        'browner' : 'var(--brown-er)',
        'brand-background': 'var(--clr-background)'
      },
      animation: {
        'pulse-slow': 'pulse 10s linear infinite'
      }
    }
  },
  plugins: []
}
