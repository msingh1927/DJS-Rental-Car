import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.css';
// import 'font-awesome/css/font-awesome.min.css';
import router from "./routes";

createApp(App).use(router).mount("#app");
