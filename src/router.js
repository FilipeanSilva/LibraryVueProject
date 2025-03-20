import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/about', component: About, name: 'about' },
  { path: '/dashboard', component: Dashboard, name: 'dashboard' },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
