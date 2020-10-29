<template>
  <nav class="my-nav navbar navbar-default">
    <div class="container-fluid">
      <div class="nopadding_margin">
        <div class="col-md-12 col-xs-12 col-lg-12">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" class="navbar-brand name_logo">Welcome at Nestor</router-link>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul
              class="nav navbar-nav navbar-right"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <li>
                <router-link to="/createflat">Create Flat</router-link>
              </li>
              <li>
                <router-link to="/listflat">List of flat</router-link>
              </li>

              <li>
                <router-link to="/adduser">Add user</router-link>
              </li>
              <li>
                <router-link to="/listuser">List USer</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"  scoped>
@import "Navbar.sass";
</style>



    
        
         
   
