import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages user site at https://astaraudit.github.io
// (repo: astaraudit/astaraudit.github.io). No `base` needed for user/org sites.
export default defineConfig({
  site: 'https://astaraudit.github.io',
  trailingSlash: 'ignore',
});
