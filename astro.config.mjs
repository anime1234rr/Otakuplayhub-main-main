// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

 

  redirects: {
    '/old-page': '/new-page'
  },

  base: '/https://github.com/anime1234rr/Otakuplayhub-main-main/',

  build: {
    
  },
  vite: {
    plugins: [tailwindcss()],
  },

});