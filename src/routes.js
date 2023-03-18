import Home from "./components/HomeView.vue";
import Registration from "./components/RegistrationView.vue";
import SignUp from "./components/SignUp.vue";
import BookedCars from "./components/BookedCars.vue";
import carService from "./components/carService.vue";
import { createRouter, createWebHistory } from "vue-router";

// eslint-disable-next-line no-sparse-arrays
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
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
    path: "/BookedCars",
    name: "BookedCars",
    component: BookedCars,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
