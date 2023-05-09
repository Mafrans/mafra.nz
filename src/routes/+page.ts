import type { PageLoad } from "./$types";
import { client } from "@tina/client";

export const load: PageLoad = async () => {
  const res = await client.queries.frontpage({
    relativePath: "frontpage.md",
  });

  return {
    content: res.data.frontpage,
  };
};
