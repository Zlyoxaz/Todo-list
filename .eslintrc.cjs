module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'indent': [
    // 	'error',
    // 	'tab'
    // ],
    // 'linebreak-style': ['warn', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    // 'no-console': 'warn'
  },
};
