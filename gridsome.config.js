const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Shogun Ape Samurai Club | Train in the dojo with the bravest shogun, with unmissable
  strikes and razor edge hit area.
  `,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/logo.svg',
    touchicon: './src/logo.svg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: ['gridsome-plugin-robots', '@gridsome/plugin-sitemap'],
};
