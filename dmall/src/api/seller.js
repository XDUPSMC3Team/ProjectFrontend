import methods from '../plugins/axios';

// 注册
export const Register = ({sellerId, shopName, shopDesc, phone, email}) => {
  return methods.post({
    sellerId,
    shopName,
    shopDesc,
    phone,
    email,
  })
}

// 登录
export const Login = (email, password) => {
  return methods.post('/seller/login', {
    email,
    password,
  })
}

// 添加商品
export const AddProduct = ({name, pic, description, attributeList, categoryId}) => {
  return methods.post('/seller/product', {
    categoryId, // TODO: 这个传啥？
    name,
    pic,
    description,
    attributeList,
  })
}

// 更新商品
// 说明：对于没有更改的字段一并传递过来
export const updateProduct = ({productId, categoryId, name, pic, description, attributeList}) => {
  return methods.post(`/seller/product/${productId}`, {
    categoryId,
    name,
    pic,
    description,
    attributeList
  })
}

// 删除商品
export const deleteProduct = (productId) => {
  return methods.delete(`/seller/product/delete/${productId}`)
}

// TODO:更改商家信息
export const m = () => {
  return methods.
};
