/* eslint-disable */
import { error, errorN } from '@/plugins/message.js';
import { GetProducts, CancelMyCollectionProduct, CollectProductById, GetProductBySearch } from '@/api/buyer.js';
// namespace root
export default {
  state: {
    bannerProducts: [],
    pageNo: 0,
    pageSize: 12,
  },
  mutations: {
  },
  actions: {
    async rootGetBannerProducts({ commit , state}) {
      const result = await GetProducts({
        // banner图取第一页的前四条
        pageNo: 1,
        pageSize: 4,
      });
      state.bannerProducts = result.data.data.content || [];
    }
  },
};
