import type { Load } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { client } from "../../tina/__generated__/client";

export const load: Load = (async () => {
  const res = await client.queries.frontpage({
    relativePath: "frontpage.md",
  });

  return {
    content: res.data.frontpage,
  };
}) satisfies PageLoad;
