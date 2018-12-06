import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';

import moduleExample from './modules/example';

Vue.use(Vuex);

export default new Vuex.Store({
  state, // root state
  mutations, // root mutations
  actions, // root actions
  modules: {
    example: moduleExample, // 挂载example子模块 namespace = example
  },
});
