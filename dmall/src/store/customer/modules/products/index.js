/* eslint-disable */
import { error, errorN } from '@/plugins/message.js';

// namespace product
export default {
  state: {
    productList: [],
  },
  mutations: {},
  actions: {
    // 添加喜欢
    productAddLike({ commit }, productId) {},
    // 添加进购物车
    productAddCart({ commit }, productId) {},
    // 更新商品数据
    productUpdate ({ commit }, productId) {}
  },
};
