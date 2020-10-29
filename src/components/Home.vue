<template>
  <div>
    <!-- /.container-fluid -->
    <div
      id="carousel-example-generic"
      class="my-carousel carousel slide"
      data-ride="carousel"
      data-interval="4000"
    >
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../assets/home4.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home3.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home2.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home6.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home7.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home8.jpg" alt="Carousel image 1">
        </div>
        <div class="item">
          <img src="../assets/home1.jpg" alt="Carousel image 1">
        </div>
      </div>
    </div>

    <!-- CONTENT ABOUT ME & CONTACT -->

    <div class="content_section">
      <section id="UpPage" class="content_sectionControlsCarousel">
        <!-- Controls -->
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
          <!-- <span class="sr-only">Previous</span> -->
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
          <!-- <span class="sr-only">Next</span> -->
        </a>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "Home.scss";
</style>
