<template>
  <div class="container">
    <div class="col-md-12 col-lg-12 col-xs-12">
      <h1>List of users</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.id }}</td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.birthday }}</td>
            <td>{{ user.nationality }}</td>
            <td class="button">
              <router-link
                :to="{name: 'edituser', params: { id: user.key }}"
                class="btn btn-primary"
              >Edit</router-link>
              <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
              <router-link
                :to="{name: 'detailuser', params: { id: user.key }}"
                class="btn btn-info"
              >Details</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      Users: []
    };
  },
  created() {
    db.collection("users").onSnapshot(snapshotChange => {
      this.Users = [];
      snapshotChange.forEach(doc => {
        this.Users.push({
          key: doc.id,
          id: doc.data().id,
          firstname: doc.data().firstname,
          lastname: doc.data().lastname,
          phone: doc.data().phone,
          birthday: doc.data().birthday,
          nationality: doc.data().nationality
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>

<style scope>
.button {
  text-align: center;
}

.btn {
  margin-right: 12px;
  margin-left: 12px;
}
.container {
  padding-top: 70px;
}

h1 {
  text-align: center;
}
</style>

