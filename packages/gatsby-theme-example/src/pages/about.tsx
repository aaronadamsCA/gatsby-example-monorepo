import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { MinimalHeader } from "../components/minimal-header";

const AboutPage: VFC = () => (
  <Container>
    <MinimalHeader />
    <Box as="main">
      <Heading as="h1">About Page</Heading>
      <Paragraph>
        This is the about page. It is also part of the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default AboutPage;
