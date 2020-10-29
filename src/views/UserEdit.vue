<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12">
        <h3 class="text-center">Update User</h3>
        <form @submit.prevent="onUpdateForm">
          <div class="form-group">
            <label>Id</label>
            <input type="text" class="form-control" v-model="user.key" required>
          </div>
          <div class="form-group">
            <label>Firstname</label>
            <input type="text" class="form-control" v-model="user.firstname" required>
          </div>
          <div class="form-group">
            <label>Lastname</label>
            <input type="text" class="form-control" v-model="user.lastname" required>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="number" class="form-control" v-model="user.phone" required>
          </div>

          <div class="form-group">
            <label>Birthday</label>
            <input type="text" class="form-control" v-model="user.birthday" required>
          </div>

          <div class="form-group">
            <label>Nationality</label>
            <input type="text" class="form-control" v-model="user.nationality" required>
          </div>

          <div class="form-group">
            <div class="col-4 offset-4" align="center">
              <button class="btn btn-primary btn-block">Edit User</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then(doc => {
        this.user = doc.data();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("User successfully updated!");
          this.$router.push("/listuser");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.row {
  padding-top: 70px;
}
</style>