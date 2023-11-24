import { loadFile } from "~/content";
import type { PageLoad } from "./$types";
import type { Frontpage } from "~/types/Frontpage";

export const load: PageLoad = () => {
  return loadFile<Frontpage>("frontpage");
};
