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
      rules: {}
    },
    // Javascript
    {
      env: {
        es2021: true,
        node: true,
        "jest/globals": true
      },
      files: ["*.jsx", "*.js", "*.mjs", "*.cjs", "*.json"],
      plugins: ["jest"],
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {}
    }
    // CoffeeScript
    // {
    // env: {
    //   es2021: true,
    //   node: true,
    //   "jest/globals": true
    // },
    // files: ["*.coffee"],
    //   parser: "eslint-plugin-coffee",
    //   plugins: ["coffee"],
    //   extends: ["plugin:coffee/eslint-recommended", "plugin/coffee:disable-incompatible"],
    //   parserOptions: {
    //     ecmaVersion: "latest",
    //     sourceType: "module"
    //   },
    //   rules: {}
    // },
    // Test Files //! Disabled due to too much linting because they're not Jest specific layouts
    //TODO - Need to look at this again when everything is working OK
    // {
    //   env: {
    //     es2021: true,
    //     node: true,
    //     "jest/globals": true
    //   },
    //   files: ["*.Test.js", "*.Test.ts", "*.Test.mjs", "*.Test.coffee"],
    //   plugins: ["jest"],
    //   extends: ["eslint:recommended", "plugin:jest/recommended"],
    //   parserOptions: {
    //     ecmaVersion: "latest",
    //     sourceType: "module"
    //   },
    //   rules: {}
    // }
  ]
}
