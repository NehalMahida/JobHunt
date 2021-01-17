<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>JobHunt</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="grey lighten-5">
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    //HelloWorld,
    Home,
  },

  data: () => ({}),
};
</script>
