import type { Ref } from "~/content";
import type { Social } from "./Social";

export type Frontpage = {
  title: string;
  image: string;
  socials: Ref<Social>[];
};
