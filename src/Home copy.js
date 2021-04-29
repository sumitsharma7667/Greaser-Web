import React ,{useEffect}from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'; 
import './homepage.css';
import './widget.css';
import logo from './logo.svg';
import {Link} from "react-router-dom";

function Home(props) {
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
    },[])


    
  return (
<>
<Header />
        <section className="FirstSection">
        <div className="row" style={{display:"contents"}}>
            <div className="col-7">
            <h1></h1>
            </div>
            <div className="col-5">
           
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-11 col-lg-10 col-xl-9">
      <div class="card card0 border-0">
        <div class="row">
          <div class="col-12">
            <div class="card card00 m-2 border-0">
              <div class="row text-center justify-content-center px-3">
                <p class="prev text-danger" id="back"><span class="fa fa-long-arrow-left"> Go Back</span></p>
                <h3 class="mt-4">Get instant quotes for your car service</h3>
              </div>
              <div class="d-flex flex-md-row px-3 mt-4 flex-column-reverse">
                <div class="col-md-6">
                  <div class="card1">
                    <ul id="progressbar" class="text-center">
                      <li class="active step0"></li>
                      <li class="step0"></li>
                      <li class="step0"></li>
                      <li class="step0"></li>
                    </ul>
                    <h6 class="mb-5">Choose Manufacturer</h6>
                    <h6 class="mb-5">Choose Model</h6>
                    <h6 class="mb-5">Select Type</h6>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card2 first-screen show ml-2">
                    <div class="row text-center px-3 mr-2">
                      <div class="mb-2 col-4"> <span class="fa fa-reddit social"></span> </div>
                      <div class="mb-2 col-4"> <span class="fa fa-facebook social"></span> </div>
                      <div class="mb-2 col-4"> <span class="fa fa-linkedin social"></span> </div>
                      {/* <div class="mb-2 col-2"> <span class="fa fa-google-plus social"></span> </div>
                      <div class="mb-2 col-2"> <span class="fa fa-twitter social"></span> </div>
                      <div class="mb-2 col-2"> <span class="fa fa-dropbox social"></span> </div> */}
                    </div>
                    <div class="row px-3 mt-4">
                      <div class="form-group mt-1 mb-1"> 
                      {/* <input type="text" id="email" class="form-control" required />  */}
                      <select className="form-control">
                          <option value="">Manufacturer...</option>
                          <option value="">Manufacturer...</option>
                          <option value="">Manufacturer...</option>
                          <option value="">Manufacturer...</option>
                          <option value="">Manufacturer...</option>
                      </select>
                      {/* <label class="ml-3 form-control-placeholder" for="email" >Email</label>  */}
                      </div>
                      <div class="next-button text-center mt-1 ml-2"> <span class="fa fa-arrow-right"></span> </div>
                    </div>
                    <div class="row px-3 mt-1 mb-5">
                      <div class="custom-control custom-checkbox"> <input checked id="customCheck1" type="checkbox" class="custom-control-input" /> <label for="customCheck1" class="custom-control-label">I want to receive promo emails</label> </div>
                    </div>
                  </div>
                  <div class="card2 ml-2">
                    <div class="row px-3 mt-3">
                      <div class="form-group mt-1 mb-1"> 
                      {/* <input type="password" id="pwd" class="form-control" required />  */}
                      <select className="form-control">
                          <option value="">Choose Model..</option>
                          <option value="">Choose Model..</option>
                          <option value="">Choose Model..</option>
                          <option value="">Choose Model..</option>
                      </select>
                      {/* <label class="ml-3 form-control-placeholder" for="pwd" >Password</label> */}
                       </div>
                      <div class="next-button text-center mt-1 ml-2"> <span class="fa fa-arrow-right"></span> </div>
                          <div class="col-12">
                        {/* <p class="mb-1">Password must contain</p> */}
                        <div class="row">
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Safe</div>
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Quality</div>
                        </div>
                        <div class="row">
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Easy</div>
                          <div class="col-6"><span class="fa fa-circle text-danger"></span> Reliabe</div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3 mb-5">
                  
                    </div>
                  </div>
                  <div class="card2 ml-2">
                    <div class="row px-3 mt-3">
                      {/* <p class="mb-0 w-100">Select your Country</p> */}
                      <div class="form-group mt-3 mb-4">
                      <select className="form-control">
                          <option value="">Choose Type..</option>
                          <option value="">Choose Model..</option>
                          <option value="">Choose Model..</option>
                          <option value="">Choose Model..</option>
                      </select>
                      </div>
                      <div class="form-group mt-3 mb-4">
                       <input type="mobile" placeholder="Enter your mobile number" class="form-control" required /> 
                      </div>
                      
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
              <div class="row px-3">
                <h2 class="text-muted get-bonus mt-4 mb-5"> <span class="text-danger">Greaser</span> Anytime Anywhere</h2>
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
            <div className="card">
            <img src={require('../src/Images/car.svg').default} />
            <h6>Servicing</h6>
            </div>
          </div>

          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/spray-gun.svg').default} />
            <h6>Denting & Painting</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/customization.svg').default} />
            <h6>Custamization</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/accessories.svg').default} />
            <h6>Accesories</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/wash.svg').default} />
            <h6>Car Cleaning</h6>
            </div>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/insurance.svg').default} />
            <h6>Claim Ypur Insurance</h6>
            </div>
          </div>

          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/battery.svg').default} />
            <h6>Batteries</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/windshield.svg').default} />
            <h6>Glasses &<br/> Windshield</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/tyre.svg').default} />
            <h6>Wheels & Tyres</h6>
            </div>
          </div>
          <div className="SecondSectionCard">
            <div className="card">
            <img src={require('../src/Images/headlights.svg').default} />
            <h6>Lights</h6>
            </div>
          </div>
        </div>
        </div>
        </div>
        </section>
        <section className="ThirdSection">
          <div className="row d-flex">
            <div className="col-6">
            <h3>Download the app</h3>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className="row d-flex">
                <div className="col-4 Stroeicon">
                </div>
                <div className="col-8">
                  <input type="text" className="form-control" />
                  <button className="btn text-white w-100 mt-2" style={{backgroundColor:"#5c0b95"}}>Get the link</button>
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



        <section style={{backgroundColor:"#212121"}} className="pb-5">
          <div className="row">
            <div className="col-12 text-center p-5">
             <h1 className="text-white">Features</h1>
            </div>
          </div>
        <main>
  <ul class="cards-container">
    <li class="cyan-feature-card">
      <h2>Supervisor</h2>
      <p>
        Monitors activity to identify project roadblocks
      </p>
      <img src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-supervisor.svg" 
           alt="supervisor feature icon" />
    </li>

    <li class="red-feature-card">
      <h2>Greaser</h2>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <img src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-team-builder.svg"
           alt="team builder feature icon" />
    </li>

    <li class="orange-feature-card">
      <h2>Karma</h2>
      <p>
        Regularly evaluates our talent to ensure quality
      </p>
      <img src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-karma.svg"
           alt="karma feature icon" />
    </li>

    <li class="blue-feature-card">
      <h2>Calculator</h2>
      <p>
        Uses data from past projects to provide better delivery estimates
      </p>
      <img src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-calculator.svg" 
           alt="calculator feature icon" />
    </li>
  </ul>
</main>

        </section>
       <Footer />
      </>
  )
}
export default Home