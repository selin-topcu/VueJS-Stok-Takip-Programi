import Vue from "vue";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
window.axios = require("axios");

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../components/ResetPassword.vue"),
  },
  {
    path: "/admin",
    name: "adminHomePage",
    component: () => import("../components/admin/AdminPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
