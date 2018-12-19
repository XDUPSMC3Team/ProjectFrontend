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
  return methods.get(`/buyer/collectProd/${shopId}`);
}

// 查看我的收藏
const GetMyCollectionProduction = ( { pageNo, pageSize}) => {
  return methods.get(`/buyer/collectProd`, {
    pageNo,
    pageSize,
  });
}

// 查看我的收藏商品
const GetMyCollectionShop = ( { pageNo, pageSize}) => {
  return methods.get(`/buyer/collectShop`, {
    pageNo,
    pageSize,
  });
}

// 取消收藏商品
const CancelMyCollectionProduct = (collectId) => {
  return methods.delete(`/buyer/collectProd/${collectId}`)
}


// 取消收藏商品
const CancelMyCollectionShop = (collectId) => {
  return methods.delete(`/buyer/collectShop/${collectId}`)
}

const GetProductByCategoryId = (categoryId, { pageNo, pageSize}) => {
  return methods.get(`/buyer/byCategory/${categoryId}`)
}

const AddCartBySpecsId = ({specsId, amount}) => {
return methods.post(`/buyer/addCart`, {specsId, amount})
}

const GetCart = () => {
  return methods.get(`/buyer/viewCart`)
}

const UpdateCartAmountByCartId = (amount) => {
  return methods.get(`/buyer/updateCart/${cartId}`, {amount})
}

const RemoveCartByCartId = (cartId) => {
  return methods.delete(`/buyer/deleteCart/${cartId}`)
}


export {
  Register, // 注册
  Login, // 登录
  CancelMyCollectionProduct, // 取消收藏商品
  CancelMyCollectionShop, // 取消收藏店铺 
  CollectProductById, // 收藏商品
  CollectShopById, // 收藏店铺
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
};
