const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'divider-1': "url('/images/background_1.jpeg')",
        'divider-2': "url('/images/background_2.jpeg')",
        'divider-3': "url('/images/background_3.jpeg')",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
