import Vue from 'vue';
import App from './sellers.vue';
import router from './router';
import store from '@/store/customer';
import '@/plugins/element';
import '@/plugins/lodash';
import '@/plugins/message';
import '@/plugins/axios';
import '@/plugins/lazyload';
import '@/plugins/util';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
