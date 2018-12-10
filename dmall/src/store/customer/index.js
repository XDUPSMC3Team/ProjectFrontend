/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

import moduleExample from './modules/example';
import moduleLogin from './modules/login';
import moduleRegister from './modules/register';

import { Logout } from '@/api/public.js';
import { error, errorN } from '@/plugins/message.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null, // 用户信息 username
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
    },

  }, // root mutations
  actions: {
    async logout() {
      const result = await Logout();
      const { msg, code} = result.data;
      if (code) {
        return errorN('logout fail!', msg);
      }
      return Promise.resolve();
    }
  }, // root actions
  modules: {
    example: moduleExample,
    login: moduleLogin,
    register: moduleRegister,
  },
});
