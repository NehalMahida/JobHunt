<template>
  <div class="grey lighten-3 fill-height">
    <v-container>
      <v-card outlined elevation="2" class="pa-10">
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
          <router-link to="/login" tag="a"
            >Already have an account?</router-link
          >
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import validations from "../utilities/validations";

export default {
  data: () => ({
    email: "",
    password: "",
    ...validations,
    position: null,
    jobs: [
      "Software Engineer",
      "Site Reliability Engineer",
      "Quality Assurance",
    ],
    name: null,
  }),
  methods: {
    submit() {
      const flag = this.$refs.form.validate();
      if (flag) {
        const fetchUser = localStorage.getItem(this.email);
        if (fetchUser) {
          alert("Email is already registered!!");
        } else {
          const user = {
            name: this.name,
            email: this.email,
            password: this.password,
            position: this.position,
          };
          localStorage.setItem(this.email, JSON.stringify(user, null, 2));
          this.name = "";
          this.email = "";
          this.password = "";
          this.position = "";
          console.log(user);
          alert("Registered Successfully");
          this.$router.push("/login");
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
