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
            <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li>
            <router-link class="nav-link" to="/carService">Rental Fleet</router-link>
            </li>
            <li>
            <router-link class="nav-link" to="/BookedCars">Booked Vehicles</router-link>
            </li>
        </ul>
        </div>
    </nav>
  <body>
    <!-- Grid -->
    <div id="vehicles-grid">
    <ul :style="gridStyle" class="card-list">
        <li v-for="(item) in items" :key="item.id" class="card-item">
            {{ item }}
            <p/>
            Example get attribute: make = {{item.make}}
        </li>
    </ul>
    </div>
  </body>
</template>
<script>
import axios from 'axios'
    export default {
        name: "HomeView",
        data() {
            return {
                items: null
            }
        },
        mounted() {
            // example to get all vehicles
            /*axios.get('http://localhost:8080/getAllVehicles')
                .then(response => this.items = response.data)
                .catch(error => console.log(error));*/
            
            // example using params for filtering
            const params = {
                "color": "White",
                "minCapacity": 7
            };
            axios.get('http://localhost:8080/getFilteredVehicles',  { params })
                .then(response => this.items = response.data)
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
            // need click methods to use when a car is clicked
        }
    }
</script>
<style>
    body {
        background-color: #cccccc;
    }
    #vehicles-grid {
        margin: 50px;
    }
    a:link {
        text-decoration: none;
    }
    .card-list {
        display: grid;
        grid-gap: 1em;
    }
    .card-item {
        background-color: dodgerblue;
        padding: 2em;
    }
    ul {
        list-style-type: none;
    }
</style>