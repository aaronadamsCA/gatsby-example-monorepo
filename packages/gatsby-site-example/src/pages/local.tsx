import { Header } from "@monorepo/gatsby-theme-example/components/header";
import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const LocalPage: VFC = () => (
  <Container>
    <Header />
    <Box as="main">
      <Heading as="h1">Local Page</Heading>
      <Paragraph>
        This page is part of the local site package. It imports the header from
        the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default LocalPage;
