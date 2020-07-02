import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Home from './views/Home.vue';

// ONE
// tell vue to use plugin
Vue.use(Router);

export default new Router({
	// otherwise it's a hash mode which adds hash to routes
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		}
	]
})