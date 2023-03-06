module.exports = {
  env: {
    es2021: true,
    node: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  extends: [],
  overrides: [
    // TypeScript
    {
      env: {
        es2021: true,
        node: true,
        "jest/globals": true
      },
      files: ["*.tsx", "*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["jest", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: { "no-fallthrough": 0 }
    },
    // Javascript
    {
      env: {
        es2021: true,
        node: true,
        "jest/globals": true
      },
      files: ["*.jsx", "*.js"],
      plugins: ["jest"],
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: { "no-extra-semi": 0, "no-fallthrough": 0 }
    }
  ]
}
