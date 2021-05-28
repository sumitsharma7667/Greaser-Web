import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleService from "./SingleService";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
let userid;
function ServiceDetail() {
  const [AllServices, SetAllService] = useState([]);
  const [MechanicData, setdata] = useState([]);
  const [MechanicServiceId, setMechanicServiceId] = useState([]);
  const [MechanicUserId, setMechanicUserId] = useState([]);
  const [MechanicRealServiceId, setRealServiceId] = useState();

  const [SingleMechanicdata, SetSingleMechanicdata] = useState([]);

  const ServiceTypeId=localStorage.getItem("ServiceTypeId")
  const ServiceTypeName  = localStorage.getItem("ServiceTypeName")

  useEffect(() => {
    GetServices();
    getdata();
  }, []);

  let SetChoosedMechanic = (data) => {
    var id = data.split("-")[0];
    var user_id = data.split("-")[1];
    var RealServiceId = data.split("-")[2];
    setMechanicServiceId(id);
    setMechanicUserId(user_id);
    setRealServiceId(RealServiceId);
  };
  const Addtocart = async (_id, m_id) => {
    var id = await localStorage.getItem("userid");
    if (id == "") {
      window.location.href = "/Login";
    }
    fetch("http://144.91.110.221:3032/cartbyid", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: id,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        if (JSON.stringify(res).includes(_id) == false) {
          await fetch("http://144.91.110.221:3032/Addtocart", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userid: id,
              _id: _id,
              m_id: m_id,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              alert("added successfully");
            });
          window.location.href = "/Cart";
        } else {
          alert("This Service is allready in Your Cart ");
        }
      });
  };
  const getdata = () => {
    var _id;
    fetch("http://144.91.110.221:3032/AllMechanicServices", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  };

  const getSingleMechanicdata = (_id) => {
    if (_id == "") {
      SetSingleMechanicdata([]);
      return true;
    }
    fetch("http://144.91.110.221:3032/getSingleMechanicdata", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res[0] != undefined) {
          SetSingleMechanicdata(res);
        }
      });
  };
  const GetServices = () => {
    fetch("http://144.91.110.221:3032/GetServices")
      .then((res) => res.json())
      .then((data) => {
        SetAllService(data);
      });
  };

  return (
    <>
      <Header />
      <section id="about" class="section-large-text">
        <div class="service_overlay">
          <div class="section-large-text-inner">
            <h3>Service</h3>
            <h2>{ServiceTypeName}</h2>
          </div>
        </div>
      </section>
      {/* Card Section */}
      <section className="pt-5 pb-5" style={{ backgroundColor: "#fff" }}>
        <div class="container-fluid CheckOut_CONT">
          <div class="row">
            <div className="col-8  p-2 blankCol ">
              <div className="row ">
                {SingleMechanicdata == ""
                  ? AllServices.map((item, index) => {
                      if (
                        item.service_type._id ==
                        ServiceTypeId
                      ) {
                        return (
                          <div className="col-12 ">
                            <div className="row border pt-3 pb-3">
                              <div className="col-3 blankCol">
                                <img
                                  class="service_itemImg"
                                  src={
                                    "http://144.91.110.221:3032/" + item.image
                                  }
                                  alt=""
                                />
                                <h5 className="text-dark text-center font-weight-bold">
                                  <i class="bx bx-rupee"></i>
                                </h5>
                              </div>
                              <div className="col-9 blankCol">
                                <div className="row">
                                  <div className="col-9 p-3">
                                    <h4 className="text-dark font-weight-bold">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <div className="col-3  TimeBg blankCol">
                                    <div className="">
                                      <h6 className=" text-center p-1">
                                        <i class="bx bx-time"></i> hrs Taken
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-6 blankCol">
                                    <ul>
                                      <li className="text-dark">
                                        {" "}
                                        1000 Kms or 1 Month Warranty
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 blankCol">
                                    <ul>
                                      <li className="text-dark">
                                        1000 Kms or 1 Month Warranty
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6 blankCol">
                                      <h5 className="text-dark">
                                        <div
                                          className="blogDescrption"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              item.features.slice(0, 100) +
                                              " See more...",
                                          }}
                                        />
                                      </h5>
                                    </div>
                                    <div className="col-6 blankCol">
                                      <h5 className="text-dark">
                                        <div
                                          className="blogDescrption"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              item.features.slice(0, 100) +
                                              " See more...",
                                          }}
                                        />
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : SingleMechanicdata.map((item, index) => {
                      return (
                        <div className="col-12 ">
                          <div className="row border pt-3 pb-3">
                            <div className="col-3 blankCol">
                              <img
                                class="service_itemImg"
                                src={
                                  "http://144.91.110.221:3032/" +
                                  item.service.image
                                }
                                alt=""
                              />
                              <h5 className="text-dark text-center servicePrice ">
                                <i class="bx bx-rupee"></i> {item.price}
                              </h5>
                            </div>
                            <div className="col-9 blankCol">
                              <div className="row">
                                <div className="col-9 p-3">
                                  <h4 className="text-dark font-weight-bold">
                                    {item.service.name}
                                  </h4>
                                </div>
                                <div className="col-3  TimeBg blankCol">
                                  <div className="">
                                    <h6 className=" text-center timing">
                                      <i class="bx bx-time"></i> {item.time} hrs
                                      Taken
                                    </h6>
                                  </div>
                                </div>
                                <div className="col-6 blankCol">
                                  <ul>
                                    <li className="text-dark">
                                      {" "}
                                      1000 Kms or 1 Month Warranty
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 blankCol">
                                  <ul>
                                    <li className="text-dark">
                                      1000 Kms or 1 Month Warranty
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="container">
                                <div className="row">
                                  <div className="col-6 blankCol">
                                    <h5 className="text-dark">
                                      <div
                                        className="blogDescrption"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            item.service.features.slice(
                                              0,
                                              100
                                            ) + " ",
                                        }}
                                      />
                                    </h5>
                                  </div>
                                  <div className="col-6 blankCol">
                                    <h5 className="text-dark">
                                      <div
                                        className="blogDescrption"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            item.service.features.slice(
                                              0,
                                              100
                                            ) + " ",
                                        }}
                                      />
                                    </h5>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-6"></div>
                                  <div className="col-6 ChooseMechBTn blankCol">
                                    <button
                                      className="btn btn-info btn-sm"
                                      onClick={() => {
                                        Addtocart(item._id, item.user._id);
                                      }}
                                    >
                                      {" "}
                                      ADD TO CART
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                {SingleMechanicdata != ""
                  ? AllServices.map((item, index) => {
                      if (
                        item.service_type._id ==
                          ServiceTypeId &&
                        !JSON.stringify(SingleMechanicdata).includes(
                          item._id
                        ) &&
                        !JSON.stringify(SingleMechanicdata).includes(item.name)
                      ) {
                        return (
                          <div className="col-12 ">
                            <div className="row border pt-3 pb-3">
                              <div className="col-3 blankCol">
                                <img
                                  class="service_itemImg"
                                  src={
                                    "http://144.91.110.221:3032/" + item.image
                                  }
                                  alt=""
                                />
                                <h5 className="text-dark text-center font-weight-bold">
                                  <i class="bx bx-rupee"></i>
                                </h5>
                              </div>
                              <div className="col-9 blankCol">
                                <div className="row">
                                  <div className="col-9 p-3">
                                    <h4 className="text-dark font-weight-bold">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <div className="col-3 badge TimeBg blankCol">
                                    <div className="">
                                      <h6 className=" text-center p-1">
                                        <i class="bx bx-time"></i> hrs Taken
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="col-6 blankCol">
                                    <ul>
                                      <li className="text-dark">
                                        1000 Kms or 1 Month Warranty
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 blankCol">
                                    <ul>
                                      <li className="text-dark">
                                        1000 Kms or 1 Month Warranty
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6 blankCol">
                                      <h5 className="text-dark">
                                        <div
                                          className="blogDescrption"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              item.features.slice(0, 100) + "",
                                          }}
                                        />
                                      </h5>
                                    </div>
                                    <div className="col-6 blankCol">
                                      <h5 className="text-dark">
                                        <div
                                          className="blogDescrption"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              item.features.slice(0, 100) + "",
                                          }}
                                        />
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-8  text-danger">
                                      This service is not available for this
                                      mechanic
                                    </div>
                                  </div>
                                  {/* <div className="row border">
                                <div className="col-12"></div>
                              </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : null}
              </div>
            </div>
            {/*Customer vichel info card */}
            <div className="col-4 blankCol MainMech">
              <div className="card mechanicCard ">
                <div className="container-fluid">
                  <div className="row p-2">
                    <div className="col-12 blankCol">
                      <h2
                        class=" get-bonus mt-2 mb-2 p-2 text-center"
                        style={{ color: "#bdbdbd" }}
                      >
                        {" "}
                        <span
                          class="text-dark"
                          style={{
                            fontFamily: "TransRobotics",
                            fontSize: "40px",
                          }}
                        >
                          Greaser
                        </span>{" "}
                        Anytime Anywhere
                      </h2>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-2 p-2">
                    {/* Change car column */}
                    {/* <div className="col-12">
                      <h5 className="text-dark">
                        <i class="bx bx-arrow-back text-dark"></i>Change
                      </h5>
                    </div> */}
                    {/* Car image Column */}
                    <div className="col-12 blankCol">
                      <img
                        src={require("./Images/transparent.png").default}
                        className=""
                        style={{ height: "200px", width: "100%" }}
                        alt="logo icon"
                      />
                    </div>
                    <div className="CarDetails  col-12 blankCol">
                      <div className="col-8 pl-0">
                        <div className="CarDetails">
                          <h4
                            className="text-dark"
                            style={{ fontSize: "1.25rem" }}
                          >
                            Hyundai i20
                          </h4>
                          <h6 className="FuelType text-dark">Petrol</h6>
                        </div>
                      </div>
                      <div className="col-4 pr-0 blankCol">
                        <h6 className="text-dark changeCar">Change</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mechanoc List start */}
              <div className="mechanicBox border p-2 ">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6 pl-0 blankCol">
                      <div class="card  mechlistCard">
                        <div className="co-12 blankCol">
                          <img
                            src={require("./Images/profileMech.jpg").default}
                            className=""
                            style={{ height: "100px", width: "100%" }}
                            alt="logo icon"
                          />
                        </div>
                        <hr />
                        <div className="col-12 pl-0 pr-0 blankCol">
                          <h5 className="text-center">Sumit Sharma</h5>
                        </div>
                        <div className="col-12 blankCol">
                          <h5 className="text-center">4 yrs exp</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 pr-0 blankCol">
                      <div class="card  mechlistCard">
                        <div className="co-12blankCol">
                          <img
                            src={require("./Images/profileMech.jpg").default}
                            className=""
                            style={{ height: "100px", width: "100%" }}
                            alt="logo icon"
                          />
                        </div>
                        <hr />
                        <div className="col-12 pl-0 pr-0 blankCol">
                          <h5 className="text-center">Sumit Sharma</h5>
                        </div>
                        <div className="col-12 blankCol">
                          <h5 className="text-center">4 yrs exp</h5>
                        </div>
                      </div>
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
export default ServiceDetail;

// old side card Code below
//  <div className="row p-2">
//                     <div className="col-12">
//                     <h2
//                             class=" get-bonus mt-2 mb-2 p-2 text-center"
//                             style={{ color: "#bdbdbd" }}
//                           >
//                             {" "}
//                             <span
//                               class="text-white"
//                               style={{
//                                 fontFamily: "TransRobotics",
//                                 fontSize: "40px",
//                               }}
//                             >
//                               Greaser
//                             </span>{" "}
//                             Anytime Anywhere
//                           </h2>
//                     </div>
//                   </div>
//                   <select
//                     className="form-control text-dark"
//                     placeholder="Select Mechanic"
//                     onChange={(e) => {
//                       getSingleMechanicdata(e.target.value);
//                     }}
//                   >
//                     <option value="">Choose Mechanic...</option>
//                     {MechanicData.map((item, index) => {
//                       if (item.user != undefined && item.service != undefined) {
//                         if (
//                           item.service.service_type._id ==
//                           ServiceTypeId
//                         ) {
//                           return (
//                             <option value={item.user._id}>
//                               {item.user.fullname}
//                             </option>
//                           );
//                         }
//                       }
//                     })}
//                   </select>
//                   <h4 className="text-dark">{item.user.shop_name}</h4>
//                   <h4>{item.user.fullname}</h4>
//                   <h6 className="text-dark">{item.user.mobile}</h6>
//                   <span>
//                   <h6 className="text-dark">${item.price}  - {item.time} Hours</h6>

//                   <button className="btn btn-primary mt-3" onClick={()=>{Addtocart(item._id,item.user._id)}}>ADD TO CART</button>
//                   </span>
//                   <div className="row p-2 mt-2">
//                     <div className="col-6 blankCol">
//                       <h4 className="">
//                         <i class="bx bxs-star"></i> 4.8/5
//                       </h4>
//                       <p className="">Based on 2000+ Reviews</p>
//                     </div>
//                     <div class="vl"></div>
//                     <div className="col-5">
//                       <h4 className=" text-center">25,000+</h4>
//                       <p className=" text-center">Happy customers</p>
//                     </div>
//                   </div>

{
  /* <section className="first_servicesCarousel">
        <header class="header-design">
          <div class="footer-wave"></div>
        </header>
        <div className="row ">
          <div className="col-12 text-center p-3">
            <h2 className="servicesHeading_in_service_feature">
              Simmilar Services
            </h2>
            <h4 className="text-dark">Trending services around you</h4>
          </div>
          <div className="col-12 pb-5">
           
          </div>
        </div>
      </section> */
}
// End old code (:
