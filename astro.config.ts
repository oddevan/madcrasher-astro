import sveltiaCms from 'astro-loader-sveltia-cms';
import { defineConfig } from 'astro/config';

const externals = [
  { label: "Apple Music", value: "apple" },
  { label: "Spotify", value: "spotify" },
  { label: "YouTube", value: "youtube" },
  { label: "Deezer", value: "deezer" },
  { label: "Amazon", value: "amazon" },
  { label: "Bandcamp", value: "bandcamp" },
];

// https://astro.build/config
export default defineConfig({
  integrations: [
    sveltiaCms({
      config: {
        backend: {
          name: "github",
          repo: "oddevan/madcrasher-astro",
          branch: "main",
        },
        // backend: { name: "test-repo" },
        media_folder: "src/images",
        collections: [
          {
            name: "albums",
            label: "Albums",
            label_singular: "Album",
            folder: "src/albums",
            fields: [
              { name: "title", label: "Title", widget: "string" },
              { name: "date", label: "Release Date", widget: "datetime" },
              { name: "cover", label: "Cover", widget: "image" },
              { name: "body", label: "Writeup", widget: "markdown" },
              {
                name: "links",
                label: "Available at",
                widget: "list",
                min: 1,
                fields: [
                  {
                    name: "key",
                    widget: "select",
                    options: externals,
                  },
                  { name: "url", widget: "string", type: "url" },
                ],
              },
            ],
          },
        ],
        singletons: [
          {
            name: "settings",
            label: "Site Settings",
            file: "content/settings.yaml",
            fields: [
              {
                name: "links",
                label: "Footer Links",
                widget: "list",
                min: 1,
                fields: [
                  {
                    name: "key",
                    widget: "select",
                    options: externals,
                  },
                  { name: "url", widget: "string", type: "url" },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
