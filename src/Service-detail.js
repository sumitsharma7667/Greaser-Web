import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link ,useHistory} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleService from "./SingleService";
import $, { contains, timers } from 'jquery';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  const [AllModal, SetAllVehicle] = useState([]);

  const ServiceTypeId = localStorage.getItem("ServiceTypeId");
  const ServiceTypeName = localStorage.getItem("ServiceTypeName");

  const [AllBrand, SetAllBrand] = useState([]);
  const [Brand, SetBrand] = useState([]);
  const [Modal, SetModal] = useState([]);
  const [Type, SetType] = useState([]);

  const history = useHistory()
  useEffect(() => {
    $(document).ready(function () {
      $(".ChooseCarSection").hide()
      var current_fs, next_fs, previous_fs;

      // No BACK button on first screen
      if ($(".show").hasClass("first-screen")) {
        $(".prev").css({ display: "none" });
      }

      // Next button
      $(".next-button").click(function () {
        current_fs = $(this).parent().parent();
        next_fs = $(this).parent().parent().next();

        $(".prev").css({ display: "block" });

        $(current_fs).removeClass("show");
        $(next_fs).addClass("show");

        $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

        current_fs.animate(
          {},
          {
            step: function () {
              current_fs.css({
                display: "none",
                position: "relative",
              });

              next_fs.css({
                display: "block",
              });
            },
          }
        );
      });

      // Previous button
      $(".prev").click(function () {
        current_fs = $(".show");
        previous_fs = $(".show").prev();

        $(current_fs).removeClass("show");
        $(previous_fs).addClass("show");

        $(".prev").css({ display: "block" });

        if ($(".show").hasClass("first-screen")) {
          $(".prev").css({ display: "none" });
        }

        $("#progressbar li")
          .eq($(".card2").index(current_fs))
          .removeClass("active");

        current_fs.animate(
          {},
          {
            step: function () {
              current_fs.css({
                display: "none",
                position: "relative",
              });

              previous_fs.css({
                display: "block",
              });
            },
          }
        );
      });
    });


    GetBrand()
    GetServices();
    getdata();
    GetVehicle();
  }, []);

  let SetChoosedMechanic = (data) => {
    var id = data.split("-")[0];
    var user_id = data.split("-")[1];
    var RealServiceId = data.split("-")[2];
    setMechanicServiceId(id);
    setMechanicUserId(user_id);
    setRealServiceId(RealServiceId);
  };
  const setRedirection =(id,name)=>{
    // alert(id)
    localStorage.setItem("manufacturer",Brand)
    localStorage.setItem("modal",Modal)
    localStorage.setItem("type",Type)
    
  
    localStorage.setItem("ServiceTypeId",id)
    localStorage.setItem("ServiceTypeName",name)
    history.push('/Services-detail')
  }
  const GetBrand = async () => {
    await fetch("http://144.91.110.221:3032/GetBrand")
      .then((res) => res.json())
      .then((data) => {
        console.log("Brands " + data);
        SetAllBrand(data);
      })
      .then((err) => console.log(err));
  };
  const GetVehicle = async () => {
    // brandid=await AsyncStorage.getItem('vehiclebrand')
    fetch("http://144.91.110.221:3032/GetVehicle")
      .then((res) => res.json())
      .then((data) => {
        console.log("Brands " + data);
        SetAllVehicle(data);
      })
      .then((err) => console.log(err));
  };
  const Addtocart = async (_id, m_id) => {
    var id = await localStorage.getItem("userid");

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
        <div class="container-fluid" style={{ width: "90%" }}>
          <div class="row">
            <div className="col-8  p-2 blankCol ">
              <div className="row ">
                {SingleMechanicdata == ""
                  ? AllServices.map((item, index) => {
                      if (item.service_type._id == ServiceTypeId) {
                        return (
                          <div
                            className="col-12 Card serviceCard "
                            style={{ background: "#fff" }}
                          >
                            <div className="row pt-1 ">
                              <div className="col-3 blankCol">
                                <img
                                  class="service_itemImg"
                                  src={
                                    "http://144.91.110.221:3032/" + item.image
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="col-9 blankCol">
                                <div className="row">
                                  <div className="col-9 ">
                                    <h4 className="text-dark font-weight-bold text-center">
                                      {item.name}
                                    </h4>
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
                                </div>
                              </div>
                            </div>
                            <div className="row pb-1">
                              <div className="col-3">
                                <h5
                                  className="text-white text-center font-weight-bold servicePrice"
                                  style={{
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <i class="bx bx-rupee"></i>
                                </h5>
                              </div>
                              <div className="col-6"></div>
                            </div>
                          </div>
                        );
                      }
                    })
                  : SingleMechanicdata.map((item, index) => {
                      return (
                        <div className="col-12 card ">
                          <div className="row  pt-1 ">
                            <div className="col-3 blankCol">
                              <img
                                class="service_itemImg"
                                src={
                                  "http://144.91.110.221:3032/" +
                                  item.service.image
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-9 blankCol">
                              <div className="row">
                                <div className="col-9">
                                  <h4 className="text-dark font-weight-bold text-center">
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
                              </div>
                            </div>
                          </div>
                          <div className="row pb-1">
                            <div className="col-3 blankCol">
                              <h5
                                className="text-white text-center servicePrice"
                                style={{
                                  background: "#322170",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                <i class="bx bx-rupee"></i> {item.price}
                              </h5>
                            </div>
                            {/* add cart button */}
                            <div className="col-9  blankCol pr-0">
                              {localStorage.getItem("userid") == "" ? (
                                <div className="text-right">
                                  <button
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="btn btn-info btn-sm addCartBtn"
                                  >
                                    <i class="bx bxs-cart-add"></i>
                                    ADD TO CART
                                  </button>
                                </div>
                              ) : (
                                <button
                                  className="btn btn-info btn-sm addCartBtn"
                                  onClick={() => {
                                    Addtocart(item._id, item.user._id);
                                  }}
                                >
                                  ADD TO CART
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                {SingleMechanicdata != ""
                  ? AllServices.map((item, index) => {
                      if (
                        item.service_type._id == ServiceTypeId &&
                        !JSON.stringify(SingleMechanicdata).includes(
                          item._id
                        ) &&
                        !JSON.stringify(SingleMechanicdata).includes(item.name)
                      ) {
                        return (
                          <div className="col-12 Card serviceCard ">
                            <div className="row ">
                              <div className="col-3 blankCol">
                                <img
                                  class="service_itemImg"
                                  src={
                                    "http://144.91.110.221:3032/" + item.image
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="col-9 blankCol">
                                <div className="row">
                                  <div className="col-9 ">
                                    <h4 className="text-dark font-weight-bold  text-center">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <div className="col-3  TimeBg blankCol">
                                    <div className="">
                                      <h6 className=" text-center timing">
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
                                <div className="">
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
                                  <div className="row mb-1">
                                    <div className="col-4"></div>
                                    <div className="col-8  text-danger pr-0">
                                      <h5 className="  text-white TimeBg timing">
                                        This service is not available for this
                                        mechanic
                                      </h5>
                                    </div>
                                  </div>
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
                  <div className="row p-2" style={{ background: "#3E288C" }}>
                    <div className="col-4 blankCol">
                      <img
                        src={require("./Images/Glogo.png").default}
                        class="img-fluid"
                        alt="logo"
                      />
                    </div>
                    <div className="col-8 blankCol p-3">
                      <h2
                        class=" get-bonus text-center text-white "
                        style={{
                          fontFamily: "TransRobotics",
                          fontSize: "55px",
                        }}
                      >
                        Greaser
                      </h2>
                      <p
                        class="text-white text-center mb-0"
                        style={{
                          lineHeight: "0",
                        }}
                      >
                        Anytime Anywhere
                      </p>
                      <button className="btn btn-sm" style={{float:"right"}}><i
                                      class="bx bxs-plus-square"
                                      style={{ fontSize: "40px" }}
                                    ></i></button>
                    </div>
                  </div>
              <div class="row d-flex justify-content-center align-items-center h-100 ChooseCarSection">
              <div class="col-12 col-md-11 col-lg-10 col-xl-9">
                <div class="card card0 border-0">
                  <div class="row">
                    <div class="col-12">
                      <div class="card card00 m-2 border-0">
                        <div class=" px-3 mt-4 flex-column-reverse">
                          <div class="col-md-12">
                            <div class="card2 first-screen show ml-2">
                              <div class="row px-3 ">
                                <div class="form-group ">
                                  {/* <input type="text" id="email" class="form-control" required />  */}
                                  <select
                                    className="form-control text-dark"
                                    onChange={(e) => {
                                      SetBrand(e.target.value);
                                    }}
                                  >
                                    <option value="">Manufacturer...</option>
                                    {AllBrand.map((item, index) => {
                                      if(item.status==0)
                                      return (
                                        <option className="" value={item.name}>
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  {/* <label class="ml-3 form-control-placeholder" for="email" >Email</label>  */}
                                </div>
                                <div class="next-button text-center ml-2">
                                  {" "}
                                  <span class="fa fa-arrow-right"></span>{" "}
                                </div>
                              </div>
                            </div>
                            <div class="card2 ml-2">
                              <div class="row px-3 mt-3">
                                <div class="form-group mt-1 mb-1">
                                  {/* <input type="password" id="pwd" class="form-control" required />  */}
                                  <select
                                    className="form-control text-dark"
                                    onChange={(e) => {
                                      SetModal(e.target.value);
                                    }}
                                  >
                                    <option className="text-light" value="">
                                      Choose Model..
                                    </option>
                                    {AllModal.map((item, index) => {
                                      if (item.manufacturer.name == Brand)
                                        return (
                                          <option value={item.name}>
                                            {item.name}
                                          </option>
                                        );
                                    })}
                                  </select>
                                  {/* <label class="ml-3 form-control-placeholder" for="pwd" >Password</label> */}
                                </div>
                                <div class="next-button text-center mt-1 ml-2">
                                  {" "}
                                  <span class="fa fa-arrow-right"></span>{" "}
                                </div>
                                <div class="col-12">
                                </div>
                              </div>
                              <div class="row mt-3 mb-5"></div>
                            </div>
                            <div class="card2 ml-2">
                              <div class="row px-3 mt-3">
                                {/* <p class="mb-0 w-100">Select your Country</p> */}
                                <div class="form-group mt-3 ">
                                  <select
                                    className="form-control text-dark"
                                    onChange={(e) => {
                                      SetType(e.target.value);
                                    }}
                                  >
                                    <option className="text-light" value="">
                                      Choose Type..
                                    </option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Deisel">Deisel</option>
                                    <option value="CNG">CNG</option>
                                    <option value="Electric">Electric</option>
                                  </select>
                                </div>
                                <div class="next-button text-center mt-3 ml-2" onClick={()=>{setRedirection("6094d5427362100a2387c7c2","Periodic Service")}}>
                                  {" "}
                                  <span class="fa fa-arrow-right" ></span>{" "}
                                </div>
                              </div>
                            </div>
                            <div class="card2 ml-2">
                              <div class="row px-3 mt-2 text-center">
                                <h2 class="col-12 text-danger">
                                  <strong>Success !</strong>
                                </h2>
                                <div class="col-12 text-center">
                                  <img
                                    class="tick"
                                    src="https://i.imgur.com/WDI0da4.gif"
                                  />
                                </div>
                                <h6 class="col-12 mt-2">
                                  <i>...we will notify you...</i>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  {AllModal.map((item, index) => {
                    if (
                      item.manufacturer.name ==
                        localStorage.getItem("manufacturer") &&
                      item.name == localStorage.getItem("modal")
                    )
                      return (
                        <div className="row mb-2 p-2">
                          {/* Car image Column */}
                          <div className="col-12 blankCol">
                            <img
                              src={"http://144.91.110.221:3032/" + item.image}
                              // style={{ height: "150px", width: "150px" }}
                              className=""
                              style={{ height: "200px", width: "100%" }}
                              alt="logo icon"
                            />
                          </div>
                          <h4
                            className="text-white text-center w-100"
                            style={{
                              fontSize: "1.1rem",
                              background: "#3E288C",
                              lineHeight: "40px",
                            }}
                          >
                            {item.manufacturer.name} {item.name}
                          </h4>
                          <hr />
                          <div className="CarDetails  col-12 blankCol w-100">
                            <div className="col-6 ">
                              <div className="CarDetails">
                                <h6
                                  className="text-dark font-weight-bold"
                                  style={{ fontSize: "" }}
                                >
                                  {item.manufacturer.name} {item.name}
                                </h6>
                              </div>
                            </div>
                            <div className="col-3 ">
                              <h6 className=" text-dark font-weight-bold">
                                {localStorage.getItem("type")}
                              </h6>
                            </div>
                            <div className="col-3  blankCol">
                              <h6 className="text-dark ">Change</h6>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>

              {/* Mechanoc List start */}
              <div className="mechanicBox border p-2 ">
                <div className="container-fluid">
                  <div className="pt-1 pb-2" style={{ background: "#3e288c" }}>
                    <h4 className="text-white text-center">Mechanics</h4>
                  </div>
                  {MechanicData.map((item, index) => {
                    if (item.user != undefined && item.service != undefined) {
                      if (item.service.service_type._id == ServiceTypeId) {
                        return (
                          <div
                            className="row border mt-4"
                            style={{
                              boxShadow: "0 2px 10px rgb(0 0 0 / 10%)",
                              borderRadius: "2px",
                            }}
                          >
                            <div className="col-5 pl-0 pr-0 blankCol">
                              <img
                                src={
                                  require("./Images/profileMech.jpg").default
                                }
                                className=""
                                style={{ height: "200px", width: "100%" }}
                                alt="logo icon"
                              />
                            </div>
                            <div className="col-7 blankCol">
                              <h5
                                className="text-dark text-center mt-4"
                                style={{ lineHeight: "14px" }}
                              >
                                {item.user.fullname}
                              </h5>
                              <h5
                                className="text-dark text-center "
                                style={{ lineHeight: "0px" }}
                              >
                                <i class="bx bxs-star"></i>
                                <i class="bx bxs-star"></i>
                                <i class="bx bxs-star"></i>
                                <i class="bx bxs-star"></i>
                                <i class="bx bxs-star"></i>
                              </h5>
                              <p
                                className="text-dark"
                                style={{ lineHeight: "1" }}
                              >
                                A mechanic is responsible for inspecting and
                                repairing vehicles, machinery, and light trucks.
                              </p>
                              <div className="row">
                                <div className="col-9 blankCol">
                                  <h6 className="text-dark text-center ">
                                    <strong>Contact</strong> {item.user.mobile}{" "}
                                  </h6>
                                </div>
                                <div className="col-3 blankCol">
                                  <button
                                    className="btn btn-sm AddMechanicBtn"
                                    onClick={(e) => {
                                      getSingleMechanicdata(item.user._id);
                                    }}
                                  >
                                    <i
                                      class="bx bxs-plus-square"
                                      style={{ fontSize: "40px" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-3" style={{ backgroundColor: "#fff" }}>
        <div class="container-fluid" style={{ width: "90%" }}>
          <h3 className="text-dark pb-3">Related Services</h3>
          {/* Carousel  */}
          <div className="row">
            <div className="col-8 pb-3 pr-0 pl-0">
              <Carousel
                swipeable={true}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {AllServices.map((item, index) => {
                  return (
                    <div>
                      <div className="row ">
                        <div className="col-1"></div>
                        <div className="col-10 carouselcardService">
                          <div className="row ">
                            <div className="col-12 text-center">
                              <img
                                src={"http://144.91.110.221:3032/" + item.image}
                                style={{
                                  height: "150px",
                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="col-12 text-center pt-4">
                              <h6 className="text-white">{item.name}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <h3 className="text-dark pt-3 pb-3">Review & Rating</h3>

          <div className="row ">
            <div className="col-8 blankCol" style={{ background: "#F6F6F6" }}>
              <div className="row p-1">
                <div className="col-2 blankCol">
                  <div class="circle">
                    <h2 className="text-center alignmentCol">S</h2>
                  </div>
                </div>
                <div className="col-10 blankCol">
                  <h4 className="text-dark mt-3">Sumit sharma</h4>
                  <div className="row">
                    <div className="col-6 blankCol">
                      <h5 className="">
                        <i class="bx bxs-star" style={{ color: "#F7A14A" }}></i>
                        <i class="bx bxs-star" style={{ color: "#F7A14A" }}></i>
                        <i class="bx bxs-star" style={{ color: "#F7A14A" }}></i>
                        <i class="bx bxs-star" style={{ color: "#F7A14A" }}></i>
                        <i class="bx bxs-star" style={{ color: "#F7A14A" }}></i>
                      </h5>
                    </div>
                    <div className="col-6 blankCol">
                      <p className="text-dark text-right">
                        Publish 1 month ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-1 p-1">
                <div className="col-12 blankCol">
                  <h6 className="text-dark" style={{ fontSize: "14px" }}>
                    I always keep my car’s brake safety ahead of everything. I
                    ordered an extra pair of brake pads from GoMechanic. Pads
                    were original and genuine.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
          {/* more button */}
          <div className="row">
            <div className="col-8">
              <div className="mt-3 text-center">
                <button className="text-dark MoreBTn">
                  <i class="bx bx-down-arrow-alt"></i>
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-12  pb-5">
              <Carousel
                swipeable={false}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {AllServices.map((item, index) => {
                  return (
                    <div>
                      <Link to={"/SingleService/" + item._id}>
                        <div className="row ">
                          <div className="col-1"></div>
                          <div
                            className="col-10 carouselcardService"
                            style={{ height: "420px" }}
                          >
                            <div className="row ">
                              <div className="col-12 text-center">
                                <img
                                  src={
                                    "http://144.91.110.221:3032/" + item.image
                                  }
                                  style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="col-12 text-center pt-4">
                                <h3>{item.name}</h3>
                                <p>
                                  <div
                                    className="blogDescrption"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        item.features.slice(0, 100) +
                                        " See more...",
                                    }}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-1"></div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default ServiceDetail;
