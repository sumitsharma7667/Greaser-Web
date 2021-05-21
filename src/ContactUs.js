import React ,{useEffect}from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'; 
import './homepage.css';
import './widget.css';
import logo from './logo.svg';
import {Link} from "react-router-dom";

function ContactUs(props) {
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

      <section className="MapSection">
        <div className="card MaP_card">
          <iframe
            className="IframeMp"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2695.5759731392045!2d19.053322250160253!3d47.49817323859679!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1399281289810"
          ></iframe>
          <div class="marker">
            <div class="dot"></div>
            <div class="grow"></div>
          </div>
        </div>
      </section>
      <section className="ContactUsSec">
        <div className="container contactUsCOnt">
          <div className="row contactUsCOnt">
            <div className="col-6 blankCol">
              <div className="card CarBgImg">
                <div className="p-5">
                  <h4>Do Not Hesitate to Reach Us</h4>
                  <p className="COntact_para">
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </p>
                  <div className="mt-5">
                    <i class="fas fa-phone-square-alt ContactUs_icon">
                      <span className="info_Contact"> 7500872014</span>
                    </i>
                  </div>
                  <div className="mt-5">
                    <i class="fas fa-envelope-square ContactUs_icon">
                      <span className="info_Contact"> info@giksindia.com</span>
                    </i>
                  </div>
                  <div className="mt-5">
                    <i class="fas fa-map-marker-alt ContactUs_icon">
                      <span className="info_Contact">
                        {" "}
                        222 Ram vihar Ballupur
                      </span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 blankCol">
              <div className="Form_contact card">
                <input
                  class="form-control COntactInput"
                  type="text"
                  placeholder="Name"
                />
                <input
                  class="form-control COntactInput"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  class="form-control COntactInput"
                  type="text"
                  placeholder="Company"
                />
                <input
                  class="form-control COntactInput"
                  type="phone"
                  placeholder="Phone"
                />
                <textarea
                  rows="4"
                  class="form-control COntactInput"
                  placeholder="Message"
                ></textarea>
                <div className="text-center">
                  <button className="btn btn-primary m-2">Submit</button>
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
export default ContactUs