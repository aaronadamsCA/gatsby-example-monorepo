import { Paragraph } from "@theme-ui/components";
import { graphql, useStaticQuery } from "gatsby";
import { VFC } from "react";

type data = { site: { siteMetadata: { title: string } } };

export const StaticQueryTest: VFC = () => {
  const { site } = useStaticQuery<data>(query);

  return <Paragraph>Site title: {site.siteMetadata.title}</Paragraph>;
};

const query = graphql`
  query StaticQueryTest {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
