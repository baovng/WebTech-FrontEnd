<template>
  <body class="nav-fixed">
    <!-- Navbar Items-->

    <div id="">
      <div id="">
        <main>
          <!-- Main page content-->
          <div class="container-xl px-4 mt-4">
            <!-- Account page navigation-->

            <hr class="mt-0 mb-4" />
            <div class="row">
              <div class="col-xl-4">
                <!-- Profile picture card-->
              </div>
              <div class="col-xl-12">
                <!-- Account details card-->
                <div class="card mb-4">
                  <div class="card-header">
                    Account Details
                    <p>Logged in as {{ fname }} ({{ role }})</p>
                  </div>
                  <div class="card-body">
                    <form>
                      <!-- Form Row-->
                      <div class="row gx-3 mb-3">
                        <!-- Form Group (first name)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputFirstName"
                            >First name</label
                          >
                          <input
                            class="form-control"
                            id="inputFirstName"
                            type="text"
                            v-model="fname"
                          />
                        </div>
                        <!-- Form Group (last name)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputLastName"
                            >Last name</label
                          >
                          <input
                            class="form-control"
                            id="inputLastName"
                            type="text"
                            v-model="lname"
                          />
                        </div>
                      </div>
                      <!-- Form Row        -->

                      <!-- Form Group (email address)-->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email address</label
                        >
                        <input
                          class="form-control"
                          id="inputEmailAddress"
                          type="text"
                          v-model="input_email"
                        />
                      </div>
                      <!-- Form Row-->
                      <div class="row gx-3 mb-3">
                        <!-- Form Group (phone number)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="Password"
                            >Password</label
                          >
                          <input
                            class="form-control"
                            id="inputPassword"
                            type="tel"
                            placeholder="************"
                            value=""
                          />
                        </div>
                        <!-- Form Group (birthday)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputBirthday"
                            >Confirm Password</label
                          >
                          <input
                            class="form-control"
                            id="confirmPass"
                            type="text"
                            name="confirmPass"
                            placeholder="*************"
                            value=""
                          />
                        </div>
                      </div>
                      <!-- Save changes button-->
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="Update()"
                      >
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div class="card-title">Request Management</div>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Theme</th>
                  <th scope="col">Description</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">Super Frog Assigned</th>
                  <th scope="col">Status</th>
                  <th scope="col">Progress</th>
                </tr>
              </thead>
              <tbody id="userTableBody">
                <Requests :role="role" :username="email"></Requests>
              </tbody>
            </table>
          </div>
        </main>
        <footer class="footer-admin mt-auto footer-light">
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
import { ref } from "vue";
import Rows from "../components/Rows.vue";
import Requests from "../components/Requests.vue";

import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      role: "Customer",
      lusername: "Vanshika",
      email: "test@gmail.com",
      loggedInUser: {},
      fname: "",
      lname: "",
      input_email: "",
      id: "",
    };
  },
  components: {
    Requests,
  },
  methods: {
    async Update() {
      alert("k");
      await axios.patch(`${`http://localhost:3000/users`}/${this.id}`, {
        name: this.fname,
        email: this.input_email,
        lname: this.lname,
      });
    },
  },

  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      this.users = response.data;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].email == this.email) {
          this.loggedInUser = this.users[i];
        }
      }
      //binding values
      this.id = this.loggedInUser.id;
      this.fname = this.loggedInUser.name;
      this.lname = this.loggedInUser.lname;
      this.input_email = this.loggedInUser.email;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
