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
  <div class="page-body">
    <div class="py-5 px-5 d-flex justify-content-center" style="margin-top: 50px">
      
      
     <!-- Right column with vehicle info-->
      <div id="vehicle-info-card" class="card col-3">
        <div class="card-body row">
          <h4>Selected Vehicle</h4><br/>
          <div class="col-5">
            <img class="car-img rounded" :src="vehicle.imgUrl"/>
          </div>
          <div class="col-7">
            <strong>Year:</strong> {{vehicle.year}}<br/>
            <strong>Make:</strong> {{vehicle.make}}<br/>
            <strong>Model:</strong> {{vehicle.model}}<br/>
            <strong>Color:</strong> {{vehicle.color}}<br/>
            <strong>Year:</strong> {{vehicle.year}}<br/>
            <strong>Max. Capacity:</strong> {{vehicle.capacity}} people<br/>
            <strong>Price:</strong> ${{vehicle.pricePerDay}}/day
          </div>
          <DatePicker v-model="date" />
        </div>
      </div>
          
      <div class="card col-4">
        <div class="card-body">
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


      <div id="vehicle-info-card" class="card col-4">
        <div class="card-body p-5 text-black">
          test
        </div>
      </div>

    </div>
  </div>
  </body>
</template>
<script>
import { ref } from 'vue';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
    name: "BookingView",
    components: { 
      DatePicker
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    computed: {
      vehicle() {
        return this.$route.params;
      },
      date() {
        return ref();
      }
    },
    methods() {

    }
}
</script>
<style>
.page-body{
  position: absolute;
  width: 100%;
}
.card {
  border-radius: 1rem;
  margin: 30px;
}
.card-body {
  padding: 8%;
}
.car-img {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 15px;
}
</style>