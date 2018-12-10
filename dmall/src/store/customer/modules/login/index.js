/**
 * 登录页面状态控制
 */
/* eslint-disable */
import { Login as LoginBuyer } from '@/api/buyer.js';
import { Login as LoginSeller } from '@/api/seller.js';
import { error, errorN } from '@/plugins/message.js'

// namespace: login
export default {
  state: {
    role: 'customer',
    username: '',
    password: '',
  },
  actions: {
    // 点击登录按钮
    async loginClick({ commit, state }) {
      const { username, password, role } = state;
      if (!username || !password) {
        return error('username or password can not be empty!');
      }
      let Login = null;
      switch (role) {
        case 'customer': Login = LoginBuyer; break;
        case 'seller': Login = LoginSeller; break;
        case 'admin': Login = LoginSeller; break; // TODO: 需要admin登录接口
      }
      const result = await Login({username, password});
      const { code, msg, data } = result.data;

      if (code) {
        errorN('Ops!', msg);
        return Promise.reject({code, msg});
      }
      
      // 保存登录状态

      return Promise.resolve({code, msg, data});
    },
  },
  mutations: {
    LoginUpdateUsername(state, username) {
      state.username = username;
    },
    LoginUpdatePassword(state, password) {
      state.password = password;
    },
    LoginUpdateRole(state, role) {
      state.role = role;
    },
    LoginMarkSigned(state) {
      window.localStorage.setItem('isLogin', true);
    }
  },
};
