/*eslint-disable */
import { GetOrders, GetOrderDetail, PostOrder } from '@/api/buyer.js';

// namespace order
export default {
  state: {
    statusEnum: {
      '0': '已下单',
      '1': '已发货',
      '2': '已收货',
      '3': '已评价',
      '4': '退货中',
      '5': '退货成功',
    },
    payStatusEnum: {
      '0': '未支付',
      '1': '已支付',
    },
    orderList: [],
    showOrderDetail: {}, // 进入订单详情页展示用
  },
  actions: {
    // 查询所有订单
    async orderGetOrders({ state }) {
      const result = await GetOrders();
      const { data } = result.data;
      data.forEach(item => {
        let name = '';
        item.orderDetailList.forEach(i => {
          name += i.productName+ ',';
        })
        item.productDesc = name.substr(0, name.lastIndexOf(','));
      })
      state.orderList = data;
    },
    // 查询订单详情
    async orderGetDetail({ }, orderId) {
      const result = await GetOrderDetail(orderId);
      const { data } = result.data;
      state.showOrderDetail = data;
    },
    // 单物件下单
    async orderMake({ }, { specsId, amount }) {
      const result = await PostOrder({ specsId, amount });
      const { code, data } = result.data;

      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    }
  },
  mutations: {
  },
  getters: {
    // 未支付订单
    unPaidOrder: state => state.orderList.filter(item => item.payStatus === 0),
    // 已支付订单
    paidOrder: state => state.orderList.filter(item => item.payStatus === 1),
    // 已发货订单
    sentOrder: state => state.orderList.filter(item => item.status === 1),
    // 已收货订单
    receivedOrder: state => state.orderList.filter(item => item.status === 2),
    // 已评价订单
    commentedOrder: state => state.orderList.filter(item => item.status === 3),
    // 退货中订单
    returningOrder: state => state.orderList.filter(item => item.status === 4),
    // 退货成功订单
    returnedOrder: state => state.orderList.filter(item => item.status === 5)
  }
}