const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        n: ['hina', 'serif'],
        serif: ['Roboto Slab', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px',
      },
      colors: {
        n: {
          charcoalBlue: '#3e4f68',
          lBlue: '#7bfafc',
          green2: '#062f36',
          green: '#99e550',
          black: '#0c0f14',
          brown: '#302929',
          pink: '#ce0502',
        },
      },
      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
