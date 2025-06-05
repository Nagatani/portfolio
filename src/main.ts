import App from './App.svelte';
import './pages/_article_layout.svelte'; // Ensure Rollup sees this

const app = new App({
	target: document.body,
	props: {}
});

export default app;