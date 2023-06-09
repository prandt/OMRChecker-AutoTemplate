/* eslint-env node */
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  overrides: [
    {
      files: [
        "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-undef": "off",
    "indent": ["error", 2],
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
};
