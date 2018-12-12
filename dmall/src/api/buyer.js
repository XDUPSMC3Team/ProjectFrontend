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


export {
  Register,
  Login,
  CancelMyCollectionProduct,
  CancelMyCollectionShop,
  CollectProductById,
  CollectShopById,
  GetMyCollectionProduction,
  GetMyCollectionShop,
  GetProducts,
  GetProductBySearch,
  GetProductById,
};
