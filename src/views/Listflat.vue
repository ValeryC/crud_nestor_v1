<template>
  <div class="container">
    <div class="col-md-12 col-lg-12 col-xs-12">
      <h1>List of flats</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Idflat</th>
            <th>Number</th>
            <th>Nameflat</th>
            <th>Street</th>
            <th>Zipcode</th>
            <th>Rooms</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flat in Flats" :key="flat.key">
            <td>{{ flat.idflat }}</td>
            <td>{{ flat.numberflat }}</td>
            <td>{{ flat.nameflat }}</td>
            <td>{{ flat.street }}</td>
            <td>{{ flat.zipcode }}</td>
            <td>{{ flat.flatrooms }}</td>
            <!-- <td class="button">
              <router-link
                :to="{name: 'edituser', params: { id: flat.key }}"
                class="btn btn-primary"
              >Edit</router-link>
              <button @click.prevent="deleteUser(flat.key)" class="btn btn-danger">Delete</button>
              <router-link
                :to="{name: 'detailuser', params: { id: flat.key }}"
                class="btn btn-info"
              >Details</router-link>
            </td>-->
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
      Flats: []
    };
  },
  created() {
    db.collection("flats").onSnapshot(snapshotChange => {
      this.Flats = [];
      snapshotChange.forEach(doc => {
        this.Flats.push({
          key: doc.id,
          idflat: doc.data().idflat,
          numberflat: doc.data().numberflat,
          nameflat: doc.data().nameflat,
          street: doc.data().street,
          zipcode: doc.data().zipcode,
          flatrooms: doc.data().flatrooms
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("flats")
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

