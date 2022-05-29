import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Buy from "../views/Buy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/buy",
    name: "Buy",
    component: Buy,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
