import { loadEntries, loadFile } from "~/content";
import type { EntryGenerator, PageLoad } from "../$types";
import type { PortfolioItem } from "~/types/PortfolioItem";

export const entries: EntryGenerator = () => loadEntries("portfolio");

export const load: PageLoad = ({ params }) => {
  return loadFile<PortfolioItem>(`portfolio/${params.slug}`);
};
