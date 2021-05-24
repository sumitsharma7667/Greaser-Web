import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <Header />
      <section>
        <div class="container-fluid p-3 ">
          <div className="row">
            <div className="col-6">
              <h4 className="text-dark">Your Personal Details</h4>
              <form>
                <div class="formfield" id="firstnamefield">
                  <input type="text" name="firstname" id="firstname" required />
                  <label
                    alt="firstname"
                    for="firstname"
                    placeholder="firstname"
                  >
                    firstname
                  </label>
                </div>
                <div class="formfield" id="lastnamefield">
                  <input type="text" name="lastname" id="lastname" required />
                  <label alt="lastname" for="lastname" placeholder="lastname">
                    lastname
                  </label>
                </div>
                <div class="formfield" id="addressfield">
                  <input type="text" name="Phone" id="Phone" required />
                  <label alt="Phone" for="Phone" placeholder="Phone">
                    Phone
                  </label>
                </div>
                <div class="formfield" id="addressfield">
                  <input type="text" name="Email" id="Email" required />
                  <label alt="Email" for="Email" placeholder="Email">
                    Email
                  </label>
                </div>

                <div class="formfield" id="addressfield">
                  <input type="text" name="address" id="address" required />
                  <label alt="Adresse" for="address" placeholder="Adresse">
                    Address
                  </label>
                </div>

                <div class="formfield" id="zipcodefield">
                  <input type="text" name="zipcode" id="zipcode" required />
                  <label
                    alt="Code postal"
                    for="zipcode"
                    placeholder="Code postal"
                  >
                    postal
                  </label>
                </div>
                <div class="formfield" id="cityfield">
                  <input type="text" name="city" id="city" required />
                  <label alt="City" for="city" placeholder="City">
                    City
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Checkout;
