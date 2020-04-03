module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {},
};
