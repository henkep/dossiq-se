import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dossiq.se',
  integrations: [sitemap()],
  build: {
    assets: '_astro',
  },
  output: 'static',
});
