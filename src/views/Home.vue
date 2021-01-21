<template>
  <div class="home">
    <v-img
      :src="require('../assets/jobhunt.jpg')"
      height="50vh"
      class="d-flex align-center justify-center"
      gradient="to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)"
    >
      <div class="text-center white--text --darken-2">
        <h1>Welcome To JobHunt</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="text-center">
        <router-link to="/register" tag="div" v-if="!loginUser">
          <v-btn class="px-6 py-5" color="primary">
            Register
          </v-btn>
        </router-link>
        <h2 v-if="loginUser" class="white--text">Hello, {{ userName }}</h2>
      </div>
    </v-img>

    <v-card elevation="2" outlined>
      <h1 class="text-center my-5">Find Jobs</h1>
    </v-card>

    <v-row class="grey lighten-3 pb-16 d-flex flex-row justify-center">
      <v-col cols="10" md="3" sm="6" class="mt-15 pa-0">
        <h2>Search Here</h2>
        <hr class="mt-5 mb-5" />
        <v-form ref="form" @submit.prevent="submit">
          <v-card elevation="2" outlined>
            <v-container class="white pa-6">
              <v-text-field
                v-model="jobDescription"
                :rules="jobRules"
                label="Job Description"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="location"
                :rules="locationRules"
                label="Location"
                required
                outlined
              ></v-text-field>
              <v-spacer />
              <v-btn depressed color="primary" type="submit">
                Search
              </v-btn>
            </v-container>
          </v-card>
        </v-form>
      </v-col>

      <v-col cols="10" md="7" sm="10" class="mt-15 mx-16 pa-0">
        <h2 v-if="loading">Loading...</h2>
        <h2 v-else-if="Jobitems.length">Showing {{ Jobitems.length }} jobs</h2>
        <h2 v-else>Nothing found</h2>
        <hr class="mt-5 mb-5" />
        <div class="text-center">
          <v-progress-circular indeterminate color="primary" v-if="loading" />
        </div>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-img
            max-width="200px"
            max-height="200px"
            :src="require('../assets/not-found.svg')"
            v-if="!loading && !Jobitems.length"
          />
        </div>
        <div v-for="item in Jobitems" :key="item.id">
          <v-card elevation="2" outlined class="mb-4">
            <v-row justify="space-between" class="mx-0 my-0">
              <div>
                <v-card-title class="primary--text">
                  {{ item.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ item.company }} | {{ item.type }}
                </v-card-subtitle>
              </div>
              <div>
                <v-card-title class="black--text font-weight-regular ">
                  {{ item.location }}
                </v-card-title>
                <v-card-subtitle class="">
                  {{ item.created_at }}
                </v-card-subtitle>
              </div>
            </v-row>
            <v-card-actions>
              <v-btn
                :disabled="!loginUser"
                color="green darken-1"
                text
                :href="item.url"
                target="_blank"
              >
                Apply
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { eventBus } from "../main";
Vue.use(VueAxios, axios);

export default {
  name: "Home",
  data: () => ({
    loginUser: "",
    userName: "",
    loading: true,
    Jobitems: [],
    jobDescription: "",
    location: "",
    jobRules: [(v) => !!v || "Job Description is required"],
    locationRules: [(v) => !!v || "Location is required"],
  }),
  methods: {
    submit() {
      const flag = this.$refs.form.validate();
      if (flag) {
        // start loading effect.
        this.loading = true;
        this.Jobitems = [];
        this.fetchJobs(this.jobDescription, this.location);
      }
    },
    fetchJobs(description, location) {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      Vue.axios
        .get(
          proxyurl +
            "https://jobs.github.com/positions.json?description=" +
            description +
            "&full_time=true&location=" +
            location
        )
        .then((result) => {
          // stop loading effect.
          this.loading = false;
          this.Jobitems = result.data;
        })
        .catch((error) => {
          this.loading = false;
          alert("Too many requests, Please try later!!");
          console.log(error.message);
        });
    },
  },
  created() {
    this.fetchJobs("python", "usa");
    this.loginUser = localStorage.getItem("user");
    if (this.loginUser) {
      this.userName = JSON.parse(localStorage.getItem(this.loginUser)).name;
    }
    eventBus.$on("logoutUser", (status) => {
      this.loginUser = status;
    });
  },
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
