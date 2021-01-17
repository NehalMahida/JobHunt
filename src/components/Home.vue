<template>
  <div>
    <v-form ref="form" @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="jobDescription"
              :rules="jobRules"
              label="Job Description"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="location"
              :rules="locationRules"
              label="Location"
              required
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="mt-4">
            <v-btn depressed color="success" type="submit">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      <h2 cols="12" md="5" v-if="loading">Loading...</h2>
      <h2 cols="12" md="5" v-else-if="items.length">
        Showing {{ items.length }} jobs
      </h2>
      <h2 cols="12" md="5" v-else>Nothing found</h2>
      <hr class="mt-5 mb-5" />
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
        ></v-progress-circular>
      </div>
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img
          max-width="800px"
          max-height="450px"
          :src="require('../assets/no_results_found.jpg')"
          v-if="!loading && !items.length"
        ></v-img>
      </div>
      <v-card
        elevation="2"
        outlined
        class="mb-4"
        v-for="item in items"
        :key="item.id"
      >
        <v-row justify="space-between" class="mx-0 my-0">
          <div>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.company }} -- {{ item.type }}
            </v-card-subtitle>
          </div>
          <v-card-title>
            {{ item.location }}
          </v-card-title>
        </v-row>
        <v-card-actions>
          <v-btn color="green darken-1" text :href="item.url" target="_blank">
            Apply
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: () => ({
    loading: true, // to show loading effect.
    items: [], // stores the data fetched from API.
    jobDescription: "",
    location: "",
    jobRules: [(v) => !!v || "Job Description is required"],
    locationRules: [(v) => !!v || "Location is required"],
  }),
  methods: {
    submit() {
      // if form is valid then return true.
      const flag = this.$refs.form.validate();
      if (flag) {
        // start loading effect.
        this.loading = true;
        this.items = [];
        // call API
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
          this.items = result.data;
        })
        .catch((error) => {
          // if CORS proxy URL has havy load.
          this.loading = false;
          alert("Too many requests, Please try later!!" + error.message);
        });
    },
  },
  mounted() {
    // when app is mounted call the default result.
    this.fetchJobs("python", "usa");
  },
};
</script>
<style></style>
