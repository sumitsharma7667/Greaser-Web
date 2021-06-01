import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

let SubTotal = 0;
let GradndTotal = 0;
function Cart(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    GradndTotal = 0;
    SubTotal = 0;
    getdata();
  }, []);
  const getdata = async (_id) => {
    var userid = await localStorage.getItem("userid");
    fetch("http://144.91.110.221:3032/cartbyid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: userid,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  };
  const Deletefromcart = (id) => {
    const apiUrl = "http://144.91.110.221:3032/Deletefromcart";
    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "delete",
      body: JSON.stringify({ _id: id }),
    })
      .then((response) => response.json())
      .then((res) => {
        getdata();
        // contexdata.getcounts()
      });
  };
  
  SubTotal = 0;
  GradndTotal = 0;
  return (
    <>
      <Header />
      <section className="ca" style={{ background: "#fff" }}>
        <div className="container-fluid CheckOut_CONT">
          <div className="row">
            <div className="col-7 blankCol">
              <div className="row mt-3 mb-3 DetailsHead">
                <div className="col-6 blankCol">
                  <h5 className="text-dark">DETAILS</h5>
                </div>
                <div className="col-6 blankCol">
                  {/* <h5 className="text-dark text-right">
                    *This is an Accordian
                  </h5> */}
                </div>
              </div>
              <div className="row mb-2 mt-2 p-3">
                <div className="col-12 blankCol">
                  <h5 className="text-dark font-weight-bold">
                    PERSONAL INFORMATION
                  </h5>
                </div>
              </div>
              <form className="mb-2">
                <div className="row pl-3">
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-100 form-control CartInput "
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Mobile*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Email*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-12 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Address*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Landmark*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="Postal*"
                      className="w-100 form-control p-2 CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="City*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                  <div className="col-6 blankCol p-2">
                    <input
                      type="text"
                      placeholder="State*"
                      className="w-100 form-control CartInput"
                    />
                  </div>
                </div>
              </form>
              <div className="row mt-3 mb-3 p-2">
                <div className="col-12 text-right">
                  <button className="btn btn-primary CartPageBtn">
                    Continue
                  </button>
                </div>
              </div>
              <hr />
              <div id="BookingSect">
                <div className="row mt-4 mb-3 DetailsHead">
                  <div className="col-6 blankCol">
                    <h5 className="text-dark">SCHEDULE YOUR BOOKINGS</h5>
                  </div>
                </div>
                <div className="row mb-2 mt-2 p-3">
                  <div className="col-12 blankCol">
                    <h5 className="text-dark font-weight-bold">
                      BOOKING INFORMATION
                    </h5>
                  </div>
                </div>
                <div className="row pl-3 mb-4">
                  <div className="col-12 blankCol p-2">
                    <label className="text-dark">Please enter Time</label>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      min="09:00"
                      max="18:00"
                      placeholder="Please enter Time"
                      className="w-50 form-control"
                    />
                  </div>
                  <div className="col-12 blankCol p-2">
                    <label className="text-dark">Please Select date</label>
                    <input
                      type="date"
                      placeholder="Date*"
                      className="w-50 form-control "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 blankCol alignmentCol pr-0 pl-0">
              <div className="vl"></div>
            </div>
            <div className="col-4 blankCol">
              <div
                className="row mt-3 mb-3 p-2"
                style={{ background: "#f0f0f0" }}
              >
                <div className="col-12 p-2">
                  <h5 className="text-dark">SERVICE SUMMARY</h5>
                </div>
                <div className=" row mt-4 mb-2 ">
                  <div className="col-4">
                    <img
                      src={require("./Images/profileMech.jpg").default}
                      className=""
                      style={{ height: "100px", width: "100%" }}
                      alt="logo icon"
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="text-dark font-weight-bold">Disc Turning</h6>
                    <h6 className="text-dark">
                      <i class="bx bx-rupee"></i>
                      500
                    </h6>
                    <h4 className="text-dark" style={{ marginTop: "2rem" }}>
                      <i class="bx bxs-trash"></i>
                    </h4>
                  </div>
                </div>
                <div className="col-12 mt-3 mb-3">
                  <div class="applyCouponBtn d-flex">
                      <input
                        type="text"
                        placeholder="Appy Coupn"
                        className="CartInput form-control w-80"
                      />
                      <button style={{border:"none", width:"60px", background: "#583692"}} >
                        <i class="bx bxl-telegram text-white" style={{fontSize:"22px"}}></i>
                      </button>
                  </div>
                </div>
              </div>

              {/* order total section */}

              <div
                className="row mt-5 mb-5 p-2"
                style={{ background: "#f0f0f0" }}
              >
                <div className="col-12 p-2">
                  <h5 className="text-dark">
                    SERVICE SUMMARY <i class="bx bxs-cart"></i>
                  </h5>
                </div>
                <div className=" row mt-4  w-100 p-2">
                  <div className="col-6">
                    <h6 className="text-dark">SubTotal</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-dark text-right">
                      <i class="bx bx-rupee"></i>
                      500
                    </h6>
                  </div>
                </div>
                <div className=" row  w-100 p-2">
                  <div className="col-6">
                    <h6 className="text-dark">Tax</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-dark text-right">
                      <i class="bx bx-rupee"></i>
                      500
                    </h6>
                  </div>
                </div>
                <hr className="w-100" />
                <div className=" row  w-100 p-2">
                  <div className="col-6">
                    <h6 className="text-dark">Total</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="text-dark text-right">
                      <i class="bx bx-rupee"></i>
                      100
                    </h6>
                  </div>
                </div>
                <div className="col-12 mt-3 mb-3">
                  <button className="btn btn-primary w-100 applyCouponBtn">
                    Proceed to Pay
                  </button>
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

export default Cart;
