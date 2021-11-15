import { InternalLink, Link } from "@monorepo/components";
import type { VFC } from "react";
import { Box, Container, Heading, Paragraph } from "theme-ui";
import { StaticQueryTest } from "../components/static-query-test";

const IndexPage: VFC = () => (
  <Container>
    <Box as="header">
      <Heading as="h1">Theme Page</Heading>
    </Box>
    <Box as="main">
      <Paragraph>
        This is the home page. It is part of the Gatsby theme package.
      </Paragraph>
      <StaticQueryTest />
      <Paragraph>
        <Link variant="secondary" onClick={() => alert("Test!")}>
          Open a test alert
        </Link>
        .
      </Paragraph>
      <Paragraph>
        <InternalLink to="local">Go to the local page</InternalLink>.
      </Paragraph>
    </Box>
  </Container>
);

export default IndexPage;
