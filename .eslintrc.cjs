module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'google',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['emails.json'],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
  },
};
