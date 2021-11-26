import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Experience from "../pages/Experience.vue";
import Education from "../pages/Education.vue";
import Blog from "../pages/Blog.vue";
import Falak from "../pages/Falak.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Education",
      path: "/education",
      component: Education,
    },
    {
      name: "Experience",
      path: "/experience",
      component: Experience,
    },
    {
      name: "Blog",
      path: "/blog",
      component: Blog,
    },
    {
      name: "Falak",
      path: "/ilmufalak",
      component: Falak,
    },
  ],
});

export default router;
