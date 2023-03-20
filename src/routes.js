import Home from "./components/HomeView.vue";
import CarsListView from "./components/CarsListView.vue"
import AdminPage from "./components/AdminPage.vue"
import { createRouter, createWebHistory } from "vue-router";

// eslint-disable-next-line no-sparse-arrays
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/carlist",
    name: "CarsListView",
    component: CarsListView,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
