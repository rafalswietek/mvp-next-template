module.exports = {
  extends: [
    '@rafalswietek/eslint-config-next',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@root', './'],
          ['@clients', './src/clients'],
          ['@contexts', './src/contexts'],
          ['@contextProviders', './src/contextProviders'],
          ['@reducers', './src/reducers'],
          ['@hooks', './src/hooks'],
          ['@layouts', './src/layouts'],
          ['@components', './src/components'],
          ['@consts', './src/consts'],
          ['@assets', './src/assets'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
