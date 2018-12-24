import Vue from 'vue';
import App from './customer.vue';
import router from './router';
import store from '@/store/customer';
import '@/plugins/element';
import '@/plugins/lodash';
import '@/plugins/message';
import '@/plugins/axios';
import '@/plugins/lazyload';
import '@/plugins/util';
import 'element-ui/lib/theme-chalk/display.css';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
