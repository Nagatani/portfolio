import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import routify from '@roxi/routify/vite-plugin';

export default defineConfig({
	plugins: [
		routify({
			routesDir: 'src/pages',
			mainEntryPoint: 'src/main.ts'
		}),
		// preprocess などの設定は svelte.config.js を参照
		svelte()
	],
	server: {
		host: '0.0.0.0'
	}
});
