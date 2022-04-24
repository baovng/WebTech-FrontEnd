<script>
import Rows from "../components/Rows.vue";
import Requests from "../components/Requests.vue";
import Reports from "../components/Reports.vue"
import {allUsers, registerUser} from '../apis/userApi';
import {store} from '../router/store';

export default {
  name: "Table",
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      selected: "",
      testbool: false,
      role: '',
      error: '',
      userList: []
    };
  },
  components: {
    Rows,
    Requests,
    Reports
  },
  methods: {
    async users(){
      const res = await allUsers();
      this.userList = res.body;
    },
    async addUser() {

      if (this.password !== this.password2) {
        this.error = 'Password not match'
      } else {
        let body = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          roleList: [this.role]
        }
        let res;
        if (this.role === 'ROLE_DIRECTOR') {
          res = await registerUser(body)
        } else if (this.role === 'ROLE_CUSTOMER') {
          res = await registerUser(body)
        } else if (this.role === 'ROLE_EMPLOYEE') {
          res = await registerUser(body)
        }
        if(res.status !== undefined && !res.status){
          this.error = res.message;
        }else {
          location.reload();
        }
      }
      // var Name = this.inputName;
      // var Email = this.inputEmail;
      // var Role = this.selected;
      // const res = axios.post(`http://localhost:3000/users`, {
      //   name: Name,
      //   email: Email,
      //   role: Role,
      //   inactive: false,
      // });
      // console.log(res);
      // location.reload();
    },
  },
  mounted() {
    this.users();
  }
};
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal3"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addUser()">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">First Name</label>
              <input
                  required
                v-model="firstName"
                type="text"
                class="form-control"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Last Name</label>
              <input
                  required
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="recipient-email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Password</label>
              <input
                  required
                  type="password"
                  class="form-control"
                  id="recipient-email"
                  v-model="password"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Confirm Password</label>
              <input
                  required
                  type="password"
                  class="form-control"
                  id="recipient-email"
                  v-model="password2"
              />
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Role</label>
              <select required class="form-control" v-model="role">
                <option disabled value="">Please select one</option>
                <option value="ROLE_CUSTOMER">Customer</option>
                <option value="ROLE_EMPLOYEE">SuperFrog</option>
                <option value="ROLE_DIRECTOR">Spirit Director</option>
              </select>
            </div>
            <div class="alert alert-danger mt-3" role="alert" v-if="error">
              {{ error }}
            </div>
            <br>
            <div class="form-group" style="text-align: right">
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
<!--        <div class="modal-footer">-->
<!--          <button-->
<!--            class="btn btn-secondary"-->
<!--            type="button"-->
<!--            data-bs-dismiss="modal"-->
<!--          >-->
<!--            Close</button-->
<!--          ><button-->
<!--            class="btn btn-primary"-->
<!--            data-bs-dismiss="modal"-->
<!--            type="button"-->
<!--            @click="addUser()"-->
<!--          >-->
<!--            Save changes-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </div>
  </div>


<body class="nav-fixed">
    <!-- Navbar Items-->

    <div id="">
      <div id="">
        <main>
    <div class="containerxl px-4 mt-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Director User Management</h5>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            Add User
          </button>
        </div>
      </div>
