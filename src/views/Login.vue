<template>
  <div class="grey lighten-3 fill-height">
    <v-container>
      <v-card outlined elevation="2" class="pa-10">
        <h2 class="text-center">Login to JobHunt</h2>
        <v-form @submit.prevent="submit" ref="form">
          <v-text-field
            v-model="email"
            label="Email"
            :rules="emailRules"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
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

export default {
  data: () => ({
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) =>
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(v) ||
        "Email is not valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          v
        ) ||
        "Password must contain at least 1 upper, 1 lower, 1 special char and numbers",
    ],
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
  created() {
    const user = localStorage.getItem("user");
    if (user) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
