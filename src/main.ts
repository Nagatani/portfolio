import { mount } from 'svelte';
import App from './App.svelte';
import './style/index.scss';

const app = mount(App, {
	target: document.body,
	props: {}
});

export default app;
