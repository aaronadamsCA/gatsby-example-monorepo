module.exports = {
  flags: {
    FAST_DEV: true,
  },
  jsxRuntime: "automatic",
  jsxImportSource: "theme-ui",
  siteMetadata: {
    title: "Gatsby Example Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-tsconfig-paths",
  ],
};
