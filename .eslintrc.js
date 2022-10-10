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
      plugins: ["jest", "regexp", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:regexp/recommended"
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
      files: ["*.jsx", "*.js", "*.mjs", "*.cjs"],
      plugins: ["jest", "regexp"],
      extends: ["eslint:recommended", "plugin:regexp/recommended"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: { "no-extra-semi": 0, "no-fallthrough": 0 }
    },
    // Markdown
    {
      env: {
        es2021: true,
        node: true
      },
      files: ["*.md"],
      parser: "eslint-plugin-markdown",
      plugins: ["markdown"],
      extends: ["plugin:markdown/recommended"],
      processor: "markdown/markdown",
      parserOptions: {},
      rules: {}
    },
    // JSON
    {
      env: {
        es2021: true,
        node: true
      },
      files: ["*.json"],
      parser: "eslint-plugin-json",
      plugins: ["json"],
      extends: ["plugin:json/recommended"],
      parserOptions: {},
      rules: {}
    }
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
