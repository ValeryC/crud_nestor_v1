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
            <input type="text" class="form-control" v-model="flat.nameflat" required>
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

          <button @click="addRoom">Add another previous room</button>
          <div class="previous" v-for="(applicant, counter) in applicants" v-bind:key="counter">
            <button @click="deleteRoom(counter)">X</button>
            <label for="duration">{{counter+1}}number</label>
            <input type="text" v-model="applicant.number" required>
            <label for="duration">area</label>
            <input type="text" v-model="applicant.area" required>
            <label for="duration">price</label>
            <input type="text" v-model="applicant.price" required>
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
      flat: {},
      applicants: [
        {
          number: "",
          area: "",
          price: ""
        }
      ]
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
          this.flat.nameflat = "";
          this.flat.street = "";
          this.flat.zipcode = "";
          this.flat.rooms = "";
          this.$router.push("/listflat");
        })
        .catch(error => {
          console.log(error);
        });
    },
    addRoom() {
      this.applicants.push({
        number: "",
        area: "",
        price: ""
      });
    },
    deleteRoom(counter) {
      this.applicants.splice(counter, 1);
    }
  }
};
</script>

<style scoped>
.row {
  padding-top: 70px;
}
</style>
