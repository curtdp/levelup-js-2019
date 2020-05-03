var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  configureWebpack: {
    plugins: [
      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '95-100',
        },
      }),
    ],
  },
};
