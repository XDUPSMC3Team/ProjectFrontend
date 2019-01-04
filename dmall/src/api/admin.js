/* eslint-disable */
import methods from '../plugins/axios';

const Register = ({email, username, password}) => {
  return methods.post('/admin/register', {
    email,
    username,
    password,
  });
};


const Login = ({username, password}) => {
  return methods.post('/admin/login', {
    username,
    password,
  });
};

// 查看新申请的店铺
const CheckNewShop = () => {
  return methods.get('/admin/personal/appliedShops');
};

// 通过申请
const ApproveShopById = (shopId) => {
  return methods.post(`/admin/personal/approve/${shopId}`);
};

// 拒绝申请
const RejectShopById = (shopId) => {
  return methods.post(`/admin/personal/reject/${shopId}`);
};

//搜索商家
const SearchShop = (shopName) => {
  return methods.get(`/admin/personal/search/${shopName}`);
};

//关闭店铺
const CloseShop = (shopId) => {
  return methods.post(`/admin/personal/close/${shopId}`);
};

//根据shopId 查询 所有的products 信息
const findProductType = (shopId) => {
  return methods.get(`/seller/products/${shopId}`)
}

// 删除商品
const deleteProduct = (productId) => {
  return methods.delete(`/seller/product/delete/${productId}`)
}

//搜索订单
const SearchOrder = (orderId) => {
  return methods.get(`/admin/personal/order/search/${orderId}`);
};

//搜索用户
const SearchCustomer = (username) => {
  return methods.get(`/admin/personal/customer/search/${username}`);
};

//删除用户信息并加入黑名单
const BlockCustomer = (userId) => {
  return methods.post(`/admin/personal/customer/block/${userId}`);
};

//查看所有竞价商店和商品
const FindBidding = () => {
  return methods.get('/admin/personal/biddingInfo');
}

//查看所有店铺销售历史
const FindSaleHistory = () => {
  return methods.get('/admin/personal/saleHistory');
}

//查看汇率
const FindRate = () => {
  return methods.get('/admin/personal/exchangeRate');
}

//修改汇率
const ChangeRate = (rate) => {
  return methods.post(`/admin/personal/changeExchangeRate/${rate}`);
}

//查看营收信息
const FindProfit = (date) => {
  return methods.get('/admin/personal/incomeData/', {
    date,
  });
}

//查看余额
const FindBalance = () => {
  return methods.get('/admin/personal/balance');
}

//提现
const Withdraw = (alipayId,money,admin) => {
  return methods.post(`/admin/personal/withdraw/${admin}/${alipayId}/${money}`);
} 

//查看提现记录
const FindWH = () => {
  return methods.get('/admin/personal/withdrawHistory');
}
export {
  Register,
  Login,
  CheckNewShop,
  ApproveShopById,
  RejectShopById,
  SearchShop,
  CloseShop,
  findProductType,
  deleteProduct,
  SearchOrder,
  SearchCustomer,
  BlockCustomer,
  FindBidding,
  FindSaleHistory,
  FindRate,
  ChangeRate,
  FindProfit,
  FindBalance,
  Withdraw,
  FindWH,
};
