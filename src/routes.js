import Home from "./components/HomeView.vue";
import Registration from "./components/RegistrationView.vue";
import BookedCars from "./components/BookedCars.vue";
import carService from "./components/carService.vue";
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
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },
  ,
  {
    path: "/carService",
    name: "carService",
    component: carService,
  },
  {
    path: "/carlistview",
    name: "CarsListView",
    component: CarsListView,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/BookedCars",
    name: "BookedCars",
    component: BookedCars,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
