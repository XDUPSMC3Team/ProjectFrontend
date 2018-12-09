import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import state from './state';
import mutations from './mutations';

import moduleExample from './modules/example';
import moduleLogin from './modules/login';
import moduleRegister from './modules/register';

Vue.use(Vuex);

export default new Vuex.Store({
  state, // root state
  mutations, // root mutations
  actions, // root actions
  modules: {
    example: moduleExample,
    login: moduleLogin,
    register: moduleRegister,
  },
});
