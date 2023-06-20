import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID ?? null,
  token: process.env.TOKEN ?? null,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "frontpage",
        label: "Front page",
        path: "content/pages/frontpage",
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
          },
          {
            type: "object",
            name: "socials",
            label: "Socials",
            list: true,
            fields: [
              {
                type: "reference",
                name: "ref",
                required: true,
                label: "Reference",
                collections: ["social"],
              },
            ],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        name: "social",
        label: "Socials",
        path: "content/socials",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "user",
            label: "User",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
          },
        ],
        ui: {
          filename: {
            // Custom slugify function because default does not do lowercase
            slugify: (values) =>
              values?.title?.toLowerCase().replace(/ /g, "-"),
          },
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "gamereview",
        label: "Game Reviews",
        path: "content/gamereviews",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating",
            ui: {
              validate: (v: number) => {
                if (v < 0 || v > 10) {
                  return "Must be between 0 and 10";
                }
              },
            },
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
