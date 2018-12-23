import axios from 'axios';
import Vue from 'vue';
import { Notification } from 'element-ui';
import serviceURL from '@/config/service.json';

const baseURL = serviceURL[process.env.NODE_ENV] || 'development';

const service = axios.create({
  baseURL,
  timeout: 5000,
});

const showError = (title, message) => {
  Notification({
    title,
    message,
    type: 'error',
  });
};

// 拦截器
// service.interceptors.request.use(()=>{},(err)=>{})
service.interceptors.response.use((res) => {
  if (res.data.code) {
    showError('Ops!', res.data.msg);
  }
  return Promise.resolve(res);
}, (err) => {
  if (err.response.status === 403) {
    showError('Ops!', 'Login expired or not logged in');
    setTimeout(() => {
      window.location.href = `${baseURL.replace('/api', '')}/customer.html#/login`;
    }, 1000);
  }
  return Promise.reject(err);
});

const methods = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params,
      })
        /* eslint-disable-next-line */
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (err.response.status !== 403) {
            showError(`get: ${url} ERROR!`, JSON.stringify(params));
          }
          reject(err);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data,
      })
        /* eslint-disable-next-line */
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (err.response.status !== 403) {
            showError(`post: ${url} ERROR!`, JSON.stringify(data));
          }
          reject(err);
        });
    });
  },
  put(url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'put',
        url,
        data,
      })
        /* eslint-disable-next-line */
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (err.response.status !== 403) {
            showError(`post: ${url} ERROR!`, JSON.stringify(data));
          }
          reject(err);
        });
    });
  },
  delete(url, params = '') {
    return new Promise((resolve, reject) => {
      service({
        method: 'delete',
        url,
        params,
      })
        /* eslint-disable-next-line */
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          if (err.response.status !== 403) {
            showError(`delete: ${url} ERROR!`, JSON.stringify(params));
          }
          reject(err);
        });
    });
  },
};

const plugin = {
  install(vue) {
    // eslint-disable-next-line
    vue.prototype.$get = methods.get;
    // eslint-disable-next-line
    vue.prototype.$post = methods.post;
    // eslint-disable-next-line
    vue.prototype.$baseURL = baseURL;
  },
};

Vue.use(plugin);
// TODO: 是否结合VueX；问下后端是否能pull JSON 下来；

export default methods;
