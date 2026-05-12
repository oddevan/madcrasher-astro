// @ts-check
import sveltiaCms from 'astro-loader-sveltia-cms';
import { defineConfig } from 'astro/config';

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
        media_folder: "src/images",
        collections: [
          {
            name: "albums",
            folder: "src/albums",
            fields: [
              { name: "title", widget: "string" },
              { name: "draft", widget: "boolean", required: false },
              { name: "date", widget: "datetime" },
							{ name: "cover", widget: "image" },
              { name: "body", widget: "markdown" },
							{ name: "links", widget: "list", fields: [
								{ name: "label", widget: "string" },
								{ name: "url", widget: "url" },
							]},
            ],
          },
        ],
      },
		})
	]
});
