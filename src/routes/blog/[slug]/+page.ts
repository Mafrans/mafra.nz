import { loadEntries, loadFile } from "~/content";
import type { BlogPost } from "~/types/BlogPost";
import type { PageLoad } from "../$types";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () => loadEntries("blog");

export const load: PageLoad = ({ params }) => {
  return loadFile<BlogPost>(`blog/${params.slug}`);
};
