<template>
  <v-app>
    <menuBar />
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import menuBar from "./components/menuBar";
import home from "./views/Home";

export default {
  name: "App",

  components: {
    // components
    menuBar,

    //views
    home,
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
