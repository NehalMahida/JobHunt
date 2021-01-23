<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <h2 class="ml-4">JobHunt</h2>

      <router-link
        to="/"
        exact
        active-class="active"
        tag="h3"
        class="ml-10 pointer"
        >Home</router-link
      >
      <router-link
        to="/about"
        exact
        active-class="active"
        tag="h3"
        class="ml-5 pointer"
        >About</router-link
      >
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <router-link
        to="/login"
        exact
        active-class="active"
        tag="h3"
        class=" pointer"
        v-if="!loginUser"
        >Login</router-link
      >
      <h3 v-if="loginUser" @click="logout" class="pointer">Logout</h3>
    </div>
  </v-app-bar>
</template>

<script>
import { eventBus } from "@/main";

export default {
  data: () => ({
    loginUser: false
  }),
  methods: {
    logout() {
      localStorage.setItem("user", "");
      this.loginUser = "";
      eventBus.$emit("logoutUser", false);
    }
  },
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.loginUser = user;
    }
    eventBus.$on("userLogin", email => {
      this.loginUser = email;
    });
  }
};
</script>

<style scoped>
.active {
  color: lightblue;
}
.pointer {
  cursor: pointer;
}
</style>
