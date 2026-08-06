import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt({
      sitemap: true,
      policy: [
        { userAgent: '*', allow: '/' },
      ],
    }),
    sitemap(),
  ],
  site: 'https://algemiroteran.tech'
})
