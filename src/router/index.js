import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/MyLogin.vue";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hello",
    component: HelloWorld,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forget",
    name: "forget",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyMenu.vue"),
  },

  {
    name: "home",
    path: "/home",
    component: HomeView,
    meta: {
      title: "MyHomeView",
    },
  },
];

const router = new VueRouter({
  routes,
});
router.afterEach((to, from) => {
  document.title = to.meta.title || "nbclass";
});

export default router;
