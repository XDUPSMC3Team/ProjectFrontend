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
  return methods.post('/admin/personal/approve', {shopId});
};

// 拒绝申请
const RejectShopById = (shopId) => {
  return methods.post('/admin/personal/reject', {shopId});
};

export {
  Register,
  Login,
  CheckNewShop,
  ApproveShopById,
  RejectShopById
};
