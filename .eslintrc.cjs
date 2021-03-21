module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier", // Must always come last, since it disables other rules
  ],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  rules: {
    "react/prop-types": "off",

    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["sites/*/gatsby-browser.js"],
      env: {
        browser: true,
      },
      globals: {
        ___loader: false,
        ___emitter: false,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier", // Must always come last, since it disables other rules
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./sites/*/tsconfig.json"],
      },
      rules: {
        "react/prop-types": "off",

        // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
