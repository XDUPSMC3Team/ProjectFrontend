/*eslint-disable */
import { GetMyCollectionProduction, GetMyCollectionShop, CancelMyCollectionProduct, CancelMyCollectionShop } from '@/api/buyer.js';

// namespace collect
export default {
  state: {
    collectShops: [],
    collectProducts: [],
    pageNo: 0,
    pageSize: 12,
  },
  actions: {
    // 获取收藏的商品
    async collectGetProducts({ state }) {
      // TODO: 加上分页
      const {pageNo, pageSize} = state;
      const result = await GetMyCollectionProduction({pageNo, pageSize});
      const { code, data, msg } = result.data
      state.collectProducts = data.content;
      // if (!code) {
      //   return Promise.resolve(msg)
      // } else {
      //   return Promise.reject(msg)
      // }
    },
    async collectCancelProduct({dispatch}, collectId) {
      const result = await CancelMyCollectionProduct(collectId);

      const {code} = result.data;

      if (!code) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    }
  },
  mutations: {

  }
}