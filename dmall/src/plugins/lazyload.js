import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
  error: 'http://cdn.helloyzy.cn/404.png',
  loading: 'http://cdn.helloyzy.cn/404.png',
  attempt: 1,
});
