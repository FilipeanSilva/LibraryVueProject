import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
import { store } from './store';
import router from './router.js';

console.log('App initialization started');
console.log('Base URL:', import.meta.env.BASE_URL);

const app = createApp(App);
console.log('App created');

app.use(store);
console.log('Store added');

app.use(router);
console.log('Router added');

app.mount('#app');
console.log('App mounted');