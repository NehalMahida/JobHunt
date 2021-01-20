<template>
  <div class="grey lighten-3 fill-height">
    <v-container>
      <v-card outlined elevation="2" class="pa-10">
        <h2 class="text-center">Register to JobHunt</h2>
        <v-form @submit.prevent="submit" ref="form">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Full Name"
            required
          ></v-text-field>

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

          <v-select
            v-model="position"
            :items="jobs"
            :rules="selectRules"
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
    position: null,
    jobs: [
      "Software Engineer",
      "Site Reliability Engineer",
      "Quality Assurance",
    ],
    selectRules: [(v) => !!v || "select can not be empty"],
    name: null,
    nameRules: [(v) => !!v || "name can not be empty"],
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
          alert("Register Successfully");
          this.$router.push("/login");
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
