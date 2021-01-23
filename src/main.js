import Vue from "vue";
import App from "./App.vue";
import router from "./app/router";
import vuetify from "./app/plugins/vuetify";

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
