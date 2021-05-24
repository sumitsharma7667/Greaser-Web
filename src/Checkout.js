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
        <div class="container p-3 ">
          <div className="row Secon_colCard">
            <div className="col-6 blankCol">
              <h4 className="text-white mt-2 text-center">Shipping Details</h4>
              <form>
                <div class="container-fluid p-3 ">
                  <div class="formfield" id="firstnamefield">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      required
                    />
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
                  <div class="formfield" id="Phonefield">
                    <input type="text" name="Phone" id="Phone" required />
                    <label alt="Phone" for="Phone" placeholder="Phone">
                      Phone
                    </label>
                  </div>
                  <div class="formfield" id="Emailfield">
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
                  <div class="formfield" id="landmarkfield">
                    <input type="text" name="landmark" id="landmark" required />
                    <label
                      alt="landmark"
                      for="landmark"
                      placeholder="landmark"
                    ></label>
                  </div>
                  <div class="formfield" id="cityfield">
                    <input type="text" name="city" id="city" required />
                    <label alt="City" for="city" placeholder="City">
                      City
                    </label>
                  </div>
                  <div class="formfield" id="statefield">
                    <input type="text" name="State" id="State" required />
                    <label alt="State" for="State" placeholder="State">
                      State
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-check">
                        <input
                          class="form-check-input ml-0"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label checkBoxalignment"
                          for="flexCheckIndeterminate"
                        >
                          Home
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-check ">
                        <input
                          class="form-check-input ml-0"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label checkBoxalignment"
                          for="flexCheckIndeterminate"
                        >
                          office
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6 blankCol">
              <div className="alignmentCol">
                <div class="card w-70">
                  <h3 className="text-center text-white mt-2">Cart</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <h4>Basic Service</h4>
                        <p className="text-light">Mobile 5W30</p>
                      </div>
                      <div className="col-6">
                        <div className="text-right">
                          <h4>$3099</h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <input
                        type="text"
                        name="Apply Coupon"
                        id="coupon"
                        placeholder="Apply Coupon"
                        className="form-control text-dark"
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-6">
                        <h5>Subtotal</h5>
                      </div>
                      <div class="col-6 text-right ">
                        <h5>$100.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <h5>Shipping</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$20.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <h5>Total (tax incl.)</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$190.00</h5>
                      </div>
                    </div>
                  </div>
                  <div className="PaymentBtn mb-3">
                    <button className="btn btn-primary">
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Checkout;
