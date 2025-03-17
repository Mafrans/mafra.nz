export type Post<T = {}> = {
  title: string;
  excerpt: string;
  image: string;
  order?: number;
} & T;
