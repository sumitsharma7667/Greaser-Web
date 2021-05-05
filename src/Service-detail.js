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
    {/* Card Section */}
      <section className="p-4 " style={{ backgroundColor: "#dedede" }}>
        <div class="contianer">
          <div class="row">
            <div class="col-3">
              <div class="card card_cont" id='container'>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>
                        Dickey Shocker replacement
                      </h4>
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                  <img class="service_itemImg" src={require("./Images/carousel1.jpeg").default} alt=""/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>$120/-</h4>
                   </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                     <Link to="/Cart">
                  <button id='button' class='Add_ToCart' type="button" name="button">ADD TO CART</button>
                 </Link>
                  </div>
                </div>
                 
                    </div>
                </div>
             <div class="col-3">
                    <div class="card card_cont" id='container'>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>
                        Dickey Shocker replacement
                      </h4>
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                  <img class="service_itemImg" src={require("./Images/carousel1.jpeg").default} alt=""/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>$120/-</h4>
                   </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                     <Link to="/Cart">
                  <button id='button' class='Add_ToCart' type="button" name="button">ADD TO CART</button>
                 </Link>
                  </div>
                </div>
                 
                    </div>
            </div>
             <div class="col-3">
                    <div class="card card_cont" id='container'>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>
                        Dickey Shocker replacement
                      </h4>
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                  <img class="service_itemImg" src={require("./Images/carousel1.jpeg").default} alt=""/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>$120/-</h4>
                   </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                     <Link to="/Cart">
                  <button id='button' class='Add_ToCart' type="button" name="button">ADD TO CART</button>
                 </Link>
                  </div>
                </div>
                 
                    </div>
            </div>
             <div class="col-3">
                    <div class="card card_cont" id='container'>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>
                        Dickey Shocker replacement
                      </h4>
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                  <img class="service_itemImg" src={require("./Images/carousel1.jpeg").default} alt=""/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="Heading_ServiceItem">
                      <h4>$120/-</h4>
                   </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                     <Link to="/Cart">
                  <button id='button' class='Add_ToCart' type="button" name="button">ADD TO CART</button>
                 </Link>
                  </div>
                </div>
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