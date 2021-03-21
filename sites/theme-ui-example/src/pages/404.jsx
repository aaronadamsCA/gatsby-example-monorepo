import { Box, Container, Heading, Paragraph } from "theme-ui";

const NotFoundPage = () => {
  return (
    <Container>
      <Box as="header">
        <Heading as="h1">Not found</Heading>
      </Box>
      <Box as="main">
        <Paragraph>This page could not be found.</Paragraph>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
