// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import tailwind from "@astro/tailwind";

// https://astro.build/config
export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },
});