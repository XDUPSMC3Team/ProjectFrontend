/* eslint-disable */
import { error, errorN } from '@/plugins/message.js';
import { GetProducts, CancelMyCollectionProduct, CollectProductById, GetProductBySearch, GetProductByCategoryId } from '@/api/buyer.js';
// namespace root
export default {
  state: {
    bannerProducts: [],
    categoryProducts: {
      CellPhones: [],
      Computers: [],
      Tablets: [],
      Cameras: [],
      Games: [],
      TV: [],
    },
    pageNo: 0,
    pageSize: 12,
  },
  mutations: {
  },
  actions: {
    async rootGetBannerProducts({ commit , state}) {
      const result = await GetProducts({
        // banner图取总商品第一页的前四条
        pageNo: 1,
        pageSize: 4,
      });
      state.bannerProducts = result.data.data.content || [];
    },
    // 3, 5, 6, 4, 10, 1
    async rootGetCategories({commit, state}) {
      const config = {
        pageNo: 0,
        pageSize: 4,
      }
      let result = {
        CellPhones: await GetProductByCategoryId(3, config),
        Computers: await GetProductByCategoryId(5, config),
        Tablets: await GetProductByCategoryId(6, config),
        Cameras: await GetProductByCategoryId(4, config),
        Games: await GetProductByCategoryId(10, config),
        TV: await GetProductByCategoryId(1, config),
      }

      Object.keys(result).forEach(key => {
        result[key] = result[key].data.data.content
      })
      state.categoryProducts = result;
      // console.log(state.categoryProducts)
    }
  },
};
