import { createRouter, createWebHistory } from "vue-router";
// Import route components
import Home from "../views/Home.vue";
import Request from "../views/Request.vue";
// import Manage from "../views/Manage.vue";
import Login from "../views/Login.vue";
// import Calendar from "../views/Calendar.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import DashboardSD from "../views/DashboardSD.vue";
import ErrorP from "../views/Error.vue";
import Customer from "../views/Customer.vue"
import {store} from "./store";

// Create the router instance
const router = createRouter({
  // Provide the history implementation to use.
  history: createWebHistory(),
  // Define some route records, each route record should map to a component.
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/error", name: "error", component: ErrorP },
    // { path: "/manage", name: "manage", component: Manage },
    { path: "/request", name: "about", component: Request },
    { path: "/login", name: "login", component: Login },
    { path: "/signup", name: "signup", component: SignUp },
    { path: "/profile", name: "profile", component: Profile, meta: {roles: ['ROLE_EMPLOYEE']} },
    { path: "/dashboardSD", name: "dashboardSD", component: DashboardSD, meta: {roles: ['ROLE_DIRECTOR']} },
    { path: "/customer", name: "error", component: Customer, meta: {roles: ['ROLE_CUSTOMER']} },
  ],
});


export async function setupRouter(app) {
  setupGuard(router);
  app.use(router);
}


router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.roles){
    if (!store.hasRole(to.meta.roles)){
      store.logOut();
      next({
        path: "/login",
      });
    }else {
      next()
    }
  }else {
    next()
  }
});

export default router;
