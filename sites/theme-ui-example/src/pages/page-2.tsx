import { FC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";
import { Link } from "@gatsby-example-monorepo/components";

const IndexPage: FC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Page 2</Heading>
    </Box>
    <Box as="main">
      <Paragraph>This is another example page.</Paragraph>
      <Paragraph>
        <Link to="/">Return home</Link>
      </Paragraph>
    </Box>
  </Container>
);

export default IndexPage;
