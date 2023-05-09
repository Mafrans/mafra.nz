import { client } from "@tina/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const res = await client.queries.gamereview({
    relativePath: params.slug,
  });

  return {
    content: res.data,
  };
};
