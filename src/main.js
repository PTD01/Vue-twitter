import Vue from "vue";
import "./assets/main.css";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import App from "./App.vue";
import Login from "./components/Login.vue";
import router from './router/index.js';

Vue.use(Chakra);

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(App)]),
}).$mount('#app');
