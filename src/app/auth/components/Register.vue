<template>
  <div class="grey lighten-3 fill-height d-flex align-center justify-center">
    <v-card
      shaped
      elevation="24"
      class="pa-10 text-sm-h6 col-sm-7 col-md-5 col-10"
    >
      <v-alert dense outlined shaped dismissible type="error" v-model="alert">
        Email id is already registered!!
      </v-alert>
      <v-alert shaped outlined dense type="success" v-model="success">
        Registered Successfully
      </v-alert>
      <h2 class="text-center">Register to JobHunt</h2>
      <v-form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="name"
          :rules="[required('name')]"
          label="Full Name"
          required
        ></v-text-field>

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

        <v-select
          v-model="position"
          :items="jobs"
          :rules="[required('position')]"
          label="Position"
          data-vv-name="select"
          required
        ></v-select>

        <v-btn depressed color="primary" type="submit" class="my-4">
          Register
        </v-btn>
      </v-form>
      <div class="text-center">
        <router-link to="/login" tag="a">Sign In</router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import validations from "../helpers/validations";

export default {
  data: () => ({
    email: "",
    password: "",
    ...validations,
    position: null,
    jobs: [
      "Software Engineer",
      "Site Reliability Engineer",
      "Quality Assurance"
    ],
    name: null,
    alert: false,
    success: false
  }),
  methods: {
    submit() {
      const flag = this.$refs.form.validate();
      if (flag) {
        const fetchUser = localStorage.getItem(this.email);
        if (fetchUser) {
          this.alert = true;
        } else {
          const user = {
            name: this.name,
            email: this.email,
            password: this.password,
            position: this.position
          };
          localStorage.setItem(this.email, JSON.stringify(user, null, 2));
          this.success = true;
          this.alert = false;
          setTimeout(() => {
            this.name = "";
            this.email = "";
            this.password = "";
            this.position = "";
            this.$router.push("/login");
          }, 1500);
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

<style></style>
