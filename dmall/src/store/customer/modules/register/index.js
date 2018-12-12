/**
 * 登录页面状态控制
 */
/* eslint-disable */
import { Register as BuyerRegister } from '@/api/buyer.js';
import { Register as SellerRegister } from '@/api/seller.js';
import { Register as AdminRegister } from '@/api/admin.js';
import { error, errorN } from '@/plugins/message.js'

// namespace: login
export default {
  state: {
    role: 'customer',
    username: '',
    password1: '',
    password2: '',
    email: '',
    realName: '',
    address: '',
    btnCanInput: true
  },
  actions: {
    // 点击注册按钮
    async registerClick({ commit, state }) {
      const { username, password1, email, password2, role, realName, address} = state;
      // console.log(username, password1)
      // console.log(email, password2)
      // console.log(realName, address)
      if (role === 'seller' && (!realName || !address)) {
        return error('real name or address can not be empty!');
      }
      if (!username || !password1 || !email || !password2) {
        return error('username or password or email can not be empty!');
      }
      if (password2 !== password1) {
        return error('The two passwords you entered must be the same');
      }
      const password = password1;
      let Register = null;
      let result = null;
      switch (role) {
        case 'customer': Register = BuyerRegister; break;
        case 'admin': Register = AdminRegister; break;
        case 'seller': Register = SellerRegister; break;
      }
      
      if (role === 'seller') {
        result = await Register({username, realName, address, email, password})
      } else {
        result = await Register({username, password, email});
      }
      const { code, msg, data } = result.data;

      if (code) {
        return Promise.reject({msg, code});
      } else {
        return Promise.resolve({data, msg, code});
      }
    },
  },
  mutations: {
    RegisterUpdateUsername(state, username) {
      state.username = username;
    },
    RegisterUpdateEmail(state, email) {
      state.email = email;
    },
    RegisterUpdateAddress(state, address) {
      state.address = address;
    },
    RegisterUpdateRealName(state, name) {
      state.realName = name;
    },
    RegisterUpdatePassword1(state, password) {
      state.password1 = password;
    },
    RegisterUpdatePassword2(state, password) {
      state.password2 = password;
    },
    RegisterUpdateRole(state, role) {
      Object.assign(state, {
        role: role,
        username: '',
        password1: '',
        password2: '',
        email: '',
        realName: '',
        address: '',
        btnCanInput: true
      })
    },
  },
};
