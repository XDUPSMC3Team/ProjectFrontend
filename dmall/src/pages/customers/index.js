import Vue from 'vue';
import App from './customer.vue';
import router from './router';
import '@/plugins/element';
import '@/plugins/lodash';
import '@/plugins/message';
import '@/plugins/axios';


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
