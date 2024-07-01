import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";
//comando para buildear:
//npm run build
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: netlify()
});