// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shresthaujjwal.com.np',
  integrations: [
    sitemap({
      // Set to true to exclude pages with draft: true from the sitemap
      filter: (page) => page.search(/\/draft-/) === -1,
      // Add a custom changefreq (default is 'weekly')
      changefreq: 'weekly',
      // Add a custom priority (default is 0.7)
      priority: 0.7,
      // Add a custom lastmod (defaults to the current date)
      lastmod: new Date(),
      // Define a custom serializer function
      serialize(item) {
        // Add custom logic here for more control
        return item;
      }
    }),
  ],
});
