import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
  },
  {
    path: "/room",
    name: "Room",
    component: () =>
      import(/* webpackChunkName: "Room" */ "../views/Room.vue"),
  },
  {
    path: "/book",
    name: "Book",
    component: () =>
      import(/* webpackChunkName: "Book" */ "../views/Book.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "User" */ "../views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
