<template>
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
      &nbsp;

    </div>
  </nav>
  <body>


    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4 others" data-name="p-1">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item1"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car2.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>2023 Land Rover</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Range Rover</span>
                  <p class="price ml-auto">$100<span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book Now</a>
                  <a class="btn btn-info py-2 ml-2">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 others" data-name="p-2">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item2"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car9.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0"><a>Carros en Venta </a></h2>
                <div class="d-flex mb-3">
                  <span class="cat">Subaru</span>
                  <p class="price ml-auto">₹3500 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 Mercedes" data-name="p-3">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item3"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car3.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Mercedes Grand Sedan</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹4000 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 Mercedes" data-name="p-4">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item4"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car10.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Mercedes Grand Sedan</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹2200 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 RangeRover" data-name="p-5">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item5"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car5.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0"><a>Range Rover</a></h2>
                <div class="d-flex mb-3">
                  <span class="cat">Subaru</span>
                  <p class="price ml-auto">₹3400 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 others" data-name="p-6">
            <div
              class="car-wrap rounded ftco-animate fadeInUp ftco-animated"
              id="item6"
            >
              <div class="img rounded d-flex">
                <img src="../assets/images/car6.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>BMW x6</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹2500 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 others" data-name="p-7">
            <div class="car-wrap rounded ftco-animate" id="item7">
              <div class="img rounded d-flex">
                <img src="../assets/images/car7.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Jeep Wranglers</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹2500 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 RangeRover" data-name="p-8">
            <div class="car-wrap rounded ftco-animate" id="item8">
              <div class="img rounded d-flex">
                <img src="../assets/images/car8.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0"><a>Range Rover</a></h2>
                <div class="d-flex mb-3">
                  <span class="cat">Subaru</span>
                  <p class="price ml-auto">₹3000 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 Mercedes" data-name="p-8">
            <div class="car-wrap rounded ftco-animate" id="item9">
              <div class="img rounded d-flex">
                <img src="../assets/images/car1.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Mercedes Benz</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹4000 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 others" data-name="p-10">
            <div class="car-wrap rounded ftco-animate" id="item10">
              <div class="img rounded d-flex">
                <img src="../assets/images/car4.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Maruti Suzuki Alto</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹4000 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 others" data-name="p-11">
            <div class="car-wrap rounded ftco-animate people" id="item11">
              <div class="img rounded d-flex">
                <img src="../assets/images/car11.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0"><a>Voiture Puissante</a></h2>
                <div class="d-flex mb-3">
                  <span class="cat">Subaru</span>
                  <p class="price ml-auto">₹4000 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 Mercedes" data-name="p-12">
            <div class="car-wrap rounded ftco-animate" id="item12">
              <div class="img rounded d-flex">
                <img src="../assets/images/car12.png" alt="" />
              </div>
              <div class="text">
                <h2 class="mb-0">
                  <a>Mercedes Grand Sedan</a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">₹3500 <span>/day</span></p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-success me-3">Book now</a>
                  <a class="btn btn-info py-2 ml-1">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="products-preview">
      <div class="preview active" data-target="p-1">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car9.png" alt="" />
        <h3>Audi r8 v10</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car1" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-2">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car2.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car2" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-3">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car3.png" alt="" />
        <h3>Mercedes Grand Sedan</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹4000</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car3" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-4">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car10.png" alt="" />
        <h3>Mercedes Grand Sedan</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹2000</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car4" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-5">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car5.png" alt="" />
        <h3>Range Rover</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car5" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-6">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car6.png" alt="" />
        <h3>BMW x6</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹2500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car6" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-7">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car7.png" alt="" />
        <h3>Jeep Wranglers</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹2500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car7" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-8">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car8.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car8" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-9">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car9.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car9" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-10">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car10.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car10" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-11">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car11.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car11" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>

      <div class="preview" data-target="p-12">
        <i class="fa fa-times"></i>
        <img src="../assets/images/car12.png" alt="" />
        <h3>Carros en Venta</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <div class="info">
            Mileage <b>40,000</b> <i class="fa fa-meteor"></i>&nbsp;
            Transmission <b>Manual</b> <i class="fa fa-screwdriver"></i>&nbsp;
            Seats <b>5-Adults</b> <i class="fa fa-baby"></i>&nbsp; Luggage
            <b>4 Bags</b> <i class="fa fa-shopping-bag"></i>&nbsp; Fuel
            <b>Petrol</b> <i class="fa fa-car-battery"></i>&nbsp;
          </div>
          <div class="price">₹3500</div>
          <div class="buttons">
            <a class="btn btn-success me-3" id="car12" @click="myFunction()"
              >Book Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  methods: {
    getSoretedData: function () {
      const btns = document.querySelectorAll(".button");
      const storeProducts = document.querySelectorAll(".col-md-4");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
          e.preventDefault();

          const filter = e.target.dataset.filter;
          console.log(filter);

          storeProducts.forEach((product) => {
            if (filter === "all") {
              product.style.display = "block";
            } else {
              if (product.classList.contains(filter)) {
                product.style.display = "block";
              } else {
                product.style.display = "none";
              }
            }
          });
        });
      }

      let preveiwContainer = document.querySelector(".products-preview");
      let previewBox = preveiwContainer.querySelectorAll(".preview");

      document.querySelectorAll(".row .col-md-4").forEach((product) => {
        product.onclick = () => {
          preveiwContainer.style.display = "flex";
          let name = product.getAttribute("data-name");
          previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
              preview.classList.add("active");
            }
          });
        };
      });

      previewBox.forEach((close) => {
        close.querySelector(".buttons").onclick = () => {
          close.classList.remove("active");
          preveiwContainer.style.display = "none";
        };
      });
    },
    myFunction: function () {
      let preveiwContainer = document.querySelector(".products-preview");
      let previewBox = preveiwContainer.querySelectorAll(".preview");
      alert("Car Booked Successfully");
      previewBox.forEach((close) => {
        close.querySelector(".fa-times").onclick = () => {
          close.classList.remove("active");
          preveiwContainer.style.display = "none";
        };
      });
    },
  },
};
</script>
<style>
.car-wrap .img {
  width: 100%;
  height: 220px;
}
div .img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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

