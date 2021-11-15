import { InternalLink, Link } from "@monorepo/components";
import { graphql, useStaticQuery } from "gatsby";
import { VFC } from "react";
import { Box, Flex, Text } from "theme-ui";

type siteData = { site: { siteMetadata: { title: string } } };

export const SiteHeader: VFC = () => {
  const { site } = useStaticQuery<siteData>(query);

  return (
    <Flex
      as="header"
      sx={{
        flexWrap: "wrap",
        justifyContent: "space-between",
        columnGap: 3,
        marginBlock: 3,
      }}
    >
      <Box sx={{ fontWeight: "bold" }}>{site.siteMetadata.title}</Box>
      <Flex sx={{ columnGap: 3 }}>
        <Text>
          <InternalLink to="/">Home</InternalLink>
        </Text>
        <Text>
          <InternalLink to="/about">About</InternalLink>
        </Text>
        <Text>
          <InternalLink to="/local">Local</InternalLink>
        </Text>
        <Text>
          <Link variant="secondary" onClick={() => alert("Test!")}>
            Test
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

const query = graphql`
  query SiteHeader {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
