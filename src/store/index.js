import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, input) {
      state.movies = input;
    }
  },
  actions: {
    setMoviesInActions({ commit }, $data) {
      commit('setMovies', $data);
    }
  },
  modules: {
  }
})
