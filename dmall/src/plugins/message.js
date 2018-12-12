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

// console.log(process.env.NODE_ENV)
const info = messageFactory('info');
const warn = messageFactory('warning');
const success = messageFactory('success');
const error = messageFactory('error');
const infoN = notificationFactory('info')
const errorN = notificationFactory('error')
const warnN = notificationFactory('warning')
const successN = notificationFactory('success')

const plugin = {
  install: (vue) => {
    // $message is the basic
    vue.prototype.$info = info;
    vue.prototype.$error = error;
    vue.prototype.$warn = warn;
    vue.prototype.$success = success;
    // $$notify is the basic
    vue.prototype.$infoN = infoN;
    vue.prototype.$errorN = errorN;
    vue.prototype.$warnN = warnN;
    vue.prototype.$successN = successN;
  },
};

Vue.use(plugin);

export {
  info,
  warn,
  success,
  error,
  infoN,
  warnN,
  errorN,
  successN,
}
