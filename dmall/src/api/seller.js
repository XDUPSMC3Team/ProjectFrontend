/* eslint-disable */
import methods from '../plugins/axios';

// 注册
const Register = ({ realName, address = '', password, email, username}) => {
  return methods.post('/seller/register',{
    username,
    realName,
    address,
    password,
    email,
  })
}

// 登录
const Login = ({username, password}) => {
  return methods.post('/seller/login', {
    username,
    password,
  })
}

// 添加商品
const AddProduct = ({ shopId, name, pic, description, attributeList, categoryId }) => {
  return methods.post('/seller/product', {
    categoryId, // TODO: 这个传啥？
    shopId,
    name,
    pic,
    description,
    attributeList,
  })
}

// 更新商品
// 说明：对于没有更改的字段一并传递过来
const updateProduct = ({ productId, categoryId, shopId, name, pic, price, description, attributeList }) => {
  return methods.post(`/seller/product/${productId}`, {
    categoryId,
    shopId,
    name,
    pic,
    price,
    description,
    attributeList
  })
}

// 删除商品
const deleteProduct = (productId) => {
  return methods.delete(`/seller/product/delete/${productId}`)
}

//商家注册
const registerShop = ({ sellerId, shopName, shopDesc, phone, email }) => {
  return methods.post('/seller/register/shop',{
    sellerId,   // 买家id
    shopName,
    shopDesc,    // �可选
    phone, // 可选
    email, // 可选
  })
}

//商家详细信息修改
const editShop = ({email, telephone, shopId }) => {
  return methods.post(`/shop/shopDetail/${shopId}`, {
    email,
    telephone,
  })
}

//查找所有类别
const findCategories = () => {
  return methods.get('/category/categories')
}

//增加类别
const addCategory =  ({parentId, name}) => {
  return methods.get('/category/add', {
    parentId,
    name,
  })
}

//增加attributeKey
const addAttributeKey = ({categoryId, attributeKey }) => {
  return methods.post('/seller/attributeKey', {
    categoryId,
    attributeKey,
  })
}

//根据 categoryId 查找attributeKey
const findAttributeKey = (categoryId) => {
  return methods.get(`/seller/attributeKey/${categoryId}`)
}

//根据 attributeKey 查找 attributeValue
const findAttributeValue = ({attributeKey }) => {
  return methods.post(`/seller/attributeValue/${attributeKey}`)
}

//增加一条productSpecs(单例商品)
const addProductSpecs =  ({productId, detail, stock, price}) => {
  return methods.post('/seller/productSpecs', {
    productId,
    detail,
    stock,
    price,
  })
}

//根据productId查询所有的productSpecs
const findAllProductSpecs = (productId) => {
  return methods.get(`/product/productSpecs/${productId}`)
}

//图片上传
const uploadImg = (file) => {
  return methods.post('/pic/upload', file)
}

//根据sellerId 查询 shop 信息
const findSellerShop = (sellerId) => {
  return methods.get(`/seller/shop/${sellerId}`)
}

//根据shopId 查询 所有的products 信息
const findProductType = (shopId) => {
  return methods.get(`/seller/products/${shopId}`)
}

const getProductSpecByDetail = (detail) => {
  return methods.get(`/product/productSpecs/detail`, {
    detail: JSON.stringify(detail),
  })
}

export {
  Register,
  Login,
  AddProduct,
  updateProduct,
  deleteProduct,
  registerShop,
  editShop,
  findCategories,
  addCategory,
  addAttributeKey,
  findAttributeKey,
  findAttributeValue,
  addProductSpecs,
  findAllProductSpecs,
  uploadImg,
  findSellerShop,
  findProductType,
  getProductSpecByDetail
};
