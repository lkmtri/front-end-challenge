module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    semi: ['error', 'never'],
    'react/forbid-prop-types': [1, { forbid: [] }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
