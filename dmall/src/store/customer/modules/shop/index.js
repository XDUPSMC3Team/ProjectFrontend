/*eslint-disable */
import { GetShopInfoById,  } from '@/api/buyer.js';

// namespace shop
export default {
  state: {
    info: {
      products: [],
      collectId: 0,
    },
    statusEnums: {
      '0': 'Accepting',
      '1': 'Accepted',
      '2': 'Rejected',
      '3': 'Ban'
    }
  },
  actions: {
    async shopGetInfo ({state}, shopId) {
      const result = await GetShopInfoById(shopId);
      const {data} = result.data;
      Object.assign(state.info, data);
    }
  },
  mutations: {
    
  },
  getters:{
    shopIsCollected: state => (state.info.collectId !== 0),
    shopProducts: state => state.info.products,
    isShopProductsEmpty: state => state.info.products.length === 0,
  }
}