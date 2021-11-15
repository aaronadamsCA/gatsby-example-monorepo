import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { Header } from "../components/header";

const ContactPage: VFC = () => (
  <Container>
    <Header />
    <Box as="main">
      <Heading as="h1">Contact Page</Heading>
      <Paragraph>
        This is the contact page. It is also part of the Gatsby theme package.
      </Paragraph>
    </Box>
  </Container>
);

export default ContactPage;
