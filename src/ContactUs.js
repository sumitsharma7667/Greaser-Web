import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import "./homepage.css";
import "./widget.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function ContactUs(props) {
  
  // useEffect(() => {
  //  $(document).ready(function () { $("#form1").hide();
  //   $("#formButton").click(function () {
  //    $("#form1").show();
  //   });
  // });
  //     });

  return (
    <>
      <Header />

      {/* <section className="MapSection">
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


        
      </section> */}
      <section className="ContactUsSec">
        <div className="contactUsCOnt">
          <div className="row contactUsCOnt">
            <div className="col-6 blankCol">
              <iframe
                className="IframeMp"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2695.5759731392045!2d19.053322250160253!3d47.49817323859679!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1399281289810"
              ></iframe>
            </div>
            <div className="col-4 blankCol ">
              <div className="alignmentCol">
                <div className="card CarBgImg alignmentCol">
                  <div className="p-4">
                    <h4>Do Not Hesitate to Reach Us</h4>
                    <p className="COntact_para">
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </p>
                    <div className="row mt-3">
                      <div className=" col-1">
                        <i class="bx bx-phone ContactUs_icon"></i>
                      </div>
                      <div className="col-11">
                        <h5 className="info_Contact"> 7500872014</h5>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className=" col-1">
                        <i class="bx bx-mail-send ContactUs_icon"></i>
                      </div>
                      <div className="col-11">
                        <h5 className="info_Contact"> info@giksindia.com</h5>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className=" col-1">
                        <i class="bx bx-current-location ContactUs_icon"></i>
                      </div>
                      <div className="col-11">
                        <h5 className="info_Contact">
                          222 Ghanshala Dental Care <br />
                          Ballupur Dehradun <br />
                          Uttarakhand - 248001
                        </h5>
                      </div>
                    </div>
                    {/* <button className="btn btn-primary" id="formButton">
                      Contact us
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 blankCol " id="form1">
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
export default ContactUs;
