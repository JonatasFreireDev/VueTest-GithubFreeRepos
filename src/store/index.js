import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  mutations: {
    addRepo: (state, repo) => state.favorites.push(repo),
    removeRepo: (state, ind) => state.favorites.splice(ind, 1),
  },
  actions: {
    addRepo: ({ commit }, repo) => {
      commit('addRepo', repo);
    },
    removeRepo: ({ commit }, index) => {
      console.log(index);
      commit('removeRepo', index);
    },
  },
  modules: {},
});
