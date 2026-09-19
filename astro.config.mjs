import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlavidano.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Keep the draft On my desk preview out of search until its posts are approved.
      filter: (page) => !page.endsWith('/aclu') && !new URL(page).pathname.startsWith('/on-my-desk')
    })
  ]
});
