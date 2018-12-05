// this.$_.*
import Vue from 'vue';
import _ from 'lodash/core';

const plugin = {
  install: (vue) => {
    // eslint-disable-next-line
    vue.prototype.$_ = _;
  },
};

Vue.use(plugin);
