<template>
  <section class="vh-100.5">
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <!-- Right column with buttons-->
        <div id="menu-buttons-col" class="col-2">
          <button id="toggleAddButton" class="menu-button" :class="{'active-button': showAddPanel}" type="button" @click="showAddPanel=true; showModPanel=false; showDelPanel=false">Add a Vehicle</button>
          <button id="toggleModButton" class="menu-button" :class="{'active-button': showModPanel}" type="button" @click="showAddPanel=false; showModPanel=true; modSuccess=false; showDelPanel=false">Modify a Vehicle</button>
          <button id="toggleDelButton" class="menu-button" :class="{'active-button': showDelPanel}" type="button" @click="showAddPanel=false; showModPanel=false; showDelPanel=true; delSuccess=false">Delete a Vehicle</button>
        </div>
        <div class="col-9">
          <!-- Add Vehicle panel -->
          <div id="add-veh-card" v-show="showAddPanel" class="card" style="border-radius: 1rem">
            <div class="card-body p-5 text-black">
              <form>
                <h3 class="fw-normal mb-3 pb-3">Add a Vehicle</h3>
                <!-- Make -->
                <input type="text" id="add-make" v-model="addMake" class="form-control form-control-lg"/>
                <label class="form-label mb-3" for="add-make">Make</label>
                <!-- Model -->
                <input type="text" id="add-model" v-model="addModel" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-model">Model</label>
                  <!-- year -->
                <input type="number" id="add-year" v-model="addYear" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-year">Year</label>
                  <!-- Color -->
                <input type="text" id="add-color" v-model="addColor" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-color">Color</label>
                  <!-- Capacity -->
                <input type="number" id="add-capacity" v-model="addCapacity" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-capacity">Capacity</label>
                <!-- Price -->
                <input type="number" step="0.01" id="add-price" v-model="addPrice" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-price">Price per Day</label>
                  <!-- Type -->
                <input type="text" id="add-type" v-model="addType" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="add-type">Type of Vehicle</label>
                <div class="pt-1 mb-4">
                  <input type="button" class="btn btn-dark btn-lg btn-block" id="add-vehicle-button" v-on:click="addVehicle" value="Add Vehicle"/>
                </div>
              </form>
            </div>
          </div>

          <!-- Modify Vehicle panel -->
          <div id="modify-veh-card" v-show="showModPanel" class="card" style="border-radius: 1rem">
            <div class="card-body p-5 text-black">
              <form>
                <h3 class="fw-normal mb-3 pb-3">Modify an Existing Vehicle</h3>
                <!-- Vehicle ID -->
                <input type="text" id="mod-vid" v-model="modVid" class="form-control form-control-lg"/>
                <label class="form-label mb-3" for="mod-vid">Vehicle ID</label>
                <div class="pt-1 mb-4">
                  <input type="button" class="btn btn-dark btn-lg btn-block" id="search-veh-button" v-on:click="getVehicle" value="Find Vehicle"/>
                </div>
              </form>
              <p/>
              <form>
                <!-- Make -->
                <input type="text" id="mod-make" v-model="modMake" class="form-control form-control-lg"/>
                <label class="form-label mb-3" for="mod-make">Make</label>
                <!-- Model -->
                <input type="text" id="mod-model" v-model="modModel" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-model">Model</label>
                  <!-- year -->
                <input type="number" id="mod-year" v-model="modYear" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-year">Year</label>
                  <!-- Color -->
                <input type="text" id="mod-color" v-model="modColor" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-color">Color</label>
                  <!-- Capacity -->
                <input type="number" id="mod-capacity" v-model="modCapacity" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-capacity">Capacity</label>
                <!-- Price -->
                <input type="number" step="0.01" id="mod-price" v-model="modPrice" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-price">Price per Day</label>
                  <!-- Type -->
                <input type="text" id="mod-type" v-model="modType" class="form-control form-control-lg"/>
                <label class="form-label mb-4" for="mod-type">Type of Vehicle</label>
                <div class="pt-1 mb-4">
                  <input type="button" class="btn btn-dark btn-lg btn-block" id="mod-vehicle-button" v-on:click="modifyVehicle" value="Update Vehicle"/>
                  <p/>
                  <div id="mod-saved-msg" v-if="modSuccess">Vehicle Updated!</div>
                </div>
              </form>
            </div>
          </div>



          <!-- Delete Vehicle panel -->
          <div id="del-veh-card" v-show="showDelPanel" class="card" style="border-radius: 1rem">
            <div class="card-body p-5 text-black">
              <form>
                <h3 class="fw-normal mb-3 pb-3">Delete an Existing Vehicle</h3>
                <!-- Vehicle ID -->
                <input type="text" id="mod-vid" v-model="delVid" class="form-control form-control-lg"/>
                <label class="form-label mb-3" for="mod-vid">Vehicle ID</label>
                <div class="pt-1 mb-4">
                  <input type="button" class="btn btn-dark btn-lg btn-block" id="del-veh-button" v-on:click="deleteVehicle" value="Delete Vehicle"/>
                  <p/>
                  <div id="deleted-msg" v-if="delSuccess">Vehicle Deleted</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      showAddPanel: true,
      showModPanel: false,
      showDelPanel: false,
      addMake: "",
      addModel: "",
      addYear: "",
      addColor: "",
      addCapacity: "",
      addPrice: "",
      addType: "",
      modVid: "",
      modMake: "",
      modModel: "",
      modYear: "",
      modColor: "",
      modCapacity: "",
      modPrice: "",
      modType: "",
      modSuccess: false,
      delVid: "",
      delSuccess: false
    };
  },
  methods: {
    addVehicle() {
      // call api endpoint to add a vehicle and use data from form
      axios.post('http://localhost:8080/addVehicle', {}, { params: {
          make: this.addMake,
          model: this.addModel,
          year: this.addYear,
          color: this.addColor,
          capacity: this.addCapacity,
          price: this.addType,
          type: this.addType
        }})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getVehicle() {
      // call api endpoint to get a single vehicle by vid, use form input as vid
      const params = {
        "vid": this.modVid
      };
      axios.get('http://localhost:8080/getVehicle',  { params })
          .then(response => {
            const foundVehicle = response.data;
            this.modMake = foundVehicle.make;
            this.modModel = foundVehicle.model;
            this.modYear = foundVehicle.year;
            this.modColor = foundVehicle.color;
            this.modCapacity = foundVehicle.capacity;
            this.modPrice = foundVehicle.pricePerDay;
            this.modType = foundVehicle.type;
          })
          .catch(error => console.log(error));
    },
    modifyVehicle() {
      // call api endpoint to modify a vehicle and use data from form
      axios.post('http://localhost:8080/updateVehicle', {}, { params: {
          vid: this.modVid,
          make: this.modMake,
          model: this.modModel,
          year: this.modYear,
          color: this.modColor,
          capacity: this.modCapacity,
          price: this.modPrice,
          type: this.modType
        }})
        .then((response) => {
          console.log(response);
          this.modSuccess = true;
          this.modMake ="";
          this.modModel = "";
          this.modYear = "";
          this.modColor = "";
          this.modCapacity = "";
          this.modPrice = "";
          this.modType = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteVehicle() {
      // call api endpoint to delete a vehicle
      axios.post('http://localhost:8080/deleteVehicle', {}, { params: {
        vid: this.delVid
      }})
      .then((response) => {
        console.log(response);
        this.delSuccess = true;
        this.delVid = "";
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
<style>
.logo {
  width: 100px;
}
.menu-button {
  background-color: #FFFFFF;
  padding: 0.6em;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}
.active-button {
  background-color: aquamarine !important;
}
#menu-buttons-col {
  margin-top: 50px;
}
#mod-saved-msg, #deleted-msg {
  color: red;
  font-weight: bold;
  font-style: italic;
}
</style>