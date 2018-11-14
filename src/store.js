import Vue from 'vue';
import Vuex from 'vuex';
import { createMutation } from "./helpers/vuex";

Vue.use(Vuex);

/** state */
const state = {
  name: '',
};

/** mutations */
const mutations = {
  setName: createMutation('name'),
};

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
});
