/* eslint-disable */
import Vue from 'vue';
import { Message, Notification } from 'element-ui';

const messageFactory = (type) => {
  return (message) => {
    Message({
      message,
      type,
      showClose: false,
      duration: 2000,
    });
  };
};

const plugin = {
  install: (vue) => {
    vue.prototype.$info = messageFactory('info');
    vue.prototype.$error = messageFactory('error');
    vue.prototype.$warn = messageFactory('warning');
    vue.prototype.$success = messageFactory('success');
  },
};

Vue.use(plugin);
