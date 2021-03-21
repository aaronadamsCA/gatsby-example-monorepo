import { Link as GatsbyLink } from "gatsby";
import { FC } from "react";
import { Link as ThemedLink } from "theme-ui";

export const Link: FC<{ to: string }> = (props) => (
  <ThemedLink as={AsLink} variant="default" {...props} />
);

const AsLink: FC<{ to: string }> = (props) => (
  <GatsbyLink activeClassName="active" {...props} />
);
