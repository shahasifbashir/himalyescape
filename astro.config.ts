import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — pulled from the central config file.
  site: siteConfig.url,
  // Emit clean directory-style URLs (e.g. /packages/) for better SEO.
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
