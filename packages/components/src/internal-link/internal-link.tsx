import { forwardRef } from "react";
import type { LinkProps } from "../link";
import { Link } from "../link";

import type { GatsbyLinkProps } from "gatsby";
import { Link as GatsbyLink } from "gatsby";

export type InternalLinkProps = Omit<GatsbyLinkProps<unknown>, "ref"> &
  LinkProps;

export const InternalLink = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  function InternalLink(props, ref) {
    return (
      <Link
        ref={ref}
        as={(props) => <GatsbyLink activeClassName="current" {...props} />}
        {...props}
      />
    );
  }
);
