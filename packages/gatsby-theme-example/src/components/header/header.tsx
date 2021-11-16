import loadable from "@loadable/component";
import { InternalLink, Link } from "@monorepo/components";
import type { VFC } from "react";
import { Flex, Text } from "theme-ui";

const Title = loadable(() => import("./title"), {
  resolveComponent: ({ Title }) => Title,
});

export const Header: VFC = () => (
  <Flex
    as="header"
    sx={{
      flexWrap: "wrap",
      justifyContent: "space-between",
      columnGap: 3,
      marginBlock: 3,
    }}
  >
    <Title />
    <Flex sx={{ columnGap: 3 }}>
      <Text>
        <InternalLink to="/">Home</InternalLink>
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
