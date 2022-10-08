module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: [],
  extends: [],
  overrides: [
    // TypeScript
    {
      env: {
        es2021: true,
        node: true
      },
      files: ["*.tsx", "*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {}
    },
    // Javascript
    {
      env: {
        es2021: true,
        node: true
      },
      files: ["*.jsx", "*.js", "*.mjs", "*.cjs", "*.json"],
      plugins: [],
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {}
    },
    // CoffeeScript
    // {
    //   files: ["*.coffee"],
    //   parser: "eslint-plugin-coffee",
    //   plugins: ["coffee"],
    //   extends: ["plugin:coffee/eslint-recommended", "plugin/coffee:disable-incompatible"],
    //   parserOptions: {
    //     ecmaVersion: "latest",
    //     sourceType: "module"
    //   },
    //   rules: {}
    // },
    // Test Files
    {
      env: {
        es2021: true,
        node: true,
        "jest/globals": true
      },
      files: ["*.Test.js", "*.Test.ts", "*.Test.mjs", "*.Test.coffee"],
      plugins: ["jest"],
      extends: ["eslint:recommended", "plugin:jest/recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {}
    }
  ]
}
