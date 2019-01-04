/* eslint-disable */
import methods from '../plugins/axios';

const Register = ({ email, username, password }) => {
  return methods.post('/buyer/register', {
    email,
    username,
    password,
  });
};

const Login = ({ username, password }) => {
  return methods.post('/buyer/login', {
    username,
    password,
  });
};

// 查询商品 pageNo int 页码 optional / pageSize int 每页大小 optional
const GetProducts = ({ pageNo, pageSize }) => {
  return methods.get('/product/products', {
    pageNo,
    pageSize,
  });
}

// 根据Id查询商品
const GetProductById = (productId) => {
  return methods.get(`/product/${productId}`);
}

// 搜索商品
const GetProductBySearch = ({ key, pageNo, pageSize }) => {
  return methods.get(`/product/search`, {
    key,
    pageNo,
    pageSize
  });
}

// 收藏商品
const CollectProductById = (productId) => {
  return methods.get(`/buyer/collectProd/${productId}`);
}

// 收藏商家
const CollectShopById = (shopId) => {
  return methods.get(`/buyer/collectShop/${shopId}`);
}

// 查看我的收藏
const GetMyCollectionProduction = () => {
  return methods.get(`/buyer/collectProd`);
}

// 查看我的收藏商品
const GetMyCollectionShop = () => {
  return methods.get(`/buyer/collectShop`);
}

// 取消收藏商品
const CancelMyCollectionProduct = (collectId) => {
  return methods.delete(`/buyer/collectProd/${collectId}`)
}


// 取消收藏商品
const CancelMyCollectionShop = (collectId) => {
  return methods.delete(`/buyer/collectShop/${collectId}`)
}

const GetProductByCategoryId = (categoryId, { pageNo, pageSize }) => {
  return methods.get(`/product/byCategory/${categoryId}`, {
    pageNo,
    pageSize
  })
}

const AddCartBySpecsId = ({ specsId, amount }) => {
  return methods.post(`/buyer/addCart`, { specsId, amount })
}

const GetCart = () => {
  return methods.get(`/buyer/viewCart`)
}

const UpdateCartAmountByCartId = ({ cartId, amount }) => {
  return methods.get(`/buyer/updateCart/${cartId}`, { amount })
}

const RemoveCartByCartId = (cartId) => {
  return methods.delete(`/buyer/deleteCart/${cartId}`)
}

const GetUserInfo = () => {
  return methods.get('/buyer/profile');
}

const UpdateUserInfo = ({ realName, phone, address }) => {
  return methods.post('/buyer/profile', { realName, phone, address });
}

const GetOrders = () => {
  return methods.get('/buyer/order');
}

const GetOrderDetail = (orderId) => {
  return methods.get(`/buyer/order/${orderId}`)
}
const PostOrder = ({ amount, specsId }) => {
  return methods.post('/buyer/order', { amount, specsId })
}
const GetShopInfoById = (shopId) => {
  return methods.get(`/shop/${shopId}`)
}
const PayOrder = (orderId) => {
  return methods.put(`/buyer/order/${orderId}/pay`)
}
const CancelOrder = (orderId) => {
  return methods.put(`/buyer/order/${orderId}/cancel`)
}
const ConfirmOrder = (orderId) => {
  return methods.put(`/buyer/order/${orderId}/confirm`)
}

const GetOrderByDate = ({data, type}) => {
  return methods.get('/buyer/order/byDate', {
    date, // 2018-09-20
    type, // 1-当日，2-当周，3-当月，4-当年
  })
}

const GetOrderBySearch = (key) => {
  return methods.get('/buyer/order/search', {
    key,
  })
}

const OrderByCart = (array) => {
  return methods.post('/buyer/orderByCart', array)
}

const CommentProduct = (orderDetailId, content) => {
  return methods.post('/buyer/order/comment', {
    orderDetailId,
    content,
  })
}

export {
  Register, // 注册
  Login, // 登录
  CancelMyCollectionProduct, // 取消收藏商品
  CancelMyCollectionShop, // 取消收藏店铺 
  CollectProductById, // 收藏商品
  CollectShopById, // 收藏店铺
  GetShopInfoById, // 获取店铺信息
  GetMyCollectionProduction, // 获取收藏的商品
  GetMyCollectionShop, // 获取收藏的店铺
  GetProducts, // 获取全类商品
  GetProductBySearch, // 搜索关键字商品
  GetProductById, // 通过id搜索商品
  GetProductByCategoryId, // 通过分类id搜索商品
  AddCartBySpecsId, // 添加进购物车
  GetCart, // 查看购物车
  UpdateCartAmountByCartId, // 更新购物车中某商品的数量
  RemoveCartByCartId, // 从购物车中移除商品
  GetUserInfo, // 获取用户信息
  UpdateUserInfo, // 更新用户信息
  GetOrders,  // 获取订单
  GetOrderDetail, // 获取单个订单详情
  PostOrder, // 下单
  OrderByCart, // 购物车下单
  PayOrder, // 支付
  CancelOrder, // 撤销订单
  ConfirmOrder, // 确认收货
  GetOrderByDate, // 分时查询订单
  GetOrderBySearch, // 搜索订单
  CommentProduct, // 评论订单
};
