import { alpha } from "@theme-ui/color";
import type { Theme } from "theme-ui";

export const theme: Theme = {
  colors: {
    background: "#FFFBFE",
    text: "#1C1B1F",
    primary: "#6750A4",
    secondary: "#7D5260",
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif',
    heading: "inherit",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  styles: {
    root: {
      bg: "background",
      color: "text",
      fontFamily: "body",
      fontSize: "100%",
    },
  },
  text: {
    heading: {
      marginBlock: 3,
    },
    paragraph: {
      marginBlockEnd: 3,
    },
  },
  layout: {
    container: {
      maxWidth: "64rem",
      paddingInline: 3,
    },
  },
  links: {
    default: {
      cursor: "pointer",
      color: "primary",
      textDecoration: "none",
      borderBottom: "1px solid",
      borderBottomColor: alpha("primary", 0.2),
      "&:hover, &:active, &.current": {
        borderBottomColor: "initial",
      },
      "&.current": {
        borderBottomWidth: "2px",
      },
    },
    secondary: {
      variant: "links.default",
      color: "secondary",
      borderBottomColor: alpha("secondary", 0.2),
    },
  },
};
