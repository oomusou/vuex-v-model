import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/** state */
const state = {
  name: '',
};

/** mutations */
const setName = (state, payload) => state.name = payload;

const mutations = {
  setName,
};

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
});
