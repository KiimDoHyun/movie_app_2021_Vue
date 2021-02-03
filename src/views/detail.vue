<template>
  <v-container fluid>
    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ this.movie.title_long }}</v-card-title>
          <v-img class="Img" :src="this.movie.large_cover_image" />
          <v-card-subtitle>Name : {{ this.movie.title }}</v-card-subtitle>
          <v-card-subtitle>Year : {{ this.movie.year }}</v-card-subtitle>
          <v-card-subtitle
            >Runtime : {{ this.movie.runtime }} min</v-card-subtitle
          >
          <v-card-subtitle>Rating : {{ this.movie.rating }}</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>{{ this.movie.summary }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      indexNo: 0,
      movie: [],
      genre: "",
    };
  },

  props: {
    index: String,
  },

  computed: {
    ...mapState({
      movies: (state) => state.movies,
    }),
  },

  beforeMount() {
    this.indexNo = this.index;
    this.indexNo *= 1;
  },

  mounted() {
    this.movie = this.movies[this.indexNo];
  },
};
</script>

<style scoped>
.Img {
  margin: 10px;
}
</style>