import type { PageLoad } from "./$types";
import { client } from "@tina/client";

export const load: PageLoad = async () => {
  const {
    data: { frontpage },
  } = await client.queries.frontpage({
    relativePath: "frontpage.md",
  });

  return {
    content: frontpage,
  };
};
