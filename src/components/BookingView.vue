<template>
    <!-- Navbar -->
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
			<router-link class="nav-link" to="/home">Home</router-link>
			</li>
			<li>
			<router-link class="nav-link" to="/carlist">View All Vehicles</router-link>
			</li>
			<li>
			<router-link class="nav-link" to="/booked">Find Booked Vehicle</router-link>
			</li>
		</ul>
		</div>
	</nav>
    <body>
    <div>
    <div class="booking-forms">
      <div class="row d-flex justify-content-center">
        <div class="col-9">
          <div id="add-veh-card" class="card" style="border-radius: 1rem">
            <div class="card-body p-5 text-black">
              <form>
                <h3 class="fw-normal mb-3 pb-3">Add a Vehicle</h3>
                <!-- Make -->
                <input type="text" id="add-make" v-model="addMake" class="form-control form-control-lg"/>
                <label class="form-label mb-3" for="add-make">Make</label>
               
                <div class="pt-1 mb-4">
                  <input type="button" class="btn btn-dark btn-lg btn-block" id="add-vehicle-button" v-on:click="addVehicle" value="Add Vehicle"/>
                  <p/>
                  {{vehicle.make}}
                  {{vehicle.model}}
                  {{vehicle.color}}
                  <div id="added-veh-msg" v-if="addVehMsg">Vehicle Added</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>
</template>
<script>
export default {
    name: "BookingView",
    data() {
    },
    computed: {
      vehicle() {
        return this.$route.params;
      }
    },
    methods() {

    }
}
</script>
<style>
.booking-forms {
  position: absolute;
  margin-top: 10%;
}
</style>