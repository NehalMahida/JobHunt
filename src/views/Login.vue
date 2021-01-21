<template>
  <div class="grey lighten-3 fill-height">
    <v-container>
      <v-card outlined elevation="2" class="pa-10">
        <h2 class="text-center">Login to JobHunt</h2>
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
          <router-link to="/register" tag="a"
            >Don't have an account?</router-link
          >
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { eventBus } from "../main";
import validations from "../utilities/validations";

export default {
  data: () => ({
    email: "",
    password: "",
    ...validations,
  }),
  methods: {
    submit() {
      const flag = this.$refs.form.validate();
      if (flag) {
        const fetchUser = JSON.parse(localStorage.getItem(this.email));
        if (fetchUser && fetchUser.password == this.password) {
          localStorage.setItem("user", this.email);
          eventBus.$emit("userLogin", this.email);
          this.$router.push("/");
        } else {
          alert("Authentication failed!!");
        }
      }
    },
  },
  beforeRouteEnter(from, to, next) {
    const user = localStorage.getItem("user");
    if (user) {
      next("/");
    } else {
      next(true);
    }
  },
};
</script>

<style></style>
