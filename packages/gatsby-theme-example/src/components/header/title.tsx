import { graphql, useStaticQuery } from "gatsby";
import type { VFC } from "react";
import { Box } from "theme-ui";

type siteData = { site: { siteMetadata: { title: string } } };

export const Title: VFC = () => {
  const { site } = useStaticQuery<siteData>(query);

  return <Box sx={{ fontWeight: "bold" }}>{site.siteMetadata.title}</Box>;
};

const query = graphql`
  query Header {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
