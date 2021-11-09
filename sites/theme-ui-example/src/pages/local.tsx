import { InternalLink } from "@monorepo/components";
import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const LocalPage: VFC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Local Page</Heading>
    </Box>
    <Box as="main">
      <Paragraph>This page is part of the local site package.</Paragraph>
      <Paragraph>
        <InternalLink to="/">Return to the home page</InternalLink>.
      </Paragraph>
    </Box>
  </Container>
);

export default LocalPage;
