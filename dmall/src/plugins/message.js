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

const notificationFactory = (type) => {
  return (title, message) => {
    Notification({
      title,
      message,
      type,
      duration: 4500,
      showClose: true,
    });
  }
}

console.log(process.env.NODE_ENV)
const plugin = {
  install: (vue) => {
    // $message is the basic
    vue.prototype.$info = messageFactory('info');
    vue.prototype.$error = messageFactory('error');
    vue.prototype.$warn = messageFactory('warning');
    vue.prototype.$success = messageFactory('success');
    // $$notify is the basic
    vue.prototype.$infoN = notificationFactory('info');
    vue.prototype.$errorN = notificationFactory('error');
    vue.prototype.$warnN = notificationFactory('warning');
    vue.prototype.$successN = notificationFactory('success');
  },
};

Vue.use(plugin);
