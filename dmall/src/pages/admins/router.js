import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import ShopProduct from './views/shopProduct.vue';
import Search from './views/Search.vue';
import ShopApplication from './views/ShopApplication.vue';
import Bidding from './views/biddingInfo.vue';
import Order from './components/order.vue';
import Comment from './views/comment.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/',
      name: 'shopApplication',
      component: ShopApplication,
    },
    {
      path: '/shopProduct',
      name: 'shopProduct',
      component: ShopProduct,
    },
    {
      path: '/bidding',
      name: 'bidding',
      component: Bidding,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //   component: About,
    // },
  ],
});
