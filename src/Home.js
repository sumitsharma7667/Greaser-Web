import React ,{useEffect,useState}from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'; 
import './homepage.css';
import './widget.css';
import logo from './logo.svg';
import {Link} from "react-router-dom";

function Home(props) {

  const[AllBrand,SetAllBrand]=useState([])
  const[AllModal,SetAllVehicle]=useState([])

  const[Brand,SetBrand]=useState([])
  const[Modal,SetModal]=useState([])
  const[Type,SetType]=useState([])
  

    useEffect(()=>{




        $(document).ready(function(){
    
            var current_fs, next_fs, previous_fs;
            
            // No BACK button on first screen
            if($(".show").hasClass("first-screen")) {
            $(".prev").css({ 'display' : 'none' });
            }
            
            // Next button
            $(".next-button").click(function(){
            
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            
            $(".prev").css({ 'display' : 'block' });
            
            $(current_fs).removeClass("show");
            $(next_fs).addClass("show");
            
            $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");
            
            current_fs.animate({}, {
            step: function() {
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            
            next_fs.css({
            'display': 'block'
            });
            }
            });
            });
            
            // Previous button
            $(".prev").click(function(){
            
            current_fs = $(".show");
            previous_fs = $(".show").prev();
            
            $(current_fs).removeClass("show");
            $(previous_fs).addClass("show");
            
            $(".prev").css({ 'display' : 'block' });
            
            if($(".show").hasClass("first-screen")) {
            $(".prev").css({ 'display' : 'none' });
            }
            
            $("#progressbar li").eq($(".card2").index(current_fs)).removeClass("active");
            
            current_fs.animate({}, {
            step: function() {
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            
            previous_fs.css({
            'display': 'block'
            });
            }
            });
            });
            
            });


        GetBrand()
        GetVehicle()
    },[])

    const GetBrand = async() => {       
      await fetch("http://144.91.110.221:3032/GetBrand")
          .then(res => res.json())
          .then(data => {
              console.log("Brands "+data)
              SetAllBrand(data)           
          })
          .then(err => console.log(err))
  }

  const GetVehicle = async() => {
    // brandid=await AsyncStorage.getItem('vehiclebrand')    
    fetch("http://144.91.110.221:3032/GetVehicle")
      .then(res => res.json())
      .then(data => {
        console.log("Brands " + data)
        SetAllVehicle(data)
      })
      .then(err => console.log(err))
  }
    
  return (
<>
<Header />
        <section className="FirstSection">
        <div className="row" style={{display:"contents"}}>
            <div className="col-7">
            <h1></h1>
            </div>
            <div className="col-5">
           
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-md-11 col-lg-10 col-xl-9">
      <div class="card card0 border-0">
        <div class="row">
          <div class="col-12">
            <div class="card card00 m-2 border-0">
              <div class="row text-center justify-content-center px-3">
                <p class="prev text-danger" id="back"><span class="fa fa-long-arrow-left"> Go Back</span></p>
                <h3 class="mt-4">Get instant quotes for your car service</h3>
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
                    <div class="row px-3 mt-4">
                      <div class="form-group mt-1 mb-1"> 
                      {/* <input type="text" id="email" class="form-control" required />  */}
                      <select className="form-control" onChange={(e)=>{SetBrand(e.target.value)}}>
                          <option value="">Manufacturer...</option>
                          {AllBrand.map((item,index)=>{
                            return(
                              <option value={item.name}>{item.name}</option>
                            )
                          })}
                          
                      </select>
                      {/* <label class="ml-3 form-control-placeholder" for="email" >Email</label>  */}
                      </div>
                      <div class="next-button text-center mt-1 ml-2"> <span class="fa fa-arrow-right"></span> </div>
                    </div>
                    {/* <div class="row px-3 mt-1 mb-5">
                      <div class="custom-control custom-checkbox"> <input checked id="customCheck1" type="checkbox" class="custom-control-input" /> <label for="customCheck1" class="custom-control-label">I want to receive promo emails</label> </div>
                    </div> */}
                  </div>
                  <div class="card2 ml-2">
                    <div class="row px-3 mt-3">
                      <div class="form-group mt-1 mb-1"> 
                      {/* <input type="password" id="pwd" class="form-control" required />  */}
                      <select className="form-control" onChange={(e)=>{SetModal(e.target.value)}}>
                          <option value="">Choose Model..</option>
                          {AllModal.map((item,index)=>{
                            if(item.manufacturer.name == Brand)
                            return(
                              <option value={item.name}>{item.name}</option>
                            )
                          })}
                      </select>
                      {/* <label class="ml-3 form-control-placeholder" for="pwd" >Password</label> */}
                       </div>
                      <div class="next-button text-center mt-1 ml-2"> <span class="fa fa-arrow-right"></span> </div>
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
                    <div class="row mt-3 mb-5">
                  
                    </div>
                  </div>
                  <div class="card2 ml-2">
                    <div class="row px-3 mt-3">
                      {/* <p class="mb-0 w-100">Select your Country</p> */}
                      <div class="form-group mt-3 mb-4">
                      <select className="form-control" onChange={(e)=>{SetType(e.target.value)}}>
                          <option value="">Choose Type..</option>
                          <option value="Petrol">Petrol</option>
                          <option value="Deisel">Deisel</option>
                          <option value="CNG">CNG</option>
                          <option value="Electric">Electric</option>
                      </select>
                      </div>
                      {/* <div class="form-group mt-3 mb-4">
                       <input type="mobile" placeholder="Enter your mobile number" class="form-control" required /> 
                      </div> */}
                      
                      <div class="next-button text-center mt-3 ml-2"> <span class="fa fa-arrow-right"></span> </div>
                    </div>
                  </div>
                  <div class="card2 ml-2">
                    <div class="row px-3 mt-2 mb-4 text-center">
                      <h2 class="col-12 text-danger"><strong>Success !</strong></h2>
                      <div class="col-12 text-center"><img class="tick" src="https://i.imgur.com/WDI0da4.gif" /></div>
                      <h6 class="col-12 mt-2"><i>...we will notify you...</i></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row px-3 text-center">
                <h2 class=" get-bonus mt-4 mb-5" style={{color:"#bdbdbd"}}> <span class="text-white" style={{fontFamily:"TransRobotics",fontSize:"50px"}}>Greaser</span> Anytime Anywhere</h2>
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
        <div className="row">
        <div className="col-12 ">
         <h2 className="servicesHeading">Services</h2>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/car.svg').default} />
            <h6 className="homeservicecard-subheading">Servicing</h6>
            </div>
            </Link>
          </div>

          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/spray-gun.svg').default} />
            <h6 className="homeservicecard-subheading">Denting & Painting</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/customization.svg').default} />
            <h6 className="homeservicecard-subheading">Custamization</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/accessories.svg').default} />
            <h6 className="homeservicecard-subheading">Accesories</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/wash.svg').default} />
            <h6 className="homeservicecard-subheading">Car Cleaning</h6>
            </div>
            </Link>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/insurance.svg').default} />
            <h6 className="homeservicecard-subheading">Claim Ypur Insurance</h6>
            </div>
            </Link>
          </div>

          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/battery.svg').default} />
            <h6 className="homeservicecard-subheading">Batteries</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/windshield.svg').default} />
            <h6 className="homeservicecard-subheading">Glasses &<br/> Windshield</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/tyre.svg').default} />
            <h6 className="homeservicecard-subheading">Wheels & Tyres</h6>
            </div>
            </Link>
          </div>
          <div className="SecondSectionCard">
            <Link to="/Services-detail"> 
            <div className="homepage-card">
            <img src={require('../src/Images/headlights.svg').default} />
            <h6 className="homeservicecard-subheading">Lights</h6>
            </div>
            </Link>
          </div>
        </div>
        </div>
        </div>
        </section>


<section className="howItWork-section">
<header class="header-design">
  <div class="listar-map-button">
    <div class="listar-map-button-text" style={{display:"inline-block", opacity: 1}}>
      <span class="icon-map2">
        How it Works? </span>
    </div>
  </div>

  <div class="footer-wave"></div>
</header>
<div class="pset">
  <div class="container">
    <div class="row listar-feature-items">

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">

          <a href="#" ></a>

          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Businesses" class="listar-image-icon" src="https://image.flaticon.com/icons/svg/1899/1899582.svg" />
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop: "0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>01</span>
                    Customers </span>
                </div>

                <div class="listar-feature-item-excerpt">
                  Start publish listings to show everyone the details and goodies of your establishment. </div>

              </div>
            </div>
          </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">

          <a href="#/" target="_blank"></a>

          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Customers" class="listar-image-icon" src="https://image.flaticon.com/icons/svg/1899/1899506.svg" />
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop: "0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>02</span>
                    Service</span>
                </div>

                <div class="listar-feature-item-excerpt">
                  Easily find interesting places by local experts, save time by checking listing features. </div>

              </div>
            </div>
          </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
        <div class="listar-feature-item listar-feature-has-link">

          <a href="#" ></a>

          <div class="listar-feature-item-inner">

            <div class="listar-feature-right-border"></div>

            <div class="listar-feature-block-content-wrapper">
              <div class="listar-feature-icon-wrapper">
                <div class="listar-feature-icon-inner">
                  <div>
                    <img alt="Feedback" class="listar-image-icon" src="https://image.flaticon.com/icons/svg/1899/1899604.svg" />
                  </div>
                </div>
              </div>

              <div class="listar-feature-content-wrapper" style={{paddingTop: "0px"}}>

                <div class="listar-feature-item-title listar-feature-counter-added">
                  <span><span>03</span>
                    Feedback </span>
                </div>

                <div class="listar-feature-item-excerpt">
                  Visitors discuss listings to share experiences, so businesses get reputation consolidated. </div>

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
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className="row d-flex">
              <div className="col-8 Stroeicon">
                <div>
                <a href="#">
                <img className="img1" src={require('../src/Images/appStor.svg').default} class="m-2" alt="googlelogo"/></a>
                <a href="#">
                <img className="img2" src={require('../src/Images/playStore.svg').default} alt="apple"/>
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
              <img src={require('../src/Images/gm-app-download.png').default}></img>
            </div>
            <div className="col-2 downloadSection">
            <img src={require('../src/Images/gratis.png').default}></img>
            </div>
          </div>
        </section>
        

      <section className=" features-section">
        <div className="container-fluid HomeCard_conatainer">
          <div className="col-12 text-center p-3">
             <h1 className="Features-heading">Features</h1>
            </div>
          <div className="row">
            <div className="col-3">
               <div class="card FeatureSEct_card a">
                  <span></span>
                  <div class="content">
                     <h2>Pickup</h2>
                         <p>
                          Free Doorstep Pick-up and Drop
                          <br/>No more unnecessary workshop visits!
                          </p>
                       <a href="#">Read More</a>
                  </div>
                </div>
            </div>
            <div className="col-3">
              <div class="card FeatureSEct_card a">
                  <span></span>
                  <div class="content">
                     <h2>Pricing</h2>
                          <p>Upfront & Competitive Pricing<br/>
                           Save Upto 40% on your car’s service</p>
                       <a href="#">Read More</a>
                  </div>
                </div>
            </div>
            <div className="col-3">
              <div class="card FeatureSEct_card a">
                  <span></span>
                  <div class="content">
                     <h2>Warranty</h2>
                          <p> Network Warranty on Car Service<br/>
                             1 Month/1000kms unconditional warranty on car service.</p>
                       <a href="#">Read More</a>
                  </div>
                </div>
            </div>
             <div className="col-3">
              <div class="card FeatureSEct_card a">
                  <span></span>
                  <div class="content">
                     <h2>Spare Parts</h2>
                          <p> 100% Genuine Spare Parts<br/>
                          Only OEM/OES spare parts used. Quality Assured!</p>
                       <a href="#">Read More</a>
                  </div>
                </div>
            </div>
          </div>
            </div>











         

        </section>
       <Footer />
      </>
  )
}
export default Home