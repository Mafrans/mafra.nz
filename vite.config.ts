import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  resolve: {
    alias: {
      "~": "./src",
      "@tina": "./tina/__generated__",
    },
  },
  server: {
    fs: {
      allow: ["./tina/__generated__"],
    },
  },
  ssr: {
    noExternal: ["tinacms"],
  },
});
