module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    "react/jsx-one-expression-per-line": 0,
    "react/state-in-constructor": 0,
    'react/require-default-props': 0,
    'no-console': ["error", { allow: ["warn", "error"] }],
    'no-alert': 0
  },
};
