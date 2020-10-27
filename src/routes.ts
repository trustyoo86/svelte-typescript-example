import { wrap } from 'svelte-spa-router/wrap';
import Login from './pages/Login.svelte';
import Main from './pages/Main.svelte';

const routes = {
  '/': Login,
  '/main': Main,
};

export default routes;
