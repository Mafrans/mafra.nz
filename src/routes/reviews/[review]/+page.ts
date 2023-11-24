import { loadEntries, loadFile } from "~/content";
import type { EntryGenerator, PageLoad } from "./$types";
import type { GameReview } from "~/types/GameReview";

export const entries: EntryGenerator = async () => {
  const entries = await loadEntries("gamereviews");
  return entries.map((review) => ({ review }));
};

export const load: PageLoad = ({ params }) => {
  return loadFile<GameReview>(`gamereviews/${params.review}`);
};
