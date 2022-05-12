/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2022-04-26 14:44:08
 * @LastEditors: taoman
 * @LastEditTime: 2022-04-26 16:01:09
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
    // "plugin:prettier/recommended",
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 0,
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'vue/multi-word-component-names': 'off'
  }
}
