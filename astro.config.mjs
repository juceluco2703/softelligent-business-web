import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://softelligent-business.com.mx',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel()
});
