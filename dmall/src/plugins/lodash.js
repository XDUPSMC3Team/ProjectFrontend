// this.$_.*
import Vue from 'vue';
import _ from 'lodash';

const plugin = {
  install: (vue) => {
    // eslint-disable-next-line
    vue.prototype.$_ = _;
  },
};

Vue.use(plugin);
