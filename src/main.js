import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/tailwind.css"; // Certifique-se de que o caminho está correto
import "@fortawesome/fontawesome-free/css/all.min.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
