/* eslint-env node */

module.exports = (ctx) => {
  const { file: { basename: CURRENT_FILE_BASE_NAME, dirname: fileDirName } } = ctx;

  return {
    plugins: {
      // ⚠️ Order matters! PostCSS will run plugins in the order listed.
      stylelint: {},

      'postcss-import': {
        root: fileDirName
      },

      'postcss-cssnext': {
        features: {
          customProperties: {
            preserve: CURRENT_FILE_BASE_NAME !== 'index.css'
          }
        }
      },

      // 🔑 Set `process.env.NODE_ENV` to "production" to create
      // a minified production build
      cssnano: ctx.env === 'production' ? {} : false,

      'postcss-reporter': {}
    }
  };
};
