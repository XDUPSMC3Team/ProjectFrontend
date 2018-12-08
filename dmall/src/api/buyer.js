import methods from '../plugins/axios';

/**
 * {
    "code": 0,
    "msg": "success",
    "data": "Welcome, xxx"
}
 */
const Register = (email, username, password) => {
  // TODO: add auth & notification
  return methods.post('/buyer/register', {
    email,
    username,
    password,
  });
};

/**
 * {
    "code": 0,
    "msg": "success",
    "data": ""
}
 */
const Login = (username, password) => {
  // TODO: add auth & notification
  return methods.post('/buyer/login', {
    username,
    password,
  });
};

export {
  Register,
  Login,
};
