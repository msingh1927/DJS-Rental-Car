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
	<div class="sidebar">
		<div id="filter-form">
			<h3>Refine Search</h3>
			<!-- Make -->
			<div>
				Select Make:<br/>
				<select class="filter-select" v-model="makeFilterVal">
					<option>Any</option>
					<option v-for="(item, i) in makes" :key="i" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<p/>
			<!-- Model -->
			<div>
				Select Model:<br/>
				<select class="filter-select" v-model="modelFilterVal">
					<option>Any</option>
					<option v-for="(item, i) in models" :key="i" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<p/>
			<!-- Year -->
			<div>
				Input Year:<br/>
				<input class="filter-input" type="number" v-model="yearFilterVal" />
			</div>
			<p/>
			<!-- Color -->
			<div>
				Select Color:<br/>
				<select class="filter-select" v-model="colorFilterVal">
					<option>Any</option>
					<option v-for="(item, i) in colors" :key="i" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<p/>
			<!-- Type -->
			<div>
				Select Vehicle Type:<br/>
				<select class="filter-select" v-model="typeFilterVal">
					<option>Any</option>
					<option v-for="(item, i) in types" :key="i" :value="item">
						{{ item }}
					</option>
				</select>
			</div>
			<p/>
			<!-- Min Capacity -->
			<div>
				Input Minimum Seat Capacity:<br/>
				<input class="filter-input" type="number" v-model="minCapacityFilterVal" />
                
			</div>
			<p/>
			<!-- Max Price -->
			<div>
				Input Max Price:<br/>
				<input class="filter-input" type="number" v-model="maxPriceFilterVal" />
                
			</div>
			<!-- Buttons -->
			<input type="button" class="btn filter-btn" id="filter-button" v-on:click="filterVehicles" value="Apply Filter"/>
			<br/>
			<input type="button" class="btn clear-filter-btn" id="clear-filter-button" v-on:click="resetFilters" value="Clear Filters"/>
		</div>
	</div>
	<!-- Grid -->
	<div id="vehicles-grid">
	<ul :style="gridStyle" class="card-list">
		<li v-for="(item) in items" :key="item.id" class="card-item">
			<div class="car-wrap rounded" id="item+{{item.id}}">
				<img class="car-img rounded" :src="item.imgUrl" :alt="item.make"/>
				<div class="text">
				<h2 class="mb-0">{{item.year}} {{item.make}} {{item.model}}</h2>
				<div class="d-flex mb-3">
					<p class="price ml-auto">${{item.pricePerDay}}<span>/day</span></p>
				</div>
				<router-link class="btn more-info-btn" to="/more-info">More Info</router-link>
				</div>
			</div>
		</li>
	</ul>
	</div>
  </body>
</template>
<script>
import axios from 'axios'
	export default {
		name: "CarListView",
		data() {
			return {
				items: null,
				makes: null,
				models: null,
				colors: null,
				types: null,
				makeFilterVal: "",
				modelFilterVal: "",
				colorFilterVal: "",
				yearFilterVal: "",
				minCapacityFilterVal: "",
				maxPriceFilterVal: "",
				typeFilterVal: ""
			}
		},
		mounted() {
			//get the initial list of vehicles
			axios.get('http://localhost:8080/getAllVehicles')
				.then(response => this.items = response.data)
				.catch(error => console.log(error));
			//get all vehicle makes
			axios.get('http://localhost:8080/getAllMakes')
				.then(response => this.makes = response.data)
				.catch(error => console.log(error));
			//get all vehicle models
			axios.get('http://localhost:8080/getAllModels')
				.then(response => this.models = response.data)
				.catch(error => console.log(error));
			//get all vehicle colors
			axios.get('http://localhost:8080/getAllColors')
				.then(response => this.colors = response.data)
				.catch(error => console.log(error));
			//get all vehicle colors
			axios.get('http://localhost:8080/getAllVehicleTypes')
				.then(response => this.types = response.data)
				.catch(error => console.log(error));
		},
		computed: {
			gridStyle() { // defines dimensions of grid
				return {
					gridTemplateColumns: "repeat(3, minmax(100px, 1fr))"
				}
			},
		},
		methods: {
			filterVehicles() {
				const params = {
					"make": this.makeFilterVal,
					"model": this.modelFilterVal,
					"color": this.colorFilterVal,
					"year": this.yearFilterVal,
					"minCapacity": this.minCapacityFilterVal,
					"maxPrice": this.maxPriceFilterVal,
					"type": this.type
				};
				axios.get('http://localhost:8080/getFilteredVehicles',  { params })
					.then(response => this.items = response.data)
					.catch(error => console.log(error));
			},
			resetFilters() {
				this.makeFilterVal = "";
				this.modelFilterVal = "";
				this.colorFilterVal = "";
				this.yearFilterVal = "";
				this.minCapacityFilterVal = "";
				this.maxPriceFilterVal = "";
				this.type = "";
				axios.get('http://localhost:8080/getFilteredVehicles')
					.then(response => this.items = response.data)
					.catch(error => console.log(error));
			}
			
		}
	}
</script>
<style>
body {
	background-color: #cccccc;
}
#vehicles-grid {
	margin-top: 100px;
	margin-left: 20%;
	padding-right: 5%;
	height: 85%;
	width: 80%;
	position: fixed;
	overflow-y:scroll;
}
.navbar {
	position: fixed;
	height: 8%;
	width: 100%;
	z-index: 50000;
}
.sidebar {
	position: absolute;
	width: 20%;
	height: 100%;
	background-color: rgb(213, 57, 0);
	color: white;
}
#filter-form {
	margin-top: 80px;
	padding: 20px;
}
.filter-select, .filter-input {
	width: 60%;
}
.filter-btn {
	background-color: black;
	color: white;
	margin-top: 30px;
}
.filter-btn:hover {
	background-color: white;
	color: black;
}
.clear-filter-btn {
	background-color: gray;
	color: white;
	margin-top: 20px;
}
.clear-filter-btn:hover {
	background-color: white;
	color: orangered;
}
.card-list {
	display: grid;
	height: 97%;
	grid-gap: 1em;
}
ul {
	list-style-type: none;
}
.car-wrap img {
  width: 100%;
  height: auto;
}
.more-info-btn {
	width: 100%;
	background-color: rgb(157, 55, 55);
	color: white;
}
.more-info-btn:hover {
	background-color: rgb(203, 119, 119);
	color: white;
}
.car-wrap {
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.06);
  background: #fff;
}
.car-wrap .img {
  width: 100%;
  height: 220px;
}
.car-wrap .text {
  border-top: none;
  padding: 20px 30px 30px;
}
.car-wrap .text .price {
  color: #1089ff;
  margin-bottom: 0;
  font-weight: 600;
}
.car-wrap .text .price span {
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.3);
}
.car-wrap .text h2 {
  font-size: 20px;
  font-weight: 500;
}
.car-wrap .text h2 a {
  color: #000000;
}
.car-wrap .text span.cat {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.2);
  display: block;
  margin-bottom: 0;
}
.car-wrap .text p.d-block {
  width: 100%;
}
.car-wrap .text p.d-block a {
  width: 50%;
}

</style>