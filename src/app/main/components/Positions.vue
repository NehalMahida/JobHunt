<template>
  <div class="grey lighten-3 d-flex align-center justify-center fill-height">
    <div class="text-center" v-if="loading">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <v-card
      elevation="2"
      class="col-12 col-sm-10 col-md-10 col-lg-10 my-10 pa-10"
      v-else
    >
      <div class="text-h5 font-weight-bold">{{ position.title }}</div>
      <v-divider class="my-5"></v-divider>
      <v-row class="d-flex justify-center">
        <v-col cols="11" lg="9" md="8" sm="11">
          <span class="text-body-2" v-html="position.description"></span>
        </v-col>
        <v-col cols="8" lg="3" md="4" sm="6">
          <v-card
            elevation="3"
            outlined
            class="grey lighten-5 d-flex flex-column align-center justify-center"
          >
            <div class="text-left text-body-2 font-weight-bold pt-3">
              {{ position.company }}
            </div>
            <v-divider></v-divider>
            <v-img
              :src="position.company_logo"
              max-width="200px"
              height="auto"
              class="mb-3"
            ></v-img>
          </v-card>
          <v-card outlied elevation="3" class="mt-5 grey lighten-4">
            <p class="pl-3 pt-3 text-body-2 font-weight-bold">How To Apply</p>
            <v-divider></v-divider>
            <v-card-text>
              <span v-html="position.how_to_apply"></span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  data: () => ({
    position: "",
    loading: true
  }),
  created() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const jobid = this.$route.params.id;
    Vue.axios
      .get(proxyurl + "https://jobs.github.com/positions/" + jobid + ".json")
      .then(result => {
        // stop loading effect.
        this.loading = false;
        this.position = result.data;
      })
      .catch(error => {
        console.log(error.message);
        alert("Too many requests, Please try again later!!");
        this.$router.push("/");
      });
  },
  beforeRouteEnter(from, to, next) {
    const user = localStorage.getItem("user");
    if (user) {
      next(true);
    } else {
      next("/login");
    }
  }
};
</script>

<style></style>
