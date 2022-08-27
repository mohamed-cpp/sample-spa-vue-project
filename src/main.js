import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import helpers from "./helpers";

//createApp(App).use(store).use(router).mount("#app");

let app = createApp(App);

app.config.globalProperties.helpers = helpers;

app.use(store).use(router).mount("#app");
