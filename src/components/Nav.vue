<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SuperFrog Scheduler</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/request">Request</router-link>
          <router-link v-if="!store.isLogIn" class="nav-link" to="/login">Login</router-link>
          <router-link v-if="!store.isLogIn" class="nav-link" to="/signup">Sign Up</router-link>
          <router-link v-if="store.isLogIn && store.hasRole(['ROLE_EMPLOYEE'])" class="nav-link" to="/profile">SuperFrog</router-link>
          <router-link v-if="store.isLogIn && store.hasRole(['ROLE_DIRECTOR'])" class="nav-link" to="/dashboardSD">Dashboard(SD)</router-link>
          <router-link v-if="store.isLogIn && store.hasRole(['ROLE_CUSTOMER'])" class="nav-link" to="/customer">Customer</router-link>
          <router-link  @click="store.logOut()" v-if="store.isLogIn" class="nav-link" to="/login">LogOut</router-link>
<!--          <router-link v-if="store.isLogIn && store.hasRole(['ROLE_DIRECTOR'])" class="nav-link" :to="{ name: 'addEmployee', params: { employee: true } }">Add Employee</router-link>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {store} from '../router/store';
export default {
  data() {
    return {
      store
    }
  },
  methods:{

  }

};
</script>
