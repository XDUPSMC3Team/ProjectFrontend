/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import moduleExample from './modules/example';
import moduleLogin from './modules/login';
import moduleRegister from './modules/register';
import moduleHome from './modules/home';
import moduleProduct from './modules/product';
import moduleRoot from './modules/root';
import moduleCart from './modules/cart';
import moduleUser from './modules/user';
import moduleFav from './modules/favorite';
import moduleOrder from './modules/order';
import moduleShop from './modules/shop';

import { Logout } from '@/api/public.js';
import { error, errorN } from '@/plugins/message.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || null, // 用户信息 username
    shopCart: [], // 购物车
    productMark: [], // 收藏夹
  }, // root state
  getters: {
    isLogin: state => (!!state.userInfo), // 是否登录
  },
  mutations: {
    // 更新用户信息
    cusUpdateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }, 
    // 删除用户信息
    cusClearUserInfo(state, userInfo) {
      state.userInfo = null;
      window.localStorage.removeItem('userInfo');
    },

  }, // root mutations
  actions: {
    async logout({commit}) {
      const result = await Logout();
      const { msg, code} = result.data;
      if (code) {
        return errorN('logout fail!', msg);
      }
      commit('cusClearUserInfo');
      return Promise.resolve();
    },
  }, // root actions
  modules: {
    example: moduleExample,
    login: moduleLogin,
    register: moduleRegister,
    home: moduleHome,
    product: moduleProduct,
    root: moduleRoot,
    cart: moduleCart,
    user: moduleUser,
    favorite: moduleFav,
    order: moduleOrder,
    shop: moduleShop,
  },
});
