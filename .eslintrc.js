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
    'eslint-plugin-prettier',
    'eslint-plugin-storybook',
    'simple-import-sort',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended',"prettier"],
  root: true,
  rules: {
    'prettier/prettier': 'error',
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
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^@?\\w'],
          ['^\\u0000'],
          [
            '^(app|components|containers|enums|constants|custom-hooks|fonts|images|helpers|pdf|propTypes|services|sagas|sass|test-fixtures|test-helpers|types|setupTests)(/.*|$)',
          ],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.css$'],
        ],
      },
    ],
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
