<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12">
        <h3 class="text-center">Add flat</h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>idflat</label>
            <input type="text" class="form-control" v-model="flat.idflat" required>
          </div>

          <div class="form-group">
            <label>Number</label>
            <input type="text" class="form-control" v-model="flat.numberflat" required>
          </div>

          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="flat.name" required>
          </div>

          <div class="form-group">
            <label>Street</label>
            <input type="text" class="form-control" v-model="flat.street" required>
          </div>

          <div class="form-group">
            <label>Zipcode</label>
            <input type="text" class="form-control" v-model="flat.zipcode" required>
          </div>

          <div class="form-group">
            <label>rooms</label>
            <input type="text" class="form-control" v-model="flat.rooms" required>
          </div>

          <div class="form-group">
            <div class="col-4 offset-4" align="center">
              <button class="btn btn-primary btn-block">Add flat</button>
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
      flat: {}
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("flats")
        .add(this.flat)
        .then(() => {
          alert("Flat successfully created!");
          this.flat.idflat = "";
          this.flat.number = "";
          this.flat.name = "";
          this.flat.street = "";
          this.flat.zipcode = "";
          this.flat.rooms = "";
          this.$router.push("/listflat");
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
