require('@uniswap/eslint-config/load');

module.exports = {
  extends: ['@uniswap/eslint-config/react'],

  env: {
    browser: true,
  },

  plugins: ['react', 'react-hooks'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-empty': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      'error',
      {
        unnamedComponents: ['function-expression', 'arrow-function'],
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/no-unused-modules': 'off',
        '@typescript-eslint/no-restricted-imports': 'off',
      },
    },
  ],
};
