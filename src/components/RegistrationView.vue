<template>
  <section class="vh-100.5">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/images/car13.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="
                    border-radius: 1rem 0 0 1rem;
                    padding-top: 4px;
                    padding-left: 20px;
                  "
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fa fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                      <span class="h1 fw-bold mb-0"></span>
                    </div>

                    <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Sign Up
                    </h3>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="ReUserName"
                        id="ReUserName"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form2Example17"
                        >User Name</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        v-model="RePassword"
                        id="RePassword"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                    </div>

                    <div
                      class="d-md-flex justify-content-start align-items-center mb-4 py-2"
                    >
                      <h6 class="mb-0 me-4">Gender: &nbsp;&nbsp;</h6>

                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          v-model="inlineRadioOptions"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label class="form-check-label" for="femaleGender"
                          >Female</label
                        >
                      </div>
                      &nbsp;
                      <div class="form-check form-check-inline mb-0 me-4">
                        <input
                          class="form-check-input"
                          type="radio"
                          v-model="inlineRadioOptions"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label class="form-check-label" for="maleGender"
                          >Male</label
                        >
                      </div>
                      &nbsp;
                      <div class="form-check form-check-inline mb-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          v-model="inlineRadioOptions"
                          name="inlineRadioOptions"
                          id="otherGender"
                          value="option3"
                        />
                        <label class="form-check-label" for="otherGender"
                          >Other</label
                        >
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <select
                        id="country"
                        v-model="country"
                        name="country"
                        class="js-example-basic-single"
                        style="width: 450px"
                      >
                        <option value="">--Select Country--</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                      </select>
                    </div>

                    <div class="pt-1 mb-4">
                      <input
                        type="button"
                        class="btn btn-dark btn-lg btn-block"
                        id="register"
                        v-on:click="registration"
                        value="Register"
                      />
                    </div>
                  </form>
                </div>
              </div>
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
  name: "RegistrationView",
  data() {
    return {
      ReUserName: "",
      RePassword: "",
      inlineRadioOptions: "",
      country: "",
    };
  },
  methods: {
    async registration() {
      console.warn(
        "Registration",
        this.ReUserName,
        this.RePassword,
        this.inlineRadioOptions,
        this.country
      );
      let result = await axios.post("http://localhost:3000/reuser", {
        ReUserName: this.ReUserName,
        RePassword: this.RePassword,
        inlineRadioOptions: this.inlineRadioOptions,
        country: this.country,
      });
      console.log(result);
      if (result.status == 201) {
        alert("User Registered Successfully 🎉🎉.");
        this.$router.push({ name: "SignUp" });
        localStorage.setItem("register-user", JSON.stringify(result.data));
      } else {
        alert("Registration Failed 😔😟!!");
      }
    },
  },
};
</script>
<style>
.logo {
  width: 100px;
}
</style>