<!--      <div-->
<!--        class="modal fade"-->
<!--        id="exampleModal2"-->
<!--        tabindex="-1"-->
<!--        role="dialog"-->
<!--        aria-labelledby="exampleModalLabel"-->
<!--        aria-hidden="true"-->
<!--      >-->
<!--        <div class="modal-dialog" role="document">-->
<!--          <div class="modal-content">-->
<!--            <div class="modal-header">-->
<!--              <h5 class="modal-title" id="exampleModalLabel">Add User</h5>-->
<!--              <button-->
<!--                type="button"-->
<!--                class="close"-->
<!--                data-dismiss="modal"-->
<!--                aria-label="Close"-->
<!--              >-->
<!--                <span aria-hidden="true">&times;</span>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="modal-body">-->
<!--              <form @submit.prevent="addUser()">-->
<!--                <div class="form-group">-->
<!--                  <label for="recipient-name" class="col-form-label">First Name</label>-->
<!--                  <input-->
<!--                      required-->
<!--                      v-model="firstName"-->
<!--                      type="text"-->
<!--                      class="form-control"-->
<!--                      id="recipient-name"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="recipient-name" class="col-form-label">Last Name</label>-->
<!--                  <input-->
<!--                      required-->
<!--                      v-model="lastName"-->
<!--                      type="text"-->
<!--                      class="form-control"-->
<!--                      id="recipient-name"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="message-text" class="col-form-label">Email</label>-->
<!--                  <input-->
<!--                      type="email"-->
<!--                      class="form-control"-->
<!--                      id="recipient-email"-->
<!--                      v-model="email"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="message-text" class="col-form-label">Password</label>-->
<!--                  <input-->
<!--                      required-->
<!--                      type="password"-->
<!--                      class="form-control"-->
<!--                      id="recipient-email"-->
<!--                      v-model="password"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="message-text" class="col-form-label">Confirm Password</label>-->
<!--                  <input-->
<!--                      required-->
<!--                      type="password"-->
<!--                      class="form-control"-->
<!--                      id="recipient-email"-->
<!--                      v-model="password2"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="message-text" class="col-form-label">Role</label>-->
<!--                  <select class="form-control" v-model="selected">-->
<!--                    <option disabled value="">Please select one</option>-->
<!--                    <option value="ROLE_CUSTOMER">Customer</option>-->
<!--                    <option value="ROLE_EMPLOYEE">SuperFrog</option>-->
<!--                    <option value="ROLE_DIRECTOR">Spirit Director</option>-->
<!--                  </select>-->
<!--                </div>-->
<!--                <br>-->
<!--                <div class="form-group" style="text-align: right">-->
<!--                  <button type="button" class="btn btn-secondary" data-dismiss="modal">-->
<!--                    Close-->
<!--                  </button>-->
<!--                  <button type="submit" class="btn btn-primary">-->
<!--                    Save changes-->
<!--                  </button>-->
<!--                </div>-->
<!--              </form>-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="modal-footer">&ndash;&gt;-->
<!--&lt;!&ndash;              <button&ndash;&gt;-->
<!--&lt;!&ndash;                type="button"&ndash;&gt;-->
<!--&lt;!&ndash;                class="btn btn-secondary"&ndash;&gt;-->
<!--&lt;!&ndash;                data-dismiss="modal"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                Close&ndash;&gt;-->
<!--&lt;!&ndash;              </button>&ndash;&gt;-->
<!--&lt;!&ndash;              <button type="button" @click="addUser" class="btn btn-primary">&ndash;&gt;-->
<!--&lt;!&ndash;                Save changes&ndash;&gt;-->
<!--&lt;!&ndash;              </button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
<!--            <th scope="col">Actions</th>-->
          </tr>
        </thead>
        <tbody id="userTableBody">
          <tr v-for="user in userList">
            <td>{{user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.userName}}</td>
            <td>{{user.roles[0].name}}</td>
            <td>{{user.userStatus}}</td>
<!--            <td>{{user.firstName}}</td>-->
          </tr>
        </tbody>
      </table>
    </div>

    <div class="containerxl px-4 mt-4">
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
            <th scope="col">Actions</th>
            <th scope="col">Assign</th>
            <th scope="col">Progress</th>

          </tr>
        </thead>
        <tbody id="userTableBody">
          <Requests :role="role"></Requests>
        </tbody>
      </table>
      <Reports></Reports>
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

<style scoped>
a {
  color: purple;
}

.card-title {
  color: white;
}

.card-body {
  background-color: #0061f2;
}
</style>
