import Vue from "vue";
import Router from "vue-router";
import Conectar from "./views/Conectar.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "conectar",
      component: Conectar
    },
    {
      path: "/log",
      name: "log",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Log.vue")
    }
  ]
});
