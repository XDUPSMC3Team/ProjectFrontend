/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Lab from './views/Lab.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component:  () => import('./views/Root.vue'),
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    // },
    {
      path: '/search',
      name: 'search',
      component: Home,
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue'),
    },
  ],
});


// 登录验证


export default router;