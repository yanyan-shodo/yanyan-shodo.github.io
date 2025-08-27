import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Set these before deploying:
  site: 'https://yanyan-shodo.github.io',
  // If deploying to a repo page, set base to '/<repo>'
  // base: '/yanyan-site'
  integrations: [tailwind()],
});
