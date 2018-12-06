import Vue from 'vue';
import * as util from '../utils';


const plugin = {
  install: (vue) => {
    // eslint-disable-next-line
    vue.prototype.$util = util;
  },
};

Vue.use(plugin);
