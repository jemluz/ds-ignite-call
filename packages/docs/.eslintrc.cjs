module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', '@ignite-ui/eslint-config'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
