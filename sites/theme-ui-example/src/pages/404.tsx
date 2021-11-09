import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const NotFoundPage: VFC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Not found</Heading>
    </Box>
    <Box as="main">
      <Paragraph>The requested page could not be found.</Paragraph>
    </Box>
  </Container>
);

export default NotFoundPage;
