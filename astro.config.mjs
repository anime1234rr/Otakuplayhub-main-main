// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // El plugin para Vite

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // Solo necesitas esto para integrar Tailwind
  },
});