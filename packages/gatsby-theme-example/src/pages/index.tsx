import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const IndexPage: VFC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Gatsby Example Site</Heading>
    </Box>
    <Box as="main">
      <Paragraph>This is the home page.</Paragraph>
    </Box>
  </Container>
);

export default IndexPage;
