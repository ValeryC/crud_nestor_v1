<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12">
        <h3 class="text-center">Add User</h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>id</label>
            <input type="text" class="form-control" v-model="user.id" required>
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
            <input type="text" class="form-control" v-model="user.phone" required>
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
              <button class="btn btn-primary btn-block">Add User</button>
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
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("User successfully created!");
          this.user.id = "";
          this.user.firstname = "";
          this.user.lastname = "";
          this.user.birthday = "";
          this.user.phone = "";
          this.user.nationality = "";
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
