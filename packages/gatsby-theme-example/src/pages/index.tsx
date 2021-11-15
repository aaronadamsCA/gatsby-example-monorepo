import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { SiteHeader } from "../components/site-header";

const HomePage: VFC = () => (
  <Container>
    <SiteHeader />
    <Box as="main">
      <Heading as="h1">Home Page</Heading>
      <Paragraph>
        This is the home page. It is part of the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default HomePage;
