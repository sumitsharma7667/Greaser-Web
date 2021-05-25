import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <footer class="footer-section">
      <div class="container-fluid footer_container">
        <div class="footer-cta p-3">
          <div class="row">
            <div class="col-xl-4 col-md-4 ">
              <div class="single-cta">
                <i class="bx bxs-map"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>Ballupur Chowk, Dehradun</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 ">
              <div class="single-cta">
                <i class="bx bx-phone-call"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>98765432100</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 ">
              <div class="single-cta">
                <i class="bx bx-mail-send"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>info@giksindia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 ">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <img
                      src={require("./Images/Glogo.png").default}
                      class="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Greaser aims to be the best of both worlds - Reliable and
                    Cost-effective Car Services. Car Servicing, Car repairs and
                    Car cleaning - we are your one-stop solution for all things
                    cars.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3 className="text-white">Useful Links</h3>
                </div>
                <ul>
                  <li>
                  <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/Services-Packages">Secvice Packages</Link>
                  </li>
                  <li>
                  <Link to="/ContactUs">Contact us</Link>                    
                  </li>
                  {/* <li><a href="#">portfolio</a></li>
                            <li><a href="#">Contact</a></li> */}
                  <li>
                    <a href="#">About us</a>
                  </li>
                  {/* <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Latest News</a></li> */}
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3 className="text-white">Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i class="bx bxl-telegram"></i>
                    </button>
                  </form>
                </div>
                <div class="footer-social-icon mt-3">
                  <span>Follow us</span>
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div className="copy_container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2021
                  <a href="https://giksindia.com/">
                    {" "}
                    <span className="text-white">GIKS INDIA PVT LTD</span>
                  </a>
                </p>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Terms</Link>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/ContactUs">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Header;
