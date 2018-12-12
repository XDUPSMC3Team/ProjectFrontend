import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import EditShop from './views/editShop.vue';
import RegistShop from './views/registShop.vue';
import EditProduct from './views/editProduct.vue';
import AddProductType from './views/addProductType.vue';
import ProductList from './views/productList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      component: About,
    },
    {
      path: '/editShop',
      name: 'editShop',
      component: EditShop,
    },
    {
      path: '/registShop',
      name: 'registShop',
      component: RegistShop,
    },
    {
      path: '/editProduct',
      name: 'editProduct',
      component: EditProduct,
    }, 
    {
      path: '/addProductType',
      name: 'addProductType',
      component: AddProductType,
    },
    {
      path: '/productList',
      name: 'productList',
      component: ProductList,
    },
  ],
});
