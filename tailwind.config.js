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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
