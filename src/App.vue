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
import Header from "./app/shared/components/Header";
import Footer from "./app/shared/components/Footer";

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
