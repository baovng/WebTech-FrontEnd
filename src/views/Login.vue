<template>
  <body class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container-xl px-4">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <!-- Basic login form-->
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header justify-content-center">
                    <h3 class="fw-light my-4">Login</h3>
                  </div>
                  <div class="card-body">
                    <!-- Login form-->
                    <form @submit.prevent="onLogin()">
                      <!-- Form Group (email address)-->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email</label
                        >
                        <input
                          class="form-control"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Enter email address"
                          name="email"
                          v-model.trim="email"
                        />
                        <div class="alert alert-danger mt-3" role="alert" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                      </div>
                      <!-- Form Group (password)-->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputPassword"
                          >Password</label
                        >
                        <input
                          class="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Enter password"
                          name="password"
                          v-model.trim="password"
                        />
                        <div class="alert alert-danger mt-3" role="alert" v-if="errors.password">
                            {{ errors.password }}
                        </div>
                      </div>
                      <!-- Form Group (remember password checkbox)-->
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            id="rememberPasswordCheck"
                            type="checkbox"
                            value=""
                          />
                          <label
                            class="form-check-label"
                            for="rememberPasswordCheck"
                            >Remember password</label
                          >
                        </div>
                      </div>
                      <div class="alert alert-danger mt-3" role="alert" v-if="error">
                        {{ error }}
                      </div>
                      <!-- Form Group (login box)-->
                      <div
                        class="d-flex align-items-center justify-content-between mt-4 mb-0"
                      >
                        <a class="small" href="auth-password-basic.html"
                          >Forgot Password?</a
                        >
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                          <!-- <router-link to="/dashboardSD" class="btn btn-primary"
                          >Login</router-link> -->
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center">
                    <div class="small">
                      <router-link to="/signup"
                        >Need an account? Sign up!</router-link
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
import {login} from '../apis/userApi';
import {store} from '../router/store';
  export default {
      data(){
        return{
            email: '',
            password: '',
            errors: [],
            error: '',
        };
      },
      methods:{
        async onLogin(){
          //check the validations
          //i ( validation of) {
            //do the signup
          //}
          //else show errors

          let validations = new SignupValidations(
                this.email,
                this.password,
            );
            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }
            this.error = '';
           const res = await login({userName: this.email, password: this.password})
          if(res.status !== undefined && !res.status){
            this.error = "Invalid Login details";
          }else if (res.token !== null){
            console.log("done")
            store.logIn();
            localStorage.setItem("-token-",res.token);
            localStorage.setItem("-roles-",res.roles.join(","));
            this.$router.push('/')
          }
        },
      },
    
  };
</script>
