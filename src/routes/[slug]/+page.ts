import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import { loadEntries, loadFile } from "~/content";
import type { Social } from "~/types/Social";

export const prerender = true;

export const entries: EntryGenerator = async () => {
  return loadEntries("socials");
};

export const load: PageLoad = async ({ params }) => {
  const social = await loadFile<Social>(`socials/${params.slug}`);

  const url = social.content.attributes.url;
  if (url != null) {
    throw redirect(301, url);
  }

  return social;
};
