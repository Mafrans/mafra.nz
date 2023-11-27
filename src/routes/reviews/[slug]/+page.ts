import { loadEntries, loadFile } from "~/content";
import type { EntryGenerator, PageLoad } from "./$types";
import type { GameReview } from "~/types/GameReview";

export const entries: EntryGenerator = async () => {
  return loadEntries("gamereviews");
};

export const load: PageLoad = ({ params }) => {
  return loadFile<GameReview>(`gamereviews/${params.slug}`);
};
