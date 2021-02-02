<template>
  <router-link to="/about">
    <v-card>
      <v-card-title> {{ title }}</v-card-title>
      <v-card-subtitle>{{ year }}</v-card-subtitle>
      <v-img class="movieImg" :src="poster" :alt="title" />
      <v-card-subtitle>Genres</v-card-subtitle>
      <v-card-subtitle>{{ this.genreString }}</v-card-subtitle>

      <v-card-text>{{ summary.slice(0, 180) }}...</v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      genreString: "",
    };
  },

  created() {
    for (var i in this.genres) {
      this.genreString += " " + this.genres[i];
      if (i < this.genres.length - 1) {
        this.genreString += ",";
      }
    }
  },

  props: {
    id: Number,
    year: Number,
    title: String,
    summary: String,
    genres: Array,
    poster: String,
  },

  methods: {},
};
</script>

<style scoped>
.movieImg {
  max-height: 220px;
  margin: 10px;
}
* {
  text-decoration: none;
}
</style>
