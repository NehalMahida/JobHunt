<template>
  <div class="grey lighten-3 fill-height d-flex  align-center justify-center">
    <v-card
      shaped
      elevation="24"
      class="pa-10 text-sm-h6 col-sm-7 col-md-5 col-10"
    >
      <v-alert dense outlined shaped dismissible type="error" v-model="alert">
        Authentication failed!!
      </v-alert>
      <v-alert type="success" dense outlines sheped v-model="success">
        Login Successfully
      </v-alert>
      <h2 class="text-center">Log in to JobHunt</h2>
      <v-form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="email"
          label="Email"
          :rules="[required('email'), emailPattern()]"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          :rules="[required('password'), passwordPattern()]"
          label="Password"
          required
        ></v-text-field>

        <v-btn depressed color="primary" type="submit" class="my-4">
          Login
        </v-btn>
      </v-form>
      <div class="text-center">
        <router-link to="/register" tag="a">Sign up</router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import validations from "../helpers/validations";

export default {
  data: () => ({
    email: "",
    password: "",
    ...validations,
    alert: false,
    success: false
  }),
  methods: {
    submit() {
      const flag = this.$refs.form.validate();
      if (flag) {
        const fetchUser = JSON.parse(localStorage.getItem(this.email));
        if (fetchUser && fetchUser.password == this.password) {
          localStorage.setItem("user", this.email);
          eventBus.$emit("userLogin", this.email);
          this.success = true;
          this.alert = false;
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        } else {
          this.alert = true;
        }
      }
    }
  },
  beforeRouteEnter(from, to, next) {
    const user = localStorage.getItem("user");
    if (user) {
      next("/");
    } else {
      next(true);
    }
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
