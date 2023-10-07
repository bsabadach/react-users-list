module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './integration/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    '@typescript-eslint',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  root: true,
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '_',
        'varsIgnorePattern': '_',
        'caughtErrorsIgnorePattern': '_',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [{
    'files': [
      './src/**/__stories/*.stories.tsx',
    ],
    plugins: [
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      '@typescript-eslint',
      'eslint-plugin-storybook',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:storybook/recommended',
    ],
  }],
}
