export function getBasename(path: string) {
  return path.split("/").at(-1)?.split(".")[0];
}
