import { loadEntries, loadFile } from "~/content";
import type { EntryGenerator, PageLoad } from "../$types";
import type { GameReview } from "~/types/GameReview";
import type { PortfolioItem } from "~/types/PortfolioItem";

export const entries: EntryGenerator = async () => {
  return loadEntries("portfolio");
};

export const load: PageLoad = ({ params }) => {
  return loadFile<PortfolioItem>(`portfolio/${params.slug}`);
};
