/**
 * 登录页面状态控制
 */
/* eslint-disable */
import { Register as BuyerRegister } from '@/api/buyer.js';
import { Register as SellerRegister } from '@/api/seller.js';
import { error, errorN } from '@/plugins/message.js'

// namespace: login
export default {
  state: {
    role: 'customer',
    username: '',
    password1: '',
    password2: '',
    email: '',
  },
  actions: {
    // 点击注册按钮
    async registerClick({ commit, state }) {
      const { username, password1, email, password2, role} = state;
      // console.log(username, password1)
      // console.log(email, password2)
      if (!username || !password1 || !email || !password2) {
        return error('username or password or email can not be empty!');
      }
      if (password2 !== password1) {
        return error('The two passwords you entered must be the same');
      }
      const password = password1;
      let Register = null;
      switch (role) {
        case 'customer': Register = BuyerRegister; break;
        case 'admin': Register = BuyerRegister; break; // TODO: admin接口接入
        case 'seller': Register = SellerRegister; break;
      }
      const result = await Register({username, password, email});
      const { code, msg, data } = result.data;

      if (code) {
        errorN('Ops!', msg);
        return Promise.reject({msg, code});
      }

      return Promise.resolve({data, msg, code});
    },
  },
  mutations: {
    RegisterUpdateUsername(state, username) {
      state.username = username;
    },
    RegisterUpdateEmail(state, email) {
      state.email = email;
    },
    RegisterUpdatePassword1(state, password) {
      state.password1 = password;
    },
    RegisterUpdatePassword2(state, password) {
      state.password2 = password;
    },
    RegisterUpdateRole(state, role) {
      state.role = role;
    },
  },
};
