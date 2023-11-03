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
          // Side effect imports
          ['^\\u0000'],
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react$', '^@?\\w'],
          // Internal imports. This package doesn't manage absolute imports for now
          [
            '^(app|components|containers|enums|constants|custom-hooks|fonts|images|helpers|pdf|propTypes|services|sagas|sass|test-fixtures|test-helpers|types|setupTests)(/.*|$)',
          ],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
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
