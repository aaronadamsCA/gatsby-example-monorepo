import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { Header } from "../components/header";

const HomePage: VFC = () => (
  <Container>
    <Header />
    <Box as="main">
      <Heading as="h1">Home Page</Heading>
      <Paragraph>
        This is the home page. It is part of the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default HomePage;
