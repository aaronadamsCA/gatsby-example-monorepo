import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { MinimalHeader } from "../components/minimal-header";

const NotFoundPage: VFC = () => (
  <Container>
    <MinimalHeader />
    <Box as="main">
      <Heading as="h1">Not found</Heading>
      <Paragraph>The requested page could not be found.</Paragraph>
    </Box>
  </Container>
);

export default NotFoundPage;
