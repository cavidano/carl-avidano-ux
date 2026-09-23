import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlavidano.com',
  trailingSlash: 'never',
  redirects: {
    '/bny/portfolio': '/bny#projects',
    '/drawing-board/making-room-for-deeper-navigation-in-natura11y': '/drawing-board/natura11y-update-new-menu-components-for-deeper-navigation',
    '/on-my-desk': '/drawing-board',
    '/on-my-desk/[slug]': '/drawing-board/[slug]',
    '/on-my-desk/topics/[topic]': '/drawing-board/topics/[topic]'
  },
  integrations: [
    mdx(),
    sitemap({
      // Index the articles and main listing, excluding duplicate topic-filter views.
      filter: (page) => {
        const { pathname } = new URL(page);
        return pathname !== '/aclu' &&
          !/^\/bny(?:\/|$)/.test(pathname) &&
          pathname !== '/drawing-board/making-room-for-deeper-navigation-in-natura11y' &&
          !pathname.startsWith('/on-my-desk') &&
          !pathname.startsWith('/drawing-board/topics/');
      }
    })
  ]
});
