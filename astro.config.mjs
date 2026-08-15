import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pop.site',
  server: {
    host: true,
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
