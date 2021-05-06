import React ,{useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'; 
import logo from './logo.svg';
import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function Services(props) {
  useEffect(()=>{
    // $('#myCarousel').carousel({
    //   interval:   4000
    // });
	
    
    
  },[])
  return (
    <>
    <Header />
    <section id="about" class="section-large-text_insrvice_features">      
      <div class="service_overlay">
        <div class="section-large-text-inner">
          <h3>We provide you our best</h3>
          <h2>You are in right place to book your service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p>
        </div>
      </div>
    </section>
    <section className="SecondSection">
        <div className="row">
        <div className="col-12 ">
         <h2 className="servicesHeading_in_service_feature">Services</h2>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/car.svg').default} />
            <h6>Servicing</h6>
            </div>
            </Link>
          </div>

          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/spray-gun.svg').default} />
            <h6>Denting & Painting</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/customization.svg').default} />
            <h6>Custamization</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/accessories.svg').default} />
            <h6>Accesories</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/wash.svg').default} />
            <h6>Car Cleaning</h6>
            </div>
            </Link>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/insurance.svg').default} />
            <h6>Claim Ypur Insurance</h6>
            </div>
            </Link>
          </div>

          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/battery.svg').default} />
            <h6>Batteries</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/windshield.svg').default} />
            <h6>Glasses &<br/> Windshield</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/tyre.svg').default} />
            <h6>Wheels & Tyres</h6>
            </div>
            </Link>
          </div>
          <div className="ServiceFeaturesCard">
            <Link to="/Services-detail"> 
            <div className="service_card">
            <img src={require('../src/Images/headlights.svg').default} />
            <h6>Lights</h6>
            </div>
            </Link>
          </div>
        </div>
        </div>
        </div>
        </section>
        <section className="first_servicesCarousel">
        <header class="header-design">
           <div class="footer-wave"></div>
        </header>
          <div className="row " >
              <div className="col-12 text-center p-5">
                <h2 className="servicesHeading_in_service_feature" >Top Services</h2>
                <h4 className="text-dark">Trending services around you</h4>
              </div>
              <div className="col-12 pl-5 pr-5 pb-5">
            
  <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
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
  <div >
  <Link to="/Services-detail">
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Dainting & Paintin</h3>
          <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>


     </div>
     <div className="col-1">
      </div>
    </div>
    </Link>
  </div>
  <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Car Wash</h3>
    
    <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p> </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  
   <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Great Service</h3>
        <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  
   <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Great Service</h3>
        <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  







  <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Dummy & Painting</h3>
        <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>


     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Car Wash</h3>
    
    <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p> </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  
   <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Great Service</h3>
        <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
  
   <div >
    <div className="row ">
    <div className="col-1">
      </div>
    <div className="col-10 carouselcardService">
    <div className="row ">
      <div className="col-12 text-center">
        <img src={require('./Images/features.jpeg').default} style={{height:"200px"}} />
      </div>
      <div className="col-12 text-center pt-4">
        <h3>Dummy</h3>
     
     <p>this is dummy data for service description. description may be longer than 50 words or more. rhis is only for dummy purpose</p>
     </div>
     </div>
     </div>
     <div className="col-1">
      </div>
    </div>
  </div>
</Carousel>
               </div>
          </div>
        </section>
        
    <Footer />
    </>
  )
}
export default Services