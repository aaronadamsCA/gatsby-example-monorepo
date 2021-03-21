import { Theme } from "theme-ui";

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
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
  },
  text: {
    heading: {
      my: 3,
    },
    default: {
      my: 3,
    },
  },
  styles: {
    root: {
      color: "text",
      bg: "background",
      fontFamily: "body",
      fontSize: "100%",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
  },
};
