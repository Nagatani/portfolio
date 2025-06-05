import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [svelte({ preprocess: sveltePreprocess(), hot: !process.env.CI })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts', // We'll create this file next
  },
});
