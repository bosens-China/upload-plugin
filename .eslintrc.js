module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['prettier'],
  rules: {
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
  },
};
