const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'tiquets-section': "url('/images/background.png')",
        'divider-1': "url('/images/concert.jpeg')",
        'divider-2': "url('/images/fme_1.jpeg')",
        'divider-3': "url('/images/fme_2.jpeg')",
      }),
      fontFamily: {
        heading: ['GeometosRounded', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'fme-red': 'rgb(193, 73, 71)',
        'fme-green': 'rgb(57, 131, 110)',
        'fme-yellow': 'rgb(229, 197, 107)',
        'fme-black': 'rgb(35,35,35)',
      },
      animation: {
        blob: 'blob 9s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -25px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-10px, 10px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
