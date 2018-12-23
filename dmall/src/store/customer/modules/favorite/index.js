/*eslint-disable */
import { GetMyCollectionProduction, GetMyCollectionShop, CancelMyCollectionProduct, CancelMyCollectionShop, CollectShopById} from '@/api/buyer.js';

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
      const result = await GetMyCollectionProduction();
      const { code, data, msg } = result.data
      state.collectProducts = data;
      // if (!code) {
      //   return Promise.resolve(msg)
      // } else {
      //   return Promise.reject(msg)
      // }
    },
    // 获取收藏店铺
    async collectGetShop({ state }) {
      const result = await GetMyCollectionShop();
      const { code, data, msg } = result.data
      state.collectShops = data;
    },
    // 收藏店铺
    async collectShop ({dispatch}, shopId) {
      const result = await CollectShopById(shopId);
      const {code, msg} = result.data;
      if (!code) {
        return Promise.resolve(msg);
      } else {
        return Promise.reject(msg);
      }
    },
    // 取消收藏店铺
    async collectCancelShop ({dispatch}, {collectId, shopId}) {
      const result = await CancelMyCollectionShop(collectId);
      const {code, msg} = result.data;
      if (!code) {
        return Promise.resolve(msg);
      } else {
        return Promise.reject(msg);
      }
    },
    // 取消收藏商品
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