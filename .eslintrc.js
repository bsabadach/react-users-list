module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    '@typescript-eslint'
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "_",
        "varsIgnorePattern": "_",
        "caughtErrorsIgnorePattern": "_"
      }
    ]
  }
}
