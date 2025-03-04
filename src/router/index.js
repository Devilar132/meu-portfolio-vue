import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Contact from "../pages/Contact.vue";
import Curiosidades from "../pages/Curiosidades.vue"; // Importe a nova página

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/curiosidades", component: Curiosidades }, // Adicione a nova rota
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
