<template>
  <v-container>
    <v-row v-show="isLoading">
      <v-col class="loader">
        <span class="loaderText">Loading...</span>
      </v-col>
    </v-row>

    <v-row v-show="!isLoading">
      <v-col
        cols="12"
        sm="6"
        md="4"
        xl="4"
        v-for="(item, index) in this.movies"
        :key="item.id"
      >
        <movie
          :index="index"
          :key="item.id"
          :id="item.id"
          :year="item.year"
          :title="item.title"
          :summary="item.summary"
          :poster="item.medium_cover_image"
          :genres="item.genres"
        />
      </v-col>
    </v-row>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import movie from "../components/movie";
// import store from "vuex";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    movie,
  },

  data() {
    return {
      arr: [],
      isLoading: true,
    };
  },

  computed: {
    ...mapState({
      movies: (state) => state.movies,
    }),
  },

  mounted() {
    this.getMovie();
  },

  methods: {
    ...mapMutations({
      setMovies: "setMovies",
    }),

    async getMovie() {
      await this.axios
        .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        .then((res) => {
          this.arr = res.data.data.movies;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.setMovies(this.arr);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.loader {
  text-align: center;
  font-weight: 600;
  margin-top: 40vh;
}
</style>