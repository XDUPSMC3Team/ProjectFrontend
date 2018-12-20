/* eslint-disable */
import { error, errorN } from '@/plugins/message.js';
import { GetProductById, CollectProductById, CancelMyCollectionProduct, AddCartBySpecsId } from '@/api/buyer.js';
import { getProductSpecByDetail } from '@/api/seller.js';
import Vue from 'vue'

// namespace productDetail
export default {
  state: {
    detail: {
      name: '',
      shopId: '',
      id: '', // specsId
      pic: '',
      description: '',
      price: '',
      updateTime: '',
      categoryId: '',
      stock: 0,
      createTime: '',
      attributeList: {},
      collectId: 0,
    },
    attributeMap: {},
    buyNum: 0,
    productId: 0,
  },
  getters: {
    isCollected: state => (state.detail.collectId !== 0), // 是否收藏
  },
  mutations: {
    productDetailUpdateDetail(state, detail) {
      Object.assign(state.detail, detail);
      state.detail.attributeList = JSON.parse(detail.attributeList);
      Object
        .keys(state.detail.attributeList)
        .forEach(key => {
          Vue.set(state.attributeMap, key, state.detail.attributeList[key][0]);
        });
    },
    productDetailUpdateAttrList(state, attrMap) {
      Object.assign(state.attributeMap, attrMap);
    },
    productDetailChangeBuyNumber(state, buyNum) {
      state.buyNum = buyNum;
    },
    productDetailUpdatePriceEtc(state, priceEtc) {
      Object.assign(state.detail, priceEtc)
    }
  },
  actions: {
    // 添加喜欢
    async productDetailAddLike({ commit, state }) {
      try {
        const { id } = state.detail;
        const result = await CollectProductById(id);
        const { data } = result.data;
        state.detail.collectId = data;
        return Promise.resolve(data);
      }
      catch (e) {
        return Promise.reject(e);
      }
    },
    // 取消喜欢
    async productDetailCancelLike({ commit, state }) {
      try {
        const { collectId } = state.detail;
        const result = await CancelMyCollectionProduct(collectId);
        const { data } = result.data;
        state.detail.collectId = 0;
        return Promise.resolve(data);
      }
      catch (e) {
        return Promise.reject(e);
      }
    },
    // 添加进购物车
    async productDetailAddCart({ commit, state, dispatch}) {
      const result = await AddCartBySpecsId({
        specsId: state.detail.id,
        amount: state.buyNum,
      });
      const { code, data, msg } = result.data;
      if (!code) {
        dispatch('cartGetProducts'); 
        return Promise.resolve(data);
      }else {
        return Promise.reject(msg)
      }
    },
    // 初始商品数据
    async productDetailInit({ commit, state }, productId) {
      state.productId = productId;
      const result = await GetProductById(productId);
      const { data } = result.data;
      commit('productDetailUpdateDetail', data);
      const result2 = await getProductSpecByDetail(state.attributeMap, state.productId);
      commit('productDetailUpdatePriceEtc', result2.data.data)
      return Promise.resolve({})
    },
    // 根据所选属性更新商品数据
    async productDetailUpdate({ commit, state }) {
      const result = await getProductSpecByDetail(state.attributeMap, state.productId);
      if (!result.data.data) {
        // 没有库存
        state.detail.stock = 0;
      }
      commit('productDetailUpdatePriceEtc', result.data.data)
    },
  },
};
