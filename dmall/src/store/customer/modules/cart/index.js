/* eslint-disable */
import { error, errorN } from "@/plugins/message.js";
import {
  GetCart,
  AddCartBySpecsId,
  UpdateCartAmountByCartId,
  RemoveCartByCartId,
  OrderByCart,
} from "@/api/buyer.js";

import { getProductSpecByDetail } from '@/api/seller.js';

// namespace cart
export default {
  state: {
    cartList: [],
    totalCost: 0,
  },
  getters: {
    isCartEmpty: state => state.cartList.length === 0,
    cartBadgeNum: state => state.cartList.length,
    cartTotalPrice: state => {
      let total = 0;
      state.cartList.forEach(item => total += item.amount * item.price);
      return total;
    },
    cartIdList: state => state.cartList.map(item => item.id)
  },
  mutations: {},
  actions: {
    // 查看购物车
    async cartGetProducts({ state }) {
      const result = await GetCart();
      const { data } = result.data;
      state.cartList = data;
    },
    // 添加进购物车
    async cartAddProduct({ state, dispatch }, { specsId, amount }) {
      const result = await AddCartBySpecsId({ specsId, amount });
      const { code } = result.data;
      if (!code) {
        dispatch('cartGetProducts');
      }
    },
    // 移除购物车内商品
    async cartRemoveProduct({ dispatch }, cartId) {
      const result = await RemoveCartByCartId(cartId);
      const { code } = result.data;
      if (!code) {
        dispatch('cartGetProducts');
      }
    },
    // 更改购物车中的商品数量
    async cartChangeAmount({ dispatch }, { cartId, amount }) {
      const result = await UpdateCartAmountByCartId({ cartId, amount });
      const { code } = result.data;
      if (!code) {
        // 问题：更新数据导致set触发两次
        dispatch('cartGetProducts');
      }
    },
    // 购物车下单
    async cartOrder({getters, dispatch}) {
      const result = await OrderByCart(getters.cartIdList);
      const { code } = result.data
      if (!code) {
        dispatch('cartGetProducts'); 
        return Promise.resolve();
      }else {
        return Promise.reject()
      }
    }
  }
};
