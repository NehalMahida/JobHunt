import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/app/main/components/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../main/components/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../auth/components/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../auth/components/Register.vue")
  },
  {
    path: "/positions/:id",
    name: "Positions",
    component: () => import("../main/components/Positions.vue")
  },
  {
    path: "/*",
    name: "Not Found",
    component: () => import("../shared/components/notFound.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
