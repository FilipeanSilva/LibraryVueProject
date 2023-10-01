import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
import { store } from './store';
import router from './router.js';

createApp(App).use(store).use(router).mount('#app');
