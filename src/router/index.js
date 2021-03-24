import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GamesIndex from "../views/GamesIndex.vue";
import GamesShow from "../views/GamesShow.vue";
import ReviewsIndex from "../views/ReviewsIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import User from "../views/Userindex.vue";
import UserShow from "../views/UserShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/games",
    name: "games-index",
    component: GamesIndex,
  },
  {
    path: "/games/:id",
    name: "games-show",
    component: GamesShow,
  },
  {
    path: "/reviews",
    name: "review-show",
    component: ReviewsIndex,
  },
  {
    path: "/signup",
    name: "signup-show",
    component: Signup,
  },
  {
    path: "/login",
    name: "login-show",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/user/:id",
    name: "user-show",
    component: UserShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
