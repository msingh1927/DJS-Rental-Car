<template>
  <!-- Navbar -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">DJS Rental</a>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li>
			<router-link class="nav-link" to="/carlist">View All Vehicles</router-link>
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
            <img class="car-img rounded" :src="vehicle.imgUrl" />
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
          <p/>
          <h5>Calculate Total Cost:</h5>
          <div id="total-cost-div">
            <strong>Select a date range:</strong><p/>
            <Datepicker v-model="dateRange" range placeholder="Select Dates"></Datepicker>
            <p/>
            <div class="pt-1 mb-4">
              <input type="button" class="btn btn-dark btn-md btn-block" id="get-cost-button" v-on:click="getTotalCost" value="Get Total Cost"/> <span id="total-cost-text">${{calculatedCost}}</span>
            </div>
            <div class="form-button">
              <input type="button" :disabled="!proceedButtonEnabled" class="btn btn-primary btn-lg btn-block" id="proceed-button" v-on:click="enableContactForm" value="Proceed"/>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact info form -->
      <div id="contact-info-form" class="card col-4">
        <div class="card-body">
        <form>
          <h3 class="fw-normal mb-3 pb-3">Enter Personal Information</h3>
          <!-- First Name -->
          <input type="text" :disabled="!contactFormEnabled" id="fname-input" v-model="fname" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="fname-input">First Name</label>
          <!-- Last Name -->
          <input type="text" :disabled="!contactFormEnabled" id="lname-input" v-model="lname" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="lname-input">Last Name</label>
          <!-- Email -->
          <input type="email" :disabled="!contactFormEnabled" id="email-input" v-model="email" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="lname-input">E-mail</label>
          <!-- Phone Number -->
          <input type="tel" :disabled="!contactFormEnabled" id="phonenum-input" v-model="phoneNum" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="phonenum-input">Phone Number</label>
          <div class="form-button pt-1 mb-4">
            <input type="button" :disabled="!contactFormEnabled" class="btn btn-warning btn-lg btn-block" id="add-user-button" v-on:click="addUser" value="Use this as my contact Info"/>
          </div>
          <div id="userid-msg" v-if="userCreated"><strong>User ID:</strong> {{userId}}</div>
        </form>
        </div>
      </div>

      <div id="payment-info-form" class="card col-4">
        <div class="card-body">
          <form>
          <h3 class="fw-normal mb-3 pb-3">Enter Payment Information</h3>
          <!-- Card Number-->
          <input type="text" :disabled="!payFormEnabled" id="cardnum-input" v-model="cardNum" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="cardnum-input">Card Number</label>
          <!-- Card PIN-->
          <input type="text" :disabled="!payFormEnabled" id="cardpin-input" v-model="cardPin" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="cardpin-input">PIN</label>
          <!-- Expiration Month -->
          <input type="text" :disabled="!payFormEnabled" id="month-input" v-model="cardMonth" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="month-input">Expiration Month</label>
          <!-- Year-->
          <input type="text" :disabled="!payFormEnabled" id="year-input" v-model="cardYear" class="form-control form-control-md"/>
          <label class="form-label mb-3" for="year-input">Expiration Year</label>
          <div class="form-button pt-1 mb-4">
            <input type="button" :disabled="!userCreated" class="btn btn-success btn-lg btn-block" id="complete-transaction-button" v-on:click="completeTransaction" value="Complete Transaction and Book My Vehicle"/>
          </div>
          <div id="transaction-msg" v-if="transactionRequested">
            <!--<strong>Rental Request Completed with Result:</strong> {{this.result}}-->
            <input type="button" class="btn btn-secondary btn-lg" id="view-booking-btn" v-on:click="viewBooking" value="View Booking Details"/>
          </div>
        </form>
        </div>
      </div>

    </div>
  </div>
  </body>
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from "axios";
import router from '@/routes';
export default {
  name: "BookingView",
  components: { 
    Datepicker: VueDatePicker
  },
  data() {
    return {
      vid: "",
      dateRange: null,
      calculatedCost: '',
      proceedButtonEnabled: false,
      contactFormEnabled: false,
      fname: "",
      lname: "",
      email: "",
      phoneNum: "",
      userId: "",
      userCreated: false,
      payFormEnabled: false,
      result: false,
      transactionRequested: false,
      transactionid: ""
    }
  },
  computed: {
    vehicle() {
      return this.$route.params;
    }
  },
  methods: {
    // calculate the total cost to rent a vehicle for a date range
    getTotalCost() {
      this.vid = this.vehicle.vid;
      const params = {
        "vid": this.vehicle.vid,
        "startDate": this.dateRange[0],
        "endDate": this.dateRange[1]
      };
      axios.get('http://localhost:8080/getTotalCost',  { params })
          .then(response => {
            this.calculatedCost = '' + response.data + '';
            this.proceedButtonEnabled = true;
          })
          .catch(error => console.log(error));
    },
    // enable the contact form inputs
    enableContactForm() {
      this.contactFormEnabled = true;
    },
    // create a user with the contact info
    addUser() {
      // call api endpoint to add a user and get its id
      axios.post('http://localhost:8080/addUser', {}, { params: {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          phoneNum: this.phoneNum
        }})
        .then((response) => {
          console.log(response);
          this.userId = response.data;
          this.userCreated = true;
          this.payFormEnabled = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    completeTransaction() {
      axios.post('http://localhost:8080/rentVehicle', {}, { params: {
          "userid": this.userId,
          "vid": this.vehicle.vid,
          "totalcost": this.calculatedCost
        }})
        .then((response) => {
          console.log(response);
          this.result = response.data;
          this.transactionRequested = true;
          this.transactionId = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    viewBooking() {
      router.push({ name: 'BookingConfirmation', 
        params: {
          "vid": this.vid,
          "userid": this.userId,
          "transactionid": this.transactionId
         }});
    }
  }
}
</script>
<style>
.navbar {
	position: fixed;
	height: 8%;
	width: 100%;
	z-index: 50000;
	padding-left: 2%;
}
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
  margin-top: 30%;
}
#total-cost-div {
  margin-left: 10px;
}
#total-cost-text {
  margin-left: 20px;
  font-weight: bold;
}
#proceed-button {
  width: 90%;
}
.form-button {
  text-align: center;
  margin-top: 15px;
}
.payment-select {
	width: 60%;
}
</style>