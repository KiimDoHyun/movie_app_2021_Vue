<template>
  <v-app>
    <menuBar />
    <v-main>
      <router-link to="/"></router-link>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import menuBar from "./components/menuBar";

export default {
  name: "App",

  components: {
    // components
    menuBar,

    //views
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  background-color: #eff3f7;
}
</style>
