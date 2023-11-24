import { error } from "@sveltejs/kit";

const FileRegex = /\/content\/(?:([a-zA-Z0-9 /]+)\/)?(.+)\.md/;

export type Ref<T = Record<string, string>> = {
  fullPath: string;
  file: string;
  content: MarkdownContent<T>;
};

type MarkdownContent<T> = {
  attributes: T;
  html: string;
};

export async function loadEntries(relativePath: string) {
  const modules = import.meta.glob(`/content/**/*.md`);

  const files = [];
  for (const module of Object.keys(modules)) {
    const [, path, file] = FileRegex.exec(module) ?? [];
    if (path === relativePath) {
      files.push(file);
    }
  }

  return files;
}

export async function loadFile<T extends Record<string, unknown>>(
  relativePath: string
): Promise<Ref<T>> {
  const modules = import.meta.glob(`/content/**/*.md`, { eager: true });
  const [fullPath, , file] =
    Object.keys(modules)
      .map((m) => FileRegex.exec(m) ?? [])
      .find(([, path, file]) => joinPath(path, file) === relativePath) ?? [];

  if (file == null) {
    throw error(404, "Not found");
  }

  const content = modules[fullPath] as MarkdownContent<T>;
  return {
    fullPath,
    file,
    content: {
      ...content,
      attributes: await hydrateAttributes(content.attributes),
    },
  };
}

async function hydrateAttributes<
  T extends (object | { ref: string }) | unknown[]
>(attributes: T): Promise<T> {
  if (Array.isArray(attributes)) {
    const newAttributes = [];

    for (const [index, value] of attributes.entries()) {
      const hydratedValue = await hydrateAttributes(value);
      newAttributes[index] = hydratedValue;
    }
    return newAttributes as T;
  }

  if (typeof attributes === "object") {
    let newAttributes: Record<string, unknown> = {};

    if (Object.hasOwn(attributes, "ref")) {
      const ref = await loadFile((attributes as { ref: string }).ref as string);
      return {
        ...ref,
        content: await hydrateAttributes(ref.content),
      } as T;
    }

    for (const [key, value] of Object.entries(attributes)) {
      const hydratedValue = await hydrateAttributes(value);
      newAttributes[key] = hydratedValue;
    }
    return newAttributes as T;
  }

  return attributes;
}

function joinPath(...path: string[]) {
  return path.filter(Boolean).join("/");
}
