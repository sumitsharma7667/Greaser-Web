import React,{useEffect,useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
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

function Services(props) {
  const[AllServices,SetAllService]=useState([])
  const [AllServicesType,SetAllServiceType]=useState([])
  useEffect(()=>{
    GetServices();
    GetServiceType()
  },[])
  const GetServiceType = () => {
    fetch("http://144.91.110.221:3032/GetServiceType")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            SetAllServiceType(data)
        })
        .then(err => console.log(err))
}
  const GetServices = () => {
    fetch("http://144.91.110.221:3032/GetServices")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            SetAllService(data)
        })
        .then(err => console.log(err))
    }
  return (
    <>
      <Header />
      <section id="about" class="section-large-text_insrvice_features">
        <div class="service_overlay">
          <div class="section-large-text-inner">
            <h3>We provide you our best</h3>
            <h2>You are in right place to book your service</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              repudiandae laboriosam quia, error tempore porro ducimus voluptate
              laborum nostrum iure.
            </p> */}
          </div>
        </div>
      </section>
      <section className="SecondSection">
        <div className="row">
          <div className="col-12 ">
            <h2 className="servicesHeading_in_service_feature">Services</h2>
          </div>
          <div className="col-12">
            <div className="row " style={{ display: "flex" }}>
            {AllServicesType.map((item,index)=>{
                return(
              <div className="SecondSectionCard w-100">
                <Link to={"/Services-detail/"+item._id+"/"+item.name}>
                  <div className="homepage-card">
                    <img src={"http://144.91.110.221:3032/"+item.image} style={{height:"150px",width:"150px"}} />
                    <h6 className="homeservicecard-subheading">{item.name}</h6>
                  </div>
                </Link>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="first_servicesCarousel">
        <header class="header-design">
          <div class="footer-wave"></div>
        </header>
        <div className="row ">
          <div className="col-12 text-center p-5">
            <h2 className="servicesHeading_in_service_feature">Top Services</h2>
            <h4 className="text-dark">Trending services around you</h4>
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
              {AllServices.map((item,index)=>{
              return(
              <div>
                <Link to="/Services-detail">
                  <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-10 carouselcardService" style={{height:"420px"}}>
                      <div className="row ">
                        <div className="col-12 text-center">
                          <img
                            src={"http://144.91.110.221:3032/"+item.image}
                            style={{ height: "200px",width:"320px",objectFit:"cover" }}
                          />
                        </div>
                        <div className="col-12 text-center pt-4">
                          <h3>{item.name}</h3>
                          <p>
                          <div className="blogDescrption" dangerouslySetInnerHTML={{__html:item.features.slice(0, 100)+" See more..."}} />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1"></div>
                  </div>
                </Link>
              </div>
              )
            })
          }
            </Carousel>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Services;
