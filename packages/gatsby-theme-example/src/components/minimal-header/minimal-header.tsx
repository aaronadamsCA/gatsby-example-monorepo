import { InternalLink } from "@monorepo/components";
import { VFC } from "react";
import { Box } from "theme-ui";

export const MinimalHeader: VFC = () => (
  <Box as="header" sx={{ marginBlock: 3, fontWeight: "bold" }}>
    <InternalLink to="/">Return home</InternalLink>
  </Box>
);
