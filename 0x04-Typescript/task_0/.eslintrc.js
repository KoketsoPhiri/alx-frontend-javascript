module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended',              // Uses the recommended rules from ESLint
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2020,                 // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',              // Allows for the use of imports
  },
  rules: {
    // You can customize or override rules here.
    // Example: disable 'no-unused-vars' for JavaScript and enable it for TypeScript with a warning
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
};