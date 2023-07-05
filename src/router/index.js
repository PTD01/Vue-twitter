import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: App
    }
  ],
});

export default router;