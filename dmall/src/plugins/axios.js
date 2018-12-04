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
// service.interceptors.response.use(()=>{},(err)=>{})
const methods = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          showError(`get: ${url} 出错!`, JSON.stringify(params));
          reject(err);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        data,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          showError(`post: ${url} 出错!`, JSON.stringify(data));
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
  },
};

Vue.use(plugin);
// TODO: 是否结合VueX；问下后端是否能pull JSON 下来；
