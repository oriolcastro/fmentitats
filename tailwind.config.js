module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'divider-1-2023': "url('/static/images/2023/background_1.webp')",
        'divider-2-2023': "url('/static/images/2023/background_2.webp')",
        'divider-3-2023': "url('/static/images/2023/background_3.webp')",
        'divider-4-2023': "url('/static/images/2023/background_4.webp')",
        'divider-1': "url('/static/images/background_1.webp')",
        'divider-2': "url('/static/images/background_2.webp')",
        'divider-3': "url('/static/images/background_3.webp')",
        'divider-4': "url('/static/images/background_4.webp')",
      }),
      fontFamily: {
        heading: ['Buchery'],
        jost: ['Jost'],
        artega: ['Artega'],
      },
      colors: {
        'fme-red': 'hsl(2  63  55 / 100)',
        'fme-green': 'hsl(155 57 36 / 100)',
        'fme-yellow': 'hsl(38 94 62 / 100)',
        'fme-black': 'rgb(35,35,35)',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
