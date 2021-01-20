<template>
  <v-app>
    <Header :loginUser="loginUser" />
    <v-main>
      <router-view :loginUser="loginUser" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    loginUser: "",
  }),
};
</script>
