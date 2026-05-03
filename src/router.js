import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
