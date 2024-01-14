import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import { loadEntries, loadFile } from "~/content";
import type { Link } from "~/types/Link";

export const prerender = true;

export const entries: EntryGenerator = async () => {
  const links = await loadEntries("links");
  return links.filter(({ slug }) => slug.startsWith("_"));
};

export const load: PageLoad = async ({ params }) => {
  const link = await loadFile<Link>(`links/${params.slug}`);

  const url = link.content.attributes.url;
  if (url != null) {
    throw redirect(301, url);
  }

  return link;
};
