import Vue from "vue";
import "./assets/main.css";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import App from "./App.vue";

Vue.use(Chakra);

new Vue({
  el: "#app",
  render: (h) => h(CThemeProvider, [h(App)]),
}).$mount();
