import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import client from "@tina/client";

export const prerender = true;

export const entries: EntryGenerator = async () => {
  const { data: query } = await client.queries.socialConnection();
  const edges = query.socialConnection.edges ?? [];

  return edges
    .filter((e) => e?.node?._sys.filename != null)
    .map((e) => ({
      social: e?.node?._sys.filename ?? "",
    }));
};

export const load: PageLoad = async ({ params }) => {
  const { data: query } = await client.queries.social({
    relativePath: params.social + ".md",
  });

  if (query.social.url != null) {
    throw redirect(301, query.social.url);
  }

  return { social: query.social };
};
