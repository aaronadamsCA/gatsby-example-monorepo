import { FC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const IndexPage: FC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Theme UI Gatsby Example</Heading>
    </Box>
    <Box as="main">
      <Paragraph>This is an example page.</Paragraph>
    </Box>
  </Container>
);

export default IndexPage;
