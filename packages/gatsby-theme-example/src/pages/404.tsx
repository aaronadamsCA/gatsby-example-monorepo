import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { Header } from "../components/header";

const NotFoundPage: VFC = () => (
  <Container>
    <Header />
    <Box as="main">
      <Heading as="h1">Not found</Heading>
      <Paragraph>The requested page could not be found.</Paragraph>
    </Box>
  </Container>
);

export default NotFoundPage;
