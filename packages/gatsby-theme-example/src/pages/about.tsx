import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { SiteHeader } from "../components/site-header";

const AboutPage: VFC = () => (
  <Container>
    <SiteHeader />
    <Box as="main">
      <Heading as="h1">About Page</Heading>
      <Paragraph>
        This is the about page. It is also part of the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default AboutPage;
