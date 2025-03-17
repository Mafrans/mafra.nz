import type { Post } from "./Post";

export type PortfolioItem = Post & {
  github?: string;
};
