import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
function ServiceDetail(props) {
  return (
    <>
    <Header />
    <section id="about" class="section-large-text">
      <div class="service_overlay">
        <div class="section-large-text-inner">
          <h3>Service</h3>
          <h2>Dainting & painting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro 
          </p>
        </div>
      </div>
    </section>
    <section className="p-5 " style={{backgroundColor:"#dedede"}}>
     

     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/logo1.png').default} className="pt-4" style={{height:"190px"}}/>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-5 pt-2 pb-2 pr-2 pl-4">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-4 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
       </div>
         <div className="col-3 pl-5">
       <h4 className="text-dark pt-3 pb-3"> Rs  ₹3299</h4>
       <Link to="/Cart" class="btn btn-primary btn-sm pt-3" >Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       
       </div>
       </div>
     </div>

     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"190px"}}/>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Disc replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-5 pt-2 pb-2 pr-2 pl-4">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-4 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
       </div>
         <div className="col-3 pl-5">
       <h4 className="text-dark pt-3 pb-3"> Rs  ₹3299</h4>
       <Link to="/Cart" class="btn btn-primary btn-sm pt-3" >Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/logo1.png').default} className="pt-4" style={{height:"190px"}}/>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Break Reapairing <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-5 pt-2 pb-2 pr-2 pl-4">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-4 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
       </div>
         <div className="col-3 pl-5">
       <h4 className="text-dark pt-3 pb-3"> Rs  ₹3299</h4>
       <Link to="/Cart" class="btn btn-primary btn-sm pt-3" >Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/logo1.png').default} className="pt-4" style={{height:"190px"}}/>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-5 pt-2 pb-2 pr-2 pl-4">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-4 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
       </div>
         <div className="col-3 pl-5">
       <h4 className="text-dark pt-3 pb-3"> Rs  ₹3299</h4>
       <Link to="/Cart" class="btn btn-primary btn-sm pt-3" >Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"190px"}}/>
         
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-5 pt-2 pb-2 pr-2 pl-4">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-4">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
       </div>
         <div className="col-3 pl-5">
       <h4 className="text-dark pt-3 pb-3"> Rs  ₹3299</h4>
       <Link to="/Cart" class="btn btn-primary btn-sm pt-3" >Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div> 
       </div>
       </div>
     </div>
     
   </section>
  {/*   <section id="home" class="section-showcase">
      <div class="container">
        <div>
          <h1>Danting & Painting</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
         <ul>
           <li>Lorem ipsum dolor sit amet consectetur</li>
           <li>Lorem ipsum dolor sit amet consectetur</li>
           <li>Lorem ipsum dolor sit amet consectetur</li>
           <li>Lorem ipsum dolor sit amet consectetur</li>
           <li>Lorem ipsum dolor sit amet consectetur</li>
         </ul>
          
        
        
        <Link to="/Cart" class="btn">Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
        </div>
        <div>
        <img src={require("./Images/carousel1.jpeg").default} style={{height:"300px",boxShadow:"2px 10px 30px #2d2b2b"}} alt="" />
        <h4 className="text-dark pt-4"> <span><img src={require("./Images/clock.png").default} style={{height:"50px"}} className="pr-2"/></span> 1 hour 15 minutes</h4>
        </div>
      </div>
    </section> */}
    <section className="first_servicesCarousel">
      <header class="header-design">
           <div class="footer-wave"></div>
      </header>
          <div className="row " >
              <div className="col-12 text-center p-5">
                <h2 className="servicesHeading_in_service_feature" >Simmilar Services</h2>
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
export default ServiceDetail