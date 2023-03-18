<template>
  <section class="vh-105">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/images/car.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="
                    border-radius: 1rem 0 0 1rem;
                    padding-top: 25px;
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
                      Sign into your account
                    </h3>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="name"
                        id="UserName"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form2Example17"
                        >User Name</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        v-model="passward"
                        id="Password"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                    </div>

                    <div class="pt-1 mb-4">
                      <input
                        type="button"
                        class="btn btn-dark btn-lg"
                        id="register"
                        v-on:click="signUp"
                        value="Login"
                      />
                    </div>

                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <router-link to="/registration" style="color: #393f81"
                        >Register here</router-link
                      >
                    </p>
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
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
  name: "SignUp",
  data() {
    return {
      name: "",
      passward: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("Signup", this.name, this.passward);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        passward: this.passward,
      });
      console.log(result);
      if (result.status == 201) {
        alert(this.name + "Login Successfully!! 🎉🎉");
        this.$router.push({ name: "Home" });
        localStorage.setItem("user-info", JSON.stringify(result.data));
      } else {
        alert("Login Failed!! 😔😔");
      }
    },
  },
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (user) {
  //     this.$router.push({ name: "Home" });
  //   }
  // },
};
</script>
<style>
.logo {
  width: 100px;
}
.body {
  color: aqua;
}
</style>
