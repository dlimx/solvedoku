const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  eslint: {
    enable: true,
    mode: ESLINT_MODES.file,
  },
  webpack: {
    plugins: {
      remove: ['ESLintWebpackPlugin'],
    },
  },
};
