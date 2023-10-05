module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/semi': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
};
