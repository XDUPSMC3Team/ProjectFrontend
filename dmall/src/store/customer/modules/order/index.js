/*eslint-disable */
import { GetOrders, GetOrderDetail, PostOrder, PayOrder, CancelOrder, ConfirmOrder, CommentProduct, GetOrderBySearch, GetOrderByDate} from '@/api/buyer.js';

// namespace order
export default {
  state: {
    statusEnum: {
      '-1': 'Canceled',
      '0': 'Preparing for Shipment',
      '1': 'Shipped',
      '2': 'Sending',
      '3': 'Complete',
      '4': 'Comment',
      '5': 'Return',
      '6': 'Return Complete',
    },
    payStatusEnum: {
      '0': 'Unpaid',
      '1': 'Paid',
    },
    orderList: [],
    showOrderDetail: {}, // 进入订单详情页展示用
    orderPageItemList: [], // 订单页面展示用orderList
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
    // 查询单个订单
    async orderGetOrderDetail({state}, orderId) {
      const result = await GetOrderDetail(orderId);
      const { code, data } = result.data;
      
      state.showOrderDetail = data;
      state.showOrderDetail.stepNum = parseInt(data.status, 10) + 1;

      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
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
        return Promise.reject(data);
      } else {
        return Promise.resolve(data);
      }
    },
    // 支付订单
    async orderPay ({}, orderId) {
      const result = await PayOrder(orderId);
      const { code } = result.data;

      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    },
    // 取消订单
    async orderCancel ({}, orderId) {
      const result = await CancelOrder(orderId);
      const { code } = result.data;

      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    },
    // 确认订单
    async orderConfirm ({}, orderId) {
      const result = await ConfirmOrder(orderId);
      const { code } = result.data;

      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    },
    // 评论
    async orderComment ({}, {orderDetailId, content}) {
      const result = await CommentProduct({orderDetailId, content});
      const { code } = result.data;
      if (code) {
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    },
    // 通过关键字搜索订单
    async orderSearchByKey({commit}, key) {
      const result = await GetOrderBySearch(key);
      const {data, code } = result.data;

      if (code) {
        return Promise.reject()
      } else {
        commit('orderUpdatePageItem', data)
        return Promise.resolve()
      }
    },
    // 选择日期查询订单
    async orderSearchByDate({commit}, date) {
      const result = await GetOrderByDate({
        date,
        type: 1,
      });
      const {data, code } = result.data;

      if (code) {
        return Promise.reject()
      } else {
        commit('orderUpdatePageItem', data)
        return Promise.resolve()
      }
    },
    // 选择时间段查询订单
    async orderSearchByDays({commit}, {date, type}) {
      const result = await GetOrderByDate({date, type});
      const {data, code } = result.data;

      if (code) {
        return Promise.reject()
      } else {
        commit('orderUpdatePageItem', data)
        return Promise.resolve()
      }
    }
  },
  mutations: {
    orderUpdatePageItem(state, data) {
      state.orderPageItemList = data
    },
    orderClearPageItem(state) {
      state.orderPageItemList = []
    }
  },
  getters: {
    // 未支付订单且未取消
    unPaidOrder: state => state.orderList.filter(item => item.payStatus === 0 && item.status !== -1),
    // 已支付订单
    paidOrder: state => state.orderList.filter(item => item.payStatus === 1 && item.status === 0),
    // 已发货订单
    sentOrder: state => state.orderList.filter(item => item.status === 1),
    // 运输中订单
    sendingOrder: state => state.orderList.filter(item => item.status === 2),
    // 已收货订单
    receivedOrder: state => state.orderList.filter(item => item.status === 3),
    // 已评价订单
    commentedOrder: state => state.orderList.filter(item => item.status === 4),
    // 退货中订单
    returningOrder: state => state.orderList.filter(item => item.status === 5),
    // 退货成功订单
    returnedOrder: state => state.orderList.filter(item => item.status === 6),
    // 已取消的订单
    canceledOrder: state => state.orderList.filter(item => item.status === -1),
  }
}