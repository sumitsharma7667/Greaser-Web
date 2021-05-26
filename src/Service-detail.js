import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
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
function ServiceDetail(props) {
  const Addtocart = async (_id, m_id) => {
    userid = await localStorage.getItem("userid");
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
        if (JSON.stringify(res).includes(_id) == false) {
          fetch("http://144.91.110.221:3032/Addtocart", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userid: userid,
              _id: _id,
              m_id: m_id,
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              //  contextdata.getcounts()
              alert("added successfully");
            });
        } else {
          alert("This Service is allready in Your Cart ");
        }
      });
  };
  const [AllServices, SetAllService] = useState([]);
  useEffect(() => {
    GetServices();
  }, []);
  const GetServices = () => {
    fetch("http://144.91.110.221:3032/GetServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetAllService(data);
      })
      .then((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <section id="about" class="section-large-text">
        <div class="service_overlay">
          <div class="section-large-text-inner">
            <h3>Service</h3>
            <h2>{props.match.params.ServiceTypeName}</h2>
          </div>
        </div>
      </section>
      {/* Card Section */}
      <section className="pt-5 pb-5" style={{ backgroundColor: "#fff" }}>
        <div class="container">
          <div class="row">
            <div className="col-8  p-2  ">
              {AllServices.map((item, index) => {
                if (item.service_type._id == props.match.params.ServiceTypeId) {
                  return (
                    <div className="row border">
                      <div className="col-3">
                        <img
                          class="service_itemImg"
                          src={"http://144.91.110.221:3032/" + item.image}
                          alt=""
                        />
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <div className="col-6 p-2">
                            <h4 className="text-dark">{item.name}</h4>
                          </div>
                          <div className="col-6">
                            <div className="">
                              <h4 className="text-dark text-right">
                                <i class="bx bx-time"></i> 4 hrs Taken
                              </h4>
                            </div>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li className="text-dark">
                                {" "}
                                1000 Kms or 1 Month Warranty
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li className="text-dark">
                                1000 Kms or 1 Month Warranty
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                            <div className="col-6">
                              <h5 className="text-dark">
                                <i class="bx bx-badge-check"></i> Engine Oil
                                Replacement
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    // <div class="col-3 blankCol">
                    //   <div class="card card_cont" id="container">
                    //     <div class="row">
                    //       <div class="col-12">
                    //         <div class="Heading_ServiceItem pt-3">
                    //           <h4>{item.name}</h4>
                    //         </div>
                    //       </div>
                    //     </div>
                    //     <div class="row">
                    //       <div class="col-12">
                    //         <img
                    //           class="service_itemImg"
                    //           src={"http://144.91.110.221:3032/" + item.image}
                    //           alt=""
                    //         />
                    //       </div>
                    //     </div>
                    //     <div class="row">
                    //       <div class="col-12">
                    //         <div class="Heading_ServiceItem">
                    //           {/* <h4>{item.price}/-</h4> */}
                    //         </div>
                    //       </div>
                    //     </div>
                    //     <div class="row">
                    //       <div class="col-12">
                    //         <Link to={"/SingleService/"+item._id}>
                    //           <button
                    //             id="button"
                    //             class="Add_ToCart"
                    //             type="button"
                    //             name="button"
                    //           >
                    //             Choose Mechanic
                    //           </button>
                    //         </Link>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </div>
                  );
                }
              })}
            </div>
            <div className="col-4 ">
              <div className="card mechanicCard ">
                <div className="container">
                  <div className="row p-2">
                    <div className="col-12">
                      <h4 className="text-dark ">Disc turning</h4>
                      <p className="text-dark ">
                        Get professional periodic car service, car repair, wheel
                        care services, cashless insurance claim and much more
                        done at affordable prices.
                      </p>
                    </div>
                  </div>
                  <select
                    className="form-control text-dark"
                    placeholder="Select Mechanic"
                  >
                    {" "}
                    Select Mechanic
                  </select>
                  <button className="btn btn-primary mt-3">Check Prices</button>
                  <div className="row p-2 mt-2">
                    <div className="col-6">
                      <h4 className="text-dark">
                        <i class="bx bxs-star"></i>
                        4.8/s
                      </h4>
                      <p className="text-dark">Based on 2000+ Reviews</p>
                    </div>
                    <div class="vl"></div>
                    <div className="col-5">
                      <h4 className="text-dark text-center">
                        25,000+
                      </h4>
                      <p className="text-dark text-center">Happy customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="first_servicesCarousel">
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
            <Carousel
              swipeable={false}
              draggable={false}
              // showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
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
                if (item.service_type._id != props.match.params.ServiceTypeId) {
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
                                    width: "320px",
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
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default ServiceDetail;
