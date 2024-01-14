import type { Ref } from "~/content";
import type { Link } from "./Link";

export type Frontpage = {
  title: string;
  image: string;
  links: Ref<Link>[];
};
