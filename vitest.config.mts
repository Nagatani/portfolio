import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts', // jest-domのマッチャーを読み込むためのファイル
  },
  resolve: {
    alias: [
      { find: '../.routify/routes', replacement: '/src/mock-routes.ts' }
    ]
  }
});
