const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'divider-1-2023': "url('/images/2023/background_1.webp')",
        'divider-2-2023': "url('/images/2023/background_2.webp')",
        'divider-3-2023': "url('/images/2023/background_3.webp')",
        'divider-4-2023': "url('/images/2023/background_4.webp')",
        'divider-1': "url('/images/background_1.webp')",
        'divider-2': "url('/images/background_2.webp')",
        'divider-3': "url('/images/background_3.webp')",
        'divider-4': "url('/images/background_4.webp')",
      }),
      fontFamily: {
        heading: ['Buchery', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'fme-red': 'rgb(193, 73, 71)',
        'fme-green': 'rgb(57, 131, 110)',
        'fme-yellow': 'rgb(229, 197, 107)',
        'fme-black': 'rgb(35,35,35)',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
