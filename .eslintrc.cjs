module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier", // Disables conflicting rules in above configs
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  rules: {
    // Enforce best practices
    "consistent-return": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-implicit-globals": "error",
    "import/extensions": ["error", "never", { json: "always" }],
    "import/no-absolute-path": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-relative-packages": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    // Improve readability
    quotes: ["warn", "double", { avoidEscape: true }],
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "warn",
  },
  overrides: [
    {
      // Lint all possible ES/TS files, not just `.js` files
      files: ["*.cjs", "*.js", "*.jsx", "*.mjs", "*.ts", "*.tsx"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        // This ruleset is very slow, you may want to run it at commit time only
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./packages/*/tsconfig.json"],
      },
      rules: {
        // Enforce best practices
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter",
          },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true },
        ],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-optional-chain": "error",

        // Improve readability
        "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
        "@typescript-eslint/consistent-indexed-object-style": "warn",
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/default-param-last": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/unified-signatures": "warn",
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./packages/*/tsconfig.json",
      },
      node: true,
    },
    react: {
      version: "detect",
    },
  },
};
