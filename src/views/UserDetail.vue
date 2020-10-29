<template>
  <div class="container">
    <div class="col-md-12 col-lg-12 col-xs-12">
      <h1>Product details</h1>
      <div class="card">
        <div class="card-header">{{firstname}} {{lastname}}</div>
        <div class="card-body">
          <p>ID: {{id}}</p>
          <p>Birthday: {{birthday}}</p>
          <p>nationality: {{nationality}}</p>
          <div class="back">
            <router-link :to="'/listuser'" class="btn btn-primary">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";
export default {
  name: "ProductPage",
  data() {
    return {
      id: "",
      firstname: "",
      lastname: "",
      phone: "",
      birthday: "",
      nationality: ""
    };
  },
  beforeCreate() {
    // db.collection('products').where(doc.id, '==' this.$route.params.id).then(querySnapshot =>{
    //   const products = []
    //   const productsArray = []
    //   let i = 0
    //   querySnapshot.forEach((doc)=>{
    //     productsArray.push(doc.data())
    //     productsArray[i].id = doc.id
    //     products.push(productsArray[i])
    //     i++
    //   })
    //   this.products = products
    // })
    const docRef = db.collection("users").doc(this.$route.params.id);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data().firstname);
          this.id = doc.data().id;
          this.firstname = doc.data().firstname;
          this.lastname = doc.data().lastname;
          this.phone = doc.data().phone;
          this.birthday = doc.data().birthday;
          this.nationality = doc.data().nationality;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

.back {
  text-align: center;
}
</style>