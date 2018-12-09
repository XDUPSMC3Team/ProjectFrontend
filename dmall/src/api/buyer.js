/* eslint-disable */
import methods from '../plugins/axios';

const Register = ({email, username, password}) => {
  return methods.post('/buyer/register', {
    email,
    username,
    password,
  });
};

const Login = ({username, password}) => {
  return methods.post('/buyer/login', {
    username,
    password,
  });
};

export {
  Register,
  Login,
};
