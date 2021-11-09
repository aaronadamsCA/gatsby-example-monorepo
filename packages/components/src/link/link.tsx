import { forwardRef } from "react";
import type { LinkProps as ThemeUILinkProps } from "theme-ui";
import { Link as ThemeUILink } from "theme-ui";

export type LinkProps = Omit<ThemeUILinkProps, "href">;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  return <ThemeUILink ref={ref} variant="default" {...props} />;
});
