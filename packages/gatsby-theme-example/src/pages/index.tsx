import { InternalLink, Link } from "@monorepo/components";
import { StaticImage } from "gatsby-plugin-image";
import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";

const IndexPage: VFC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Theme Page</Heading>
    </Box>
    <Box as="main">
      <Paragraph>
        This is the home page. It is part of the Gatsby theme package.
      </Paragraph>
      <Paragraph>
        <Link variant="secondary" onClick={() => alert("Test!")}>
          Open a test alert
        </Link>
        .
      </Paragraph>
      <Paragraph>
        <InternalLink to="local">Go to the local page</InternalLink>.
      </Paragraph>
      <StaticImage src="https://picsum.photos/200/300" alt="Random image" />
    </Box>
  </Container>
);

export default IndexPage;
