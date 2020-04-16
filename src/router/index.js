import Vue from 'vue';

import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Repo from '../pages/Repo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite,
  },
  {
    path: '/repo/:id',
    name: 'repo',
    component: Repo,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
