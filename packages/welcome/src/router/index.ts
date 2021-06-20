import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Welcome from "../views/Welcome.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
