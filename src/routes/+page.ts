import { entriesToRefs, loadEntries, loadFile } from "~/content";
import type { PageLoad } from "./$types";
import type { Frontpage } from "~/types/Frontpage";
import type { PortfolioItem } from "~/types/PortfolioItem";

export const prerender = true;

export const load: PageLoad = async () => {
  const frontpage = await loadFile<Frontpage>("frontpage");
  const portfolio = await loadEntries("portfolio").then(
    entriesToRefs<PortfolioItem>
  );

  return {
    ...frontpage,
    portfolio,
  };
};
