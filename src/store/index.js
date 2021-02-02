import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key: "",
    id: "",
    year: "",
    title: "",
    summary: "",
    poster: "",
    genres: ""
  },
  mutations: {
  },
  actions: {
    getMovies() {
      //get 통신으로 값을 가져오 state 의 값들을 
      //통신 결과값으로 할당.
      //컴포넌트, 뷰 에선 state 값을 가져다 쓰기만.
      return null;
    }
  },
  modules: {
  }
})
