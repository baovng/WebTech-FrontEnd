<template>
  <body class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container-xl px-4">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <!-- Basic registration form-->
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header justify-content-center">
                    <h3 class="fw-light my-4">Create Account</h3>
                  </div>
                  <div class="card-body">
                    <!-- Registration form-->
                    <form @submit.prevent="signUp()">
                      <!-- Form Row-->
                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (first name)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputFirstName"
                              >First Name</label
                            >
                            <input
                                required
                              class="form-control"
                              id="inputFirstName"
                              type="text"
                              v-model.trim="firstName"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group (last name)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputLastName"
                              >Last Name</label
                            >
                            <input
                                required
                              class="form-control"
                              id="inputLastName"
                              type="text"
                              v-model.trim="lastName"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Form Group (email address)            -->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email</label
                        >
                        <input
                            required
                          class="form-control"
                          id="inputEmailAddress"
                          type="email"
                          v-model.trim="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                      </div>
                      <!-- Form Row    -->
                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (password)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputPassword"
                              >Password</label
                            >
                            <input
                                required
                              class="form-control"
                              id="inputPassword"
                              type="password"
                              v-model.trim="password"
                              placeholder="Enter password"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group (confirm password)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputConfirmPassword"
                              >Confirm Password</label
                            >
                            <input
                                required
                              class="form-control"
                              v-model.trim="password2"
                              id="inputConfirmPassword"
                              type="password"
                              placeholder="Confirm password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="alert alert-danger mt-3" role="alert" v-if="error">
                        {{ error }}
                      </div>
                      <!-- Form Group (create account submit)-->
                      <button type="submit"
                        class="btn btn-primary btn-block"
                        href="auth-login-basic.html"
                        >Create Account</button
                      >
                      {{$route.params.employee}}
                    </form>
                  </div>
                  <div class="card-footer text-center">
                    <div class="small">
                      <router-link to="/login"
                        >Have an account? Go to login</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer class="footer-admin mt-auto footer-dark">
          <div class="container-xl px-4">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div class="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>


<script>
import SignupValidations from '../services/SignupValidations';
import {registerCustomer} from '../apis/userApi';

import {store} from '../router/store';

export default {
  data(){
    return{
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      errors: [],
      error: '',
    };
  },
  methods:{
    async signUp(){
      if (this.password !== this.password2){
        this.error = 'Password not match'
      }else {
        if (this.$route.params.employee !== undefined){
          const res = await registerCustomer({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            roleList: ['ROLE_EMPLOYEE']
          })
          if(res.status !== undefined && !res.status){
            this.error = res.message;
          }else if (res.status !== undefined && res.status){
            this.$router.push('/')
          }
        }else {
          const res = await registerCustomer({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            roleList: []
          })

          if(res.status !== undefined && !res.status){
            this.error = res.message;
          }else if (res.status !== undefined && res.status){
            this.$router.push('/login')
          }
        }
      }
    }
  }
}

</script>
