import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import "./homepage.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function SingleService() {
  return (
    <>
      <Header />
      <section className="Cart_page_sect">
        <div className="container-fluid CheckOut_CONT">
          <div className="card Item_card p-4">
            <div className="row">
              <div className="col-5 blankCol">
                <h6 className="headin_shopCart text-dark">
                  <Link to="/Serices-Packages">
                    <i class="bx bx-arrow-back"></i>Continue Shoping
                  </Link>
                </h6>
              </div>
              <div className="col-7 blankCol">
                <h4 className="headin_shopCart"> Your Shoping Cart</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-8 blankCol">
                <div class="card Child_card_shop">
                  <div className="row cart_CenterROw">
                    <div className="col-4 Cart_productImg blankCol">
                      <img
                        class="Cart_itemImg mx-auto d-block "
                        src={require("./Images/carousel1.jpeg").default}
                        alt=""
                      />
                    </div>
                    <div className="col-3 blankCol">
                      <h4 className="headin_shopCart">
                        Dickey Shocker replacement
                      </h4>
                    </div>
                    <div className="col-2 blankCol">
                      <div className="pos_negTIveIcon">
                        <i class="bx bx-plus"></i>
                        <i class="bx bx-minus"></i>
                      </div>
                    </div>
                    <div className="col-3 blankCol">
                      <div className="pos_negTIveIcon">
                        <h4 className="headin_shopCart">$78.00</h4>
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 blankCol">
                <div class=" card Secon_colCard">
                  <h3 className="text-center mt-2">Cart</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <h4>Basic Service</h4>
                        <p className="text-white">Mobile 5W30</p>
                      </div>
                      <div className="col-6">
                        <div className="text-right">
                          <h4>$3099</h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-6">
                        <h5>Mechanic Charge</h5>
                      </div>
                      <div class="col-6 text-right ">
                        <h5>$100.00</h5>
                      </div>
                    </div>
                    {/* <div class="row">
                      <div class="col-6">
                        <h5>Shipping</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$20.00</h5>
                      </div>
                    </div> */}
                    <div class="row">
                      <div class="col-6">
                        <h5>Total (tax incl.)</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$190.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg CheckOutBtn "
                          id="load"
                          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing Order"
                        >
                          Secure Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mechanicHr" />

            <div className="row ">
              <div className="col-3">
                <div className="row mechanicRow p-2">
                  <div className="col-12">
                    <img
                      class="Mechanic_itemImg mx-auto d-block "
                      src={require("./Images/carousel1.jpeg").default}
                      alt=""
                    />
                  </div>
                  <div className=" text-center w-100">
                    <h4>Sumit Sharma</h4>
                  </div>
                  <hr />
                  <div className="col-6">
                    <h5 className="">Price</h5>
                    <h5 className="">Time</h5>
                    <h5 className="">Exp</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="text-right">$40</h5>
                    <h5 className="text-right">5 hrs</h5>
                    <h5 className="text-right">5 yrs</h5>
                  </div>
                    <div class="row w-100">
                      <div class="col-12 text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg CheckOutBtn "
                          id="load"
                          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing Order"
                        >
                          Choose Mechanic
                        </button>
                    </div>
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
export default SingleService;
