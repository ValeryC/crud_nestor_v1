<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./views/Navbar";
//import "../node_modules/materialize-css/dist/css/materialize.min.css";
//import "../node_modules/materialize-css/dist/js/materialize.min.js";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style scoped>
</style>