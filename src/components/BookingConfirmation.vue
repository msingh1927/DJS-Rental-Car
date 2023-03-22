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
      <!-- Contact info form -->
      <div id="contact-info-form" class="card col-4">
        <div class="card-body">
            <div class="row">
                <h3 class="fw-normal mb-3 pb-3">Booking Confirmed</h3>
            </div>
            <div class="row">
                <div class="col-5 info-text">
                    <strong>User ID:</strong> {{bookingInfo.userid}}
                    <br/>
                    <strong>Vehicle ID:</strong> {{bookingInfo.vid}}
                    <br/>
                    <strong>Transaction ID:</strong> {{bookingInfo.transactionid}}
                </div>
                <div class="col-5 confirmation-text">
                    <strong>Confirmation Code</strong>
                    <br/>
                    <h3>{{confirmCode}}</h3>
                </div>
            </div>
            <router-link class="btn btn-success confirm-button btn-lg" to="/carlist">Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>
export default {
  name: "BookingConfirmation",
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    bookingInfo() {
      return this.$route.params;
    },
    confirmCode() {
        return Math.ceil(Math.random()*10000000)
    }
  },
  methods: {
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
.confirmation-text {
    text-align: center;
}
.confirm-button {
    width: 100%;
    margin-top: 8%;
}
</style>