<script>
// import { ref } from 'vue';
// import axios from 'axios';

// defineProps({
//   id: String,
//   name: String,
//   email: String,
//   role: String,
//   status: String,
// });
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

import axios from 'axios'

export default {
  name: 'Requests',
  data() {
    return {
      requests: [],
      filteredreq: [],
      superfrogs: [],
      users: [],
      admin: 0,
      superfrog: 0,
      customer: 0,
      current: '',
    }
  },
  props: {
    role: String,
    username: String,
  },
  computed: {
    roledecider() {
      if (this.role == 'Admin') {
        this.admin = 1
      }
      if (this.role == 'SuperFrog') {
        this.superfrog = 1
      }
      if (this.role == 'Customer') {
        this.customer = 1
      }
    },

    reqbasedonUser() {
      for (var i = 0; i < this.requests.length; i++) {
        if (this.role == 'SuperFrog') {
          if (
            this.requests[i].assigned == this.username ||
            this.requests[i].status == 'Approved'
          ) {
            this.filteredreq.push(this.requests[i])
          }
        }
        if (this.role == 'Customer') {
          if (
            this.requests[i].email == this.username
          ) {
            this.filteredreq.push(this.requests[i])
          }
        }
      }
      if (this.role == 'SuperFrog') {
        this.requests = this.filteredreq
      }
      if (this.role == 'Customer') {
        this.requests = this.filteredreq
      }
    },

    superfrogPopulate() {
      for (var i = 0; i < this.users.length; i++) {
        if (
          this.users[i].role == 'SuperFrog' &&
          this.users[i].inactive == false
        ) {
          this.superfrogs.push(this.users[i])
        }
      }
    },
  },

  methods: {
    async assigner(reqid, frogid, email) {
      this.requests = this.requests.map((req) => {
        if (req.id === reqid) {
          req.status = 'Assigned'
          req.assigned = email
        }
        return req
      })
      await axios
        .patch(`${`http://localhost:3000/requests`}/${reqid}`, {
          status: 'Assigned',
          assigned: email,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    async checker(id, status1) {
      var temp = ''
      this.requests = this.requests.map((req) => {
        if (req.id === id) {
          req.status = status1
          if (status1 == 'Assigned' || status1 == 'Finished') {
            temp = this.username
          } else {
            temp = ''
          }
          req.assigned = temp
        }
        return req
      })
      await axios
        .patch(`${`http://localhost:3000/requests`}/${id}`, {
          status: status1,
          assigned: temp,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    viewProgress(id) {
      var curr_status = ''
      for (var i = 0; i < this.requests.length; i++) {
        if (this.requests[i].id == id) {
          curr_status = this.requests[i].status
        }
      }
      console.log(curr_status)
      this.current = curr_status
    },

    onceAWeek(){

    }
  },

  mounted() {
    this.roledecider
  },
  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`http://localhost:3000/requests`)
      const response_super = await axios.get(`http://localhost:3000/users`)
      this.users = response_super.data
      this.requests = response.data
    } catch (e) {
      this.errors.push(e)
    }
    this.reqbasedonUser
    this.superfrogPopulate
  },
}
</script>

<template>
  <!-- Modal -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">
            Progress
          </h5>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="step mb-5">
            <div
              class="step-item"
              :class="current == 'Created' ? 'active' : ''"
            >
              <a class="step-item-link" href="">Created</a>
            </div>
            <div
              class="step-item"
              :class="current == 'Approved' ? 'active' : ''"
            >
              <a class="step-item-link" href="">Approved</a>
            </div>
            <div
              class="step-item"
              :class="current == 'Signed Up' ? 'active' : ''"
            >
              <a class="step-item-link" href="">Signed Up</a>
            </div>
            <div
              class="step-item"
              :class="current == 'Assigned' ? 'active' : ''"
            >
              <a class="step-item-link" href="">Assigned</a>
            </div>
            <div
              class="step-item"
              :class="current == 'Finished' ? 'active' : ''"
            >
              <a class="step-item-link" href="">Finished</a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="button" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal End -->
  <tr v-for="req in requests" :key="req.id">
    <td scope="col">{{ req.id }}</td>
    <td scope="col">{{ req.ename }}</td>
    <td scope="col">{{ req.date }}</td>
    <td scope="col">{{ req.stime }}</td>
    <td scope="col">{{ req.etime }}</td>
    <td scope="col">{{ req.theme }}</td>
    <td scope="col">{{ req.desc }}</td>
    <td scope="col">{{ req.email }}</td>
    <td scope="col">{{ req.location }}</td>
    <td scope="col">{{ req.assigned }}</td>
    <td scope="col">{{ req.status }}</td>
    <td v-if="admin" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Status
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            @click="checker(req.id, 'Approved')"
            class="dropdown-item"
            href="#!"
          >
            Approved
          </a>
          <a class="dropdown-item" @click="checker(req.id, 'Denied')" href="#!">
            Denied
          </a>
        </div>
      </div>
    </td>

    <td v-if="admin" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton1"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Assign
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a
            class="dropdown-item"
            v-for="frog in superfrogs"
            :key="frog.id"
            @click="assigner(req.id, frog.id, frog.email)"
          >
            {{ frog.name }}
          </a>
        </div>
      </div>
    </td>

    <td v-if="superfrog" scope="col">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            v-if="req.status == 'Approved'"
            class="dropdown-item"
            @click="checker(req.id, 'Assigned')"
          >
            Sign Up
          </a>
          <a
            v-if="req.status == 'Assigned'"
            class="dropdown-item"
            @click="checker(req.id, 'Finished')"
          >
            Finish
          </a>
          <a v-if="req.status == 'Finished' || req.status == 'Denied'">
            Already Finished
          </a>
          <a v-else class="dropdown-item">Wait for Director</a>
        </div>
      </div>
    </td>
    <td>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
        @click="viewProgress(req.id)"
      >
        View
      </button>
    </td>
  </tr>
</template>

<style scoped>
a {
  color: #0061f2;
}

.btn-disabled {
  cursor: not-allowed;
  pointer-events: none;
}
.in {
  color: red;
}
.ac {
  color: green;
}
.card-body {
  background-color: #0061f2;
}
.active {
  color: blue;
}
</style>
