import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';
import {Link} from "react-router-dom";
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
         <img src={require('./Images/logo.png').default} className="pt-4" style={{height:"150px"}}/>
         <h4 className="text-dark pt-3"> Rs  ₹499</h4>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-6 p-2">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-6 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
         <Link to="/Cart" class="btn btn-primary btn-sm mt-3" style={{float:"right"}}>Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       </div>
       </div>
     </div>

     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"150px"}}/>
         <h4 className="text-dark pt-3"> Rs  ₹499</h4>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-6 p-2">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-6 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
         <Link to="/Cart" class="btn btn-primary btn-sm mt-3" style={{float:"right"}}>Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"150px"}}/>
         <h4 className="text-dark pt-3"> Rs  ₹499</h4>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-6 p-2">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-6 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
         <Link to="/Cart" class="btn btn-primary btn-sm mt-3" style={{float:"right"}}>Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"150px"}}/>
         <h4 className="text-dark pt-3"> Rs  ₹499</h4>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-6 p-2">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-6 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
         <Link to="/Cart" class="btn btn-primary btn-sm mt-3" style={{float:"right"}}>Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       </div>
       </div>
     </div>
     <div className="row mt-3 pb-5 pt-5 bg-white pl-4 pr-5" style={{boxShadow: "rgb(130 127 127) 0px 4px 17px" ,borderRadius:"10px"}}>
       <div className="col-3 text-center">
         <img src={require('./Images/carousel1.jpeg').default} className="pt-4" style={{height:"150px"}}/>
         <h4 className="text-dark pt-3"> Rs  ₹499</h4>
       </div>
       <div className="col-9">
       <div className="row">
       <div className="col-12">
         <h3 className="text-dark pt-4 pb-4">Dickey Shocker replacement <span  style={{float:"right"}}className="badge badge-secondary"><span><img src={require("./Images/clock.png").default} style={{height:"20px"}} className="pr-2"/></span>Take 2 Hour</span></h3>
         
       </div>
       <div className="col-6 p-2">
         <li className="text-dark">1 Month warranty</li>
         <li className="text-dark">Dickey Shocker OES replacement (set of 2)</li>
         <li className="text-dark">Dickey Shocker new replacement (set of 4)</li>
         
       </div>
       <div className="col-6 ">
       <li className="text-dark">Opening and fitting  Dickey Shocker</li>
         <li className="text-dark">Free Pickup and Drop</li>
         <Link to="/Cart" class="btn btn-primary btn-sm mt-3" style={{float:"right"}}>Add to cart<span> <img src={require('./Images/cart-logo.png').default} style={{height:"30px"}}/></span></Link>
       </div>
       </div>
       </div>
     </div>
     
   </section>
    <section id="home" class="section-showcase">
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
    </section>
   

  
    <Footer />
    </>
  )
}
export default ServiceDetail