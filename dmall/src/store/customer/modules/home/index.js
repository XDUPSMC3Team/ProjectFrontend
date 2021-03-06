/* eslint-disable */
import { error, errorN } from '@/plugins/message.js';
import { GetProducts, CancelMyCollectionProduct, CollectProductById, GetProductBySearch, GetProductByCategoryId} from '@/api/buyer.js';
// namespace product
export default {
  state: {
    products: [],
    pageNo: 0,
    pageSize: 64,
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    }
  },
  getters: {
    isSearchResultEmpty: state => state.products.length === 0
  },
  actions: {
    // 添加喜欢
    async productAddLike({ commit }, productId) {
      try {
        const result = await CollectProductById(productId);
        const { data } = result.data;
        return Promise.resolve(data);
      }
      catch(e) {
        return Promise.reject(e);
      }
    },
    // 添加进购物车
    async productAddCart({ commit }, productId) {
    },
    // 获取所有商品
    async productGetAll({ commit, state }) {
      const { pageNo, pageSize } = state;
      const result = await GetProducts({ pageNo, pageSize });
      const { code, msg, data } = result.data;
      commit('updateProducts', data.content);
      return Promise.resolve(data)
    },
    // 根据关键字搜索商品
    async productSearch({commit, state}, key) {
      const { pageNo, pageSize } = state;
      const result = await GetProductBySearch({key});
      const { code, msg, data } = result.data;
      commit('updateProducts', data.content);
      return Promise.resolve(data)
    },
    async productSearchByCategory({commit, state}, id) {
      const { pageNo, pageSize } = state;
      const result = await GetProductByCategoryId(id, {pageNo, pageSize});
      const { code, msg, data } = result.data;
      commit('updateProducts', data.content);
      return Promise.resolve(data)
    }
  },
};
