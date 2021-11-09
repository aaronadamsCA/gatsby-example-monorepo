import type { Theme } from "theme-ui";

export const theme: Theme = {
  layout: {
    container: {
      maxWidth: "64rem",
      px: 3,
    },
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#609",
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif',
    heading: "inherit",
  },
  text: {
    heading: {
      my: 3,
    },
    paragraph: {
      mb: 3,
    },
  },
  styles: {
    root: {
      bg: "background",
      color: "text",
      fontFamily: "body",
      fontSize: "100%",
    },
    a: {
      color: "primary",
      ":hover": {
        color: "secondary",
      },
    },
  },
};
