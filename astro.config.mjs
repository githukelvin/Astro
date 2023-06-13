import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [vue(), mdx()],
  output: "server",
  adapter: netlify()
});