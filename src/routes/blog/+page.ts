import { entriesToRefs, loadEntries, loadFile } from "~/content";
import type { PageLoad } from "../$types";
import type { BlogPost } from "~/types/BlogPost";
import type { Frontpage } from "~/types/Frontpage";

export const prerender = true;

export const load: PageLoad = async () => {
  const frontpage = await loadFile<Frontpage>("blog");
  return {
    frontpage,
    entries: await loadEntries("blog").then(entriesToRefs<BlogPost>),
  };
};
