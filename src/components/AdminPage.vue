<template>
  <div class="container py-5">
    <div class="row d-flex justify-content-center">
      <!-- Right column with buttons-->
      <div id="menu-buttons-col" class="col-2">
        <button id="toggleAddVehButton" class="menu-button" :class="{'active-button': showAddVehPanel}" type="button" @click="showAddUserPanel=false; showModUserPanel=false; showDelUserPanel=false; showAddVehPanel=true; addVehMsg=false; showModVehPanel=false; showDelVehPanel=false">Add a Vehicle</button>
        <button id="toggleModVehButton" class="menu-button" :class="{'active-button': showModVehPanel}" type="button" @click="showAddUserPanel=false; showModUserPanel=false; showDelUserPanel=false; showAddVehPanel=false; showModVehPanel=true; modVehMsg=false; showDelVehPanel=false">Modify a Vehicle</button>
        <button id="toggleDelVehButton" class="menu-button" :class="{'active-button': showDelVehPanel}" type="button" @click="showAddUserPanel=false; showModUserPanel=false; showDelUserPanel=false; showAddVehPanel=false; showModVehPanel=false; showDelVehPanel=true; delVehMsg=false">Delete a Vehicle</button>
        <p/><p/>
        <button id="toggleAddUserButton" class="menu-button" :class="{'active-button': showAddUserPanel}" type="button" @click="showAddUserPanel=true; addUserMsg=false; showModUserPanel=false; showDelUserPanel=false; showAddVehPanel=false; showModVehPanel=false; showDelVehPanel=false">Add a User</button>
        <button id="toggleModUserButton" class="menu-button" :class="{'active-button': showModUserPanel}" type="button" @click="showAddUserPanel=false; showModUserPanel=true; modUserMsg=false; showDelUserPanel=false; showAddVehPanel=false; showModVehPanel=false; showDelVehPanel=false">Modify a User</button>
        <button id="toggleDelUserButton" class="menu-button" :class="{'active-button': showDelUserPanel}" type="button" @click="showAddUserPanel=false; showModUserPanel=false; showDelUserPanel=true; delUserMsg=false; showAddVehPanel=false; showModVehPanel=false; showDelVehPanel=false">Delete a User</button>
      
      </div>
      <div class="col-9">
        <!-- Add Vehicle panel -->
        <div id="add-veh-card" v-show="showAddVehPanel" class="card" style="border-radius: 1rem">
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
                <p/>
                <div id="added-veh-msg" v-if="addVehMsg">Vehicle Added with ID: {{addVehId}}</div>
              </div>
            </form>
          </div>
        </div>

        <!-- Modify Vehicle panel -->
        <div id="modify-veh-card" v-show="showModVehPanel" class="card" style="border-radius: 1rem">
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
                <div id="mod-veh-saved-msg" v-if="modVehMsg">Vehicle Updated!</div>
              </div>
            </form>
          </div>
        </div>

        <!-- Delete Vehicle panel -->
        <div id="del-veh-card" v-show="showDelVehPanel" class="card" style="border-radius: 1rem">
          <div class="card-body p-5 text-black">
            <form>
              <h3 class="fw-normal mb-3 pb-3">Delete an Existing Vehicle</h3>
              <!-- Vehicle ID -->
              <input type="text" id="del-vid" v-model="delVid" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="del-vid">Vehicle ID</label>
              <div class="pt-1 mb-4">
                <input type="button" class="btn btn-dark btn-lg btn-block" id="del-veh-button" v-on:click="deleteVehicle" value="Delete Vehicle"/>
                <p/>
                <div id="del-veh-msg" v-if="delVehMsg">Vehicle Deleted</div>
              </div>
            </form>
          </div>
        </div>



        <!-- Add User panel -->
        <div id="add-user-card" v-show="showAddUserPanel" class="card" style="border-radius: 1rem">
          <div class="card-body p-5 text-black">
            <form>
              <h3 class="fw-normal mb-3 pb-3">Add a User</h3>
              <!-- First Name -->
              <input type="text" id="add-fname" v-model="addFname" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">First Name</label>
              <!-- Last name -->
              <input type="text" id="add-lname" v-model="addLname" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">Last Name</label>
              <!-- Email -->
              <input type="text" id="add-email" v-model="addEmail" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">E-mail</label>
              <!-- Phone number -->
              <input type="text" id="add-phonenum" v-model="addPhoneNum" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">Phone Number</label>
              <div class="pt-1 mb-4">
                <input type="button" class="btn btn-dark btn-lg btn-block" id="add-user-button" v-on:click="addUser" value="Add User"/>
                <p/>
                <div id="added-user-msg" v-if="addUserMsg">User Added</div>
              </div>
            </form>
          </div>
        </div>

        <!-- Modify User panel -->
        <div id="modify-user-card" v-show="showModUserPanel" class="card" style="border-radius: 1rem">
          <div class="card-body p-5 text-black">
            <form>
              <h3 class="fw-normal mb-3 pb-3">Modify an Existing User</h3>
              <!-- User ID -->
              <input type="text" id="mod-userid" v-model="modUserId" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="mod-vid">User ID</label>
              <div class="pt-1 mb-4">
                <input type="button" class="btn btn-dark btn-lg btn-block" id="search-user-button" v-on:click="getUser" value="Find User"/>
              </div>
            </form>
            <p/>
            <form>
              <!-- First Name -->
              <input type="text" id="mod-fname" v-model="modFname" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">First Name</label>
              <!-- Last name -->
              <input type="text" id="mod-lname" v-model="modLname" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">Last Name</label>
              <!-- Email -->
              <input type="text" id="mod-email" v-model="modEmail" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">E-mail</label>
              <!-- Phone number -->
              <input type="text" id="mod-phonenum" v-model="modPhoneNum" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="add-make">Phone Number</label>
              <div class="pt-1 mb-4">
                <input type="button" class="btn btn-dark btn-lg btn-block" id="mod-user-button" v-on:click="modifyUser" value="Update User"/>
                <p/>
                <div id="mod-user-saved-msg" v-if="modUserMsg">User Updated</div>
              </div>
            </form>
          </div>
        </div>

        <!-- Delete User panel -->
        <div id="del-user-card" v-show="showDelUserPanel" class="card" style="border-radius: 1rem">
          <div class="card-body p-5 text-black">
            <form>
              <h3 class="fw-normal mb-3 pb-3">Delete an Existing User</h3>
              <!-- User ID -->
              <input type="text" id="del-userid" v-model="delUserId" class="form-control form-control-lg"/>
              <label class="form-label mb-3" for="del-userid">User ID</label>
              <div class="pt-1 mb-4">
                <input type="button" class="btn btn-dark btn-lg btn-block" id="del-veh-button" v-on:click="deleteUser" value="Delete User"/>
                <p/>
                <div id="del-user-msg" v-if="delUserMsg">User Deleted</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      //vehicle variables
      showAddVehPanel: true,
      showModVehPanel: false,
      showDelVehPanel: false,
      addVehMsg: false,
      modVehMsg: false,
      delVehMsg: false,
      addVehId: "",
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
      delVid: "",
      //user variables
      showAddUserPanel: false,
      showModUserPanel: false,
      showDelUserPanel: false,
      addUserMsg: false,
      modUserMsg: false,
      delUserMsg: false,
      addFname: "",
      addLname: "",
      addEmail: "",
      addPhoneNum: "",
      modUserId: "",
      modFname: "",
      modLname: "",
      modEmail: "",
      modPhoneNum: "",
      delUserId: ""
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
          price: this.addPrice,
          type: this.addType
        }})
        .then((response) => {
          console.log(response);
          this.addVehMsg = true;
          this.addVehId = response.data;
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
          this.modVehMsg = true;
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
        this.delVehMsg = true;
        this.delVid = "";
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    addUser() {
      // call api endpoint to add a user and use data from form
      axios.post('http://localhost:8080/addUser', {}, { params: {
          fname: this.addFname,
          lname: this.addLname,
          email: this.addEmail,
          phoneNum: this.addPhoneNum
        }})
        .then((response) => {
          console.log(response);
          this.addUserMsg = true;
          this.addFname = "";
          this.addLname = "";
          this.addEmail = "";
          this.addPhoneNum = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getUser() {
      // call api endpoint to get a single user by vid, use form input as user id
      const params = {
        "id": this.modUserId
      };
      axios.get('http://localhost:8080/getUser',  { params })
          .then(response => {
            const foundUser = response.data;
            this.modFname = foundUser.firstName;
            this.modLname = foundUser.lastName;
            this.modEmail = foundUser.email;
            this.modPhoneNum = foundUser.phoneNum;
          })
          .catch(error => console.log(error));
    },
    modifyUser() {
      // call api endpoint to modify a user and use data from form
      axios.post('http://localhost:8080/modifyUser', {}, { params: {
          id: this.modUserId,
          fname: this.modFname,
          lname: this.modLname,
          email: this.modEmail,
          phoneNum: this.modPhoneNum
        }})
        .then((response) => {
          console.log(response);
          this.modUserMsg = true;
          this.modFname = "";
          this.modLname = "";
          this.modEmail = "";
          this.modPhoneNum = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteUser() {
      // call api endpoint to delete a user
      axios.post('http://localhost:8080/deleteUser', {}, { params: {
        id: this.delUserId
      }})
      .then((response) => {
        console.log(response);
        this.delUserMsg = true;
        this.delUserId = "";
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
};
</script>
<style>
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
#added-veh-msg, #mod-veh-saved-msg, #del-veh-msg,
#added-user-msg, #mod-user-saved-msg, #del-user-msg {
  color: red;
  font-weight: bold;
  font-style: italic;
}
</style>