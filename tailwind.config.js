/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-dark': '#0B131E',
        'main-gray': '#202B3B',
        'secondary-gray': '#35465F'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      }
    },
  },
  plugins: [],
}