import Vue from 'vue';
import App from './customer.vue';
import router from './router';
import '../../plugins/element';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
