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

    // Improve readability
    quotes: ["error", "double", { avoidEscape: true }],

    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
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
