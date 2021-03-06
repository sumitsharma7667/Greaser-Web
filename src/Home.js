import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import "./homepage.css";
import "./widget.css";
import logo from "./logo.svg";
import { Link,Redirect,useHistory } from "react-router-dom";

function Home(props) {
  if(localStorage.getItem('username')==undefined){
   localStorage.setItem('userid', '')
   localStorage.setItem('username', '')
   localStorage.setItem('role', '')
  }
  const history = useHistory()
  const [AllBrand, SetAllBrand] = useState([]);
  const [AllModal, SetAllVehicle] = useState([]);

  const [Brand, SetBrand] = useState([]);
  const [Modal, SetModal] = useState([]);
  const [Type, SetType] = useState([]);
  const [AllServicesType,SetAllServiceType]=useState([])  
  

  useEffect(() => {
    $(document).ready(function () {
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

    GetBrand();
    GetVehicle();
    GetServiceType();
    
  }, []);

  const GetServiceType = () => {
    fetch("http://144.91.110.221:3032/GetServiceType")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            SetAllServiceType(data)
        })
        .then(err => console.log(err))
}

  const GetBrand = async () => {
    await fetch("http://144.91.110.221:3032/GetBrand")
      .then((res) => res.json())
      .then((data) => {
        console.log("Brands " + JSON.stringify(data));
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
const setRedirection =(id,name)=>{
  // alert(id)
  localStorage.setItem("manufacturer",Brand)
  localStorage.setItem("modal",Modal)
  localStorage.setItem("type",Type)
  

  localStorage.setItem("ServiceTypeId",id)
  localStorage.setItem("ServiceTypeName",name)
  history.push('/Services-detail')
}
  return (
    <>
      <Header />
      <section className="FirstSection">
        <div className="row firstRow ">
          <div className="col-7 blankCol">
            <h1></h1>
          </div>
          <div className="col-5 blankCol">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-11 col-lg-10 col-xl-9">
                <div class="card card0 border-0">
                  <div class="row">
                    <div class="col-12">
                      <div class="card card00 m-2 border-0">
                        <div class="row text-center justify-content-center px-3">
                          <p class="prev" id="back">
                            <span class="fa fa-long-arrow-left"> Go Back</span>
                          </p>
                          <h3 class="mt-4">
                            Get instant quotes for your car service
                          </h3>
                        </div>
                        <div class=" px-3 mt-4 flex-column-reverse">
                          <div class="col-md-12">
                            <div class="card1 d-flex">
                              <ul id="progressbar" class="text-center d-flex">
                                <li class="active step0"></li>
                                <li class="step0 pl"></li>
                                <li class="step0 pl"></li>
                                {/* <li class="step0 pl"></li> */}
                              </ul>
                            </div>
                            <div class="card1 d-flex ml-0 pt-5">
                              <h6 class="mb-5 ">Manufacturer</h6>
                              <h6 class="mb-5 pleft"> Model</h6>
                              <h6 class="mb-5 pleft">Type</h6>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="card2 first-screen show ml-2">
                              {/* <div class="row text-center px-3 mr-2">
                      <div class="mb-2 col-4"> <span class="fa fa-reddit social"></span> </div>
                      <div class="mb-2 col-4"> <span class="fa fa-facebook social"></span> </div>
                      <div class="mb-2 col-4"> <span class="fa fa-linkedin social"></span> </div>
                      <div class="mb-2 col-2"> <span class="fa fa-google-plus social"></span> </div>
                      <div class="mb-2 col-2"> <span class="fa fa-twitter social"></span> </div>
                      <div class="mb-2 col-2"> <span class="fa fa-dropbox social"></span> </div>
                    </div> */}
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
                                  <span class="fa fa-arrow-right" style={{top:"7px", position:"relative"}}></span>{" "}
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
                                  {/* <p class="mb-1">Password must contain</p> */}
                                  {/* <div class="row">
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Safe</div>
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Quality</div>
                        </div>
                        <div class="row">
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Easy</div>
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Reliabe</div>
                        </div> */}
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
                                {/* <div class="form-group mt-3 mb-4">
                       <input type="mobile" placeholder="Enter your mobile number" class="form-control" required /> 
                      </div> */}

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
                      <div class="col-12">
                        <div class="row px-3 text-center">
                          <h2
                            class=" get-bonus mt-4 mb-5"
                            style={{ color: "#bdbdbd" }}
                          >
                            {" "}
                            <span
                              class="text-white"
                              style={{
                                fontFamily: "TransRobotics",
                                fontSize: "50px",
                              }}
                            >
                              Greaser
                            </span>{" "}
                            Anytime Anywhere
                          </h2>
                          {/* <img class="pic ml-auto mr-3" src="https://i.imgur.com/NFodZjZ.png" /> */}
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
      <section className="SecondSection">
        <div className="row pt-3 pb-3">
          <div className="col-12 ">
            <h2 className="servicesHeading">Services</h2>
          </div>
          <div className="col-12">
            <div className="row mt-3 " style={{ display: "flex" }}>
              {AllServicesType.map((item, index) => {
                return (
                  <div className="SecondSectionCard w-100 col-2">
                    <Link onClick={()=>{setRedirection(item._id,item.name)}}>
                      <div className="homepage-card">
                        <img
                          src={"http://144.91.110.221:3032/" + item.image}
                          style={{ height: "150px", width: "150px" }}
                        />
                        <h6 className="homeservicecard-subheading">
                          {item.name}
                        </h6>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="howItWork-section">
        <header class="header-design">
          <div class="listar-map-button">
            <div
              class="listar-map-button-text"
              style={{ display: "inline-block", opacity: 1, position:"relative", top:"80px" }}
            >
              <span class="icon-map2">How it Works? </span>
            </div>
          </div>

          <div class="footer-wave"></div>
        </header>
        <div class="pset">
          <div class="container">
            <div class="row listar-feature-items">
              <div
                class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                data-aos="fade-zoom-in"
                data-aos-group="features"
                data-line-height="25.2px"
              >
                <div class="listar-feature-item listar-feature-has-link">
                  <a href="#"></a>

                  <div class="listar-feature-item-inner">
                    <div class="listar-feature-right-border"></div>

                    <div class="listar-feature-block-content-wrapper">
                      <div class="listar-feature-icon-wrapper">
                        <div class="listar-feature-icon-inner">
                          <div>
                            <img
                              alt="Businesses"
                              class="listar-image-icon"
                              src="https://image.flaticon.com/icons/svg/1899/1899582.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="listar-feature-content-wrapper"
                        style={{ paddingTop: "0px" }}
                      >
                        <div class="listar-feature-item-title listar-feature-counter-added">
                          <span>
                            <span>01</span>
                            Customers{" "}
                          </span>
                        </div>

                        <div class="listar-feature-item-excerpt">
                          Start publish listings to show everyone the details
                          and goodies of your establishment.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
              </div>

              <div
                class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                data-aos="fade-zoom-in"
                data-aos-group="features"
                data-line-height="25.2px"
              >
                <div class="listar-feature-item listar-feature-has-link">
                  <a href="#/" target="_blank"></a>

                  <div class="listar-feature-item-inner">
                    <div class="listar-feature-right-border"></div>

                    <div class="listar-feature-block-content-wrapper">
                      <div class="listar-feature-icon-wrapper">
                        <div class="listar-feature-icon-inner">
                          <div>
                            <img
                              alt="Customers"
                              class="listar-image-icon"
                              src="https://image.flaticon.com/icons/svg/1899/1899506.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="listar-feature-content-wrapper"
                        style={{ paddingTop: "0px" }}
                      >
                        <div class="listar-feature-item-title listar-feature-counter-added">
                          <span>
                            <span>02</span>
                            Service
                          </span>
                        </div>

                        <div class="listar-feature-item-excerpt">
                          Easily find interesting places by local experts, save
                          time by checking listing features.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
              </div>

              <div
                class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                data-aos="fade-zoom-in"
                data-aos-group="features"
                data-line-height="25.2px"
              >
                <div class="listar-feature-item listar-feature-has-link">
                  <a href="#"></a>

                  <div class="listar-feature-item-inner">
                    <div class="listar-feature-right-border"></div>

                    <div class="listar-feature-block-content-wrapper">
                      <div class="listar-feature-icon-wrapper">
                        <div class="listar-feature-icon-inner">
                          <div>
                            <img
                              alt="Feedback"
                              class="listar-image-icon"
                              src="https://image.flaticon.com/icons/svg/1899/1899604.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="listar-feature-content-wrapper"
                        style={{ paddingTop: "0px" }}
                      >
                        <div class="listar-feature-item-title listar-feature-counter-added">
                          <span>
                            <span>03</span>
                            Feedback{" "}
                          </span>
                        </div>

                        <div class="listar-feature-item-excerpt">
                          Visitors discuss listings to share experiences, so
                          businesses get reputation consolidated.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ThirdSection">
        <div className="row d-flex align-items-center h-100">
          <div className="col-6">
            <h1>Download the App</h1>
            <p>
              Choose and book a seamless car service experience and get upto Rs
              500 off with the Greaser App
            </p>
            <div className="row d-flex">
              <div className="col-8 Stroeicon">
                <div>
                  <a href="#">
                    <img
                      className="img1"
                      src={require("../src/Images/appStor.svg").default}
                      class="m-2"
                      alt="googlelogo"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="img2"
                      src={require("../src/Images/playStore.svg").default}
                      alt="apple"
                    />
                  </a>
                </div>
              </div>
              <div className="col-8">
                {/* <input type="text" className="form-control" />
                  <button className="btn text-white w-100 mt-2" style={{backgroundColor:"#5c0b95"}}>Get the link</button> */}
              </div>
            </div>
          </div>
          <div className="col-4 downloadSection">
            <img
              src={require("../src/Images/gm-app-download.png").default}
            ></img>
          </div>
          <div className="col-2 downloadSection">
            <img src={require("../src/Images/gratis.png").default}></img>
          </div>
        </div>
      </section>
      <section className=" features-section">
        <div className="container-fluid HomeCard_conatainer">
          <div className="col-12 text-center p-3">
            <h1 className="Features-heading">Features</h1>
          </div>
          <div className="row">
            <div className="col-3 feat_col_res">
              <div class="card FeatureSEct_card a">
                <span></span>
                <div class="content">
                  <h2>Pickup</h2>
                  <p>
                    Free Doorstep Pick-up and Drop
                    <br />
                    No more unnecessary workshop visits!
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-3 feat_col_res">
              <div class="card FeatureSEct_card a">
                <span></span>
                <div class="content">
                  <h2>Pricing</h2>
                  <p>
                    Upfront & Competitive Pricing
                    <br />
                    Save Upto 40% on your car???s service
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-3 feat_col_res">
              <div class="card FeatureSEct_card a">
                <span></span>
                <div class="content">
                  <h2>Warranty</h2>
                  <p>
                    {" "}
                    Network Warranty on Car Service
                    <br />1 Month/1000kms unconditional warranty on car service.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-3 feat_col_res">
              <div class="card FeatureSEct_card a">
                <span></span>
                <div class="content">
                  <h2>Spare Parts</h2>
                  <p>
                    {" "}
                    100% Genuine Spare Parts
                    <br />
                    Only OEM/OES spare parts used. Quality Assured!
                  </p>
                  <a href="#">Read More</a>
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
export default Home;
