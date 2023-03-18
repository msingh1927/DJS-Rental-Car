<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">DJS Rental</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">


        <li>
          <router-link class="nav-link" to="/carService">Rental Fleet</router-link>
        </li>

        <li>
          <router-link class="nav-link" to="/BookedCars">Booked Vehicles</router-link>
        </li>





        <li class="nav-item"></li>
      </ul>

      &nbsp;


    </div>
  </nav>
  <body></body>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
body {
  background-color: #cccccc;
  /* background-image: url(../assets/images/car12.png);
  background-repeat: no-repeat, repeat; */
}
a:link {
  text-decoration: none;
  padding-left: 15px;
}
</style>