.ftco-car-details .services .media-body .icon span {
  color: #1089ff;
}

.ftco-car-details .services .media-body .text h3 {
  font-size: 14px !important;
  color: rgba(0, 0, 0, 0.4);
}
.ftco-car-details .services .media-body .text h3 span {
  display: block;
  color: #000000;
}

.car-details .img {
  width: 100%;
  height: 600px;
  margin-bottom: 40px;
}

.car-details span.subheading {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.4);
  display: block;
}
.ftco-section {
  padding: 3em 0;
  position: relative;
}
@media (max-width: 767.98px) {
  .ftco-section {
    padding: 6em 0;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.col-md-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
#BookedCars {
  width: 250px;
  float: right;
  text-align: center;
  border: 1px solid black;
  overflow-y: scroll;
  height: 100%;
}
.cartImg > img {
  width: 500px;
}

/* Style the buttons */
.button {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: rgb(224, 218, 218);
  cursor: pointer;
  display: inline-block;
}

.button:hover {
  background-color: rgb(163, 156, 156);
  text-decoration: none;
}

.button.active {
  background-color: #666;
  color: white;
}
.cont {
  text-align: right;
  background-color: #fafafa;
}
.container .col-md-4 .car-wrap:hover {
  outline-offset: 0;
  outline: 0.1rem solid #222;
}
.container .col-md-4 .car-wrap:hover {
  transform: scale(0.9);
}

.info {
  font-size: 18px;
}

.products-preview {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
}

.products-preview .preview {
  display: none;
  padding: 2rem;
  text-align: center;
  background: #fff;
  position: relative;
  margin: 2rem;
  width: 40rem;
}

.products-preview .preview.active {
  display: inline-block;
}

.products-preview .preview img {
  height: 10rem;
}

.products-preview .preview .fa-times {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  color: #444;
  font-size: 2rem;
}

.products-preview .preview .fa-times:hover {
  transform: rotate(90deg);
}



.products-preview .preview .stars {
  padding: 1rem 0;
  font-size: 1.7rem;
}

.products-preview .preview .stars i {
  color: #27ae60;
}

.products-preview .preview .stars span {
  color: #999;
}

</style>
