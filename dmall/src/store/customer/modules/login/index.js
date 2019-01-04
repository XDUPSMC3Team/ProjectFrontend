/**
 * 登录页面状态控制
 */
/* eslint-disable */
import { Login as LoginBuyer } from '@/api/buyer.js';
import { Login as LoginSeller } from '@/api/seller.js';
import { Login as LoginAdmin } from '@/api/admin.js';
import { error, errorN } from '@/plugins/message.js'

// namespace: login
export default {
  state: {
    role: 'customer',
    username: '',
    password: '',
    btnCanInput: true,
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
        case 'admin': Login = LoginAdmin; break;
      }
      const result = await Login({username, password});
      const { code, msg, data } = result.data;

      if (code) {
        return Promise.reject({code, msg, data});
      } else {      
        // 保存登录状态
        commit('LoginMarkSigned', {id: data});
        return Promise.resolve({code, msg, data, username,});
      }
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
      state.username = '';
      state.password = ''
    },
    LoginMarkSigned(state, info) {
      window.localStorage.setItem('userInfo', JSON.stringify({ username: state.username, id: info.id}));
    },
  },
};
