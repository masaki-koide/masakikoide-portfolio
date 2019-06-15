module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'xo',
    'xo-react',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      }
    ],
  },
}
