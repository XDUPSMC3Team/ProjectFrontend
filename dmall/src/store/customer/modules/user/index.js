/* eslint-disable*/
import { GetUserInfo, UpdateUserInfo} from '@/api/buyer.js';

// namespace user
export default {
  state: {
    info: {
      realName: '',  // 这里是realname
      address: '',
      phone: '',
    },
    editIndex: 0, // 判断正在编辑哪个属性 0 表示没有编辑
  },
  actions: {
    async userGetInfo({state}) {
      const result = await GetUserInfo();
      state.info = result.data.data
    },
    async userEditInfo({state,  dispatch}) {
      const result = await UpdateUserInfo(state.info);

      const { code, msg } = result.data

      if (!code) {
        dispatch('userGetInfo')
        return Promise.resolve(msg)
      } else {
        return Promise.reject(msg)
      }
    }
  },
  mutations: {
    userUpdateName (state, name) {
      state.info.realName = name;
    },
    userUpdateAddress (state, address) {
      state.info.address = address;
    },
    userUpdatePhone (state, phone) {
      state.info.phone = phone;
    },
    userChangeEditIndex (state, index) {
      state.editIndex = index;
    }
  }
}