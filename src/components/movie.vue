<template>
  <router-link :to="this.routerLink">
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
      routerLink: "",
    };
  },

  created() {
    this.routerLink = "/detail/" + this.index;
    for (var i in this.genres) {
      this.genreString += " " + this.genres[i];
      if (i < this.genres.length - 1) {
        this.genreString += ",";
      }
    }
  },

  props: {
    index: Number,
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
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}
* {
  text-decoration: none;
}
</style>
