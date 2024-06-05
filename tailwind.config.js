/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.tsx'],
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
        'hero-1': "url('/static/images/hero_bg_1.webp')",
        'hero-2': "url('/static/images/hero_bg_2.webp')",
        'hero-3': "url('/static/images/hero_bg_3.webp')",
        'hero-4': "url('/static/images/hero_bg_4.webp')",
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
        500: '500',
        1000: '1000',
      },
      animation: {
        fade: 'fade 16s ease-in-out infinite',
      },
      transitionDelay: {
        '4s': '4000s',
      },
      keyframes: {
        fade: {
          '00.00%': { opacity: 0, 'z-index': -10 },
          '06.25%': { opacity: 1, 'z-index': -10 },
          '31.25%': { opacity: 1, 'z-index': -12 },
          '37.50%': { opacity: 0, 'z-index': -14 },
          '100.0%': { opacity: 0, 'z-index': -16 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
