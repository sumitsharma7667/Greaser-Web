import React,{useState,useEffect}from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Header(props) {
const [mobile, setmobile] = useState(8126273523);
const [password, setpassword] = useState();
const [passwordSecure, setpasswordSecure] = useState(true);
const [visible, setvissible] = useState(false);
const Loginuser = () => {
  fetch("http://144.91.110.221:3032/usersignin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mobile: mobile,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then(async (user) => {
      try {
        const Userid = user.userid;
        await localStorage.setItem("userid", user.user._id);
        await localStorage.setItem("username", user.user.fullname);
        await localStorage.setItem("role", user.user.role);
        window.location.href = "/Services-Packages";
      } catch (e) {
        alert("invalid user name or password");
        console.log(e);
      }
    });
};
  const logOut=async()=>{

    await localStorage.setItem('userid', '')
    await localStorage.setItem('username', '')
    await localStorage.setItem('role', '')
    window.location.href = "/Home";
}

  const openNav=()=> {
    document.getElementById("myNav").style.width = "50%";
  }
  
  const closeNav =()=> {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <>
      <nav className="w-100 NavBg">
        <div id="myNav" class="overlay">
          <a
            href="javascript:void(0)"
            class="closebtn"
            onClick={() => {
              closeNav();
            }}
          >
            &times;
          </a>
          <div class="overlay-content">
            <Link to="/home">Home</Link>
            <Link to="/services-packages">Services</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
        </div>
        <span
          style={{ fontSize: "35px", cursor: "pointer" }}
          className="pl-5 text-white"
          onClick={() => {
            openNav();
          }}
        >
          &#9776;
        </span>
        {localStorage.getItem("username") == "" ? (
          <span className="pr-5" style={{ fontSize: "35px", float: "right" }}>
            <Link className="text-white">
              <i
                class="bx bx-log-in"
                data-toggle="modal"
                data-target="#exampleModal"
              ></i>
            </Link>
          </span>
        ) : (
          <span>
            <span className="pr-5" style={{ fontSize: "35px", float: "right" }}>
              <Link
                onClick={() => {
                  logOut();
                }}
                className="text-white"
              >
                <i class="bx bx-log-out"></i>
              </Link>
            </span>
            <span className="pr-5" style={{ fontSize: "18px", float: "right", position: "relative", top:"15px"}}>
              <Link className="text-white">
                Howdy {localStorage.getItem("username")}
              </Link>
            </span>
          </span>
        )}
      </nav>
      <div class="modal fade " id="exampleModal" role="dialog">
        <div className=" login_formcol blankCol ">
          <div class="card-authentication1 mx-auto login_form ">
            <div class="card-body">
              <div class="card-content">
                <i class="bx bx-x" data-dismiss="modal"></i>
                <div class="text-center ">
                  <img
                    src={require("./Images/Glogo.png").default}
                    style={{ height: "150px", objectFit: "contain" }}
                    alt="logo icon"
                    className=""
                  />
                </div>
                <div class="card-title text-uppercase text-center">Sign In</div>

                <div class="form-group w-100">
                  <label for="exampleInputUsername" class="sr-only">
                    Username
                  </label>
                  <div class="position-relative has-icon-right text-dark">
                    <input
                      type="text"
                      id="exampleInputUsername"
                      class="form-control input-shadow inputBG"
                      placeholder="Enter Mobile No"
                      onChange={(e) => {
                        setmobile(e.target.value);
                      }}
                    />
                    <div class="form-control-position">
                      <i class="icon-user"></i>
                    </div>
                  </div>
                </div>
                <div class="form-group w-100">
                  <label for="exampleInputPassword" class="sr-only">
                    Password
                  </label>
                  <div class="position-relative has-icon-right text-dark">
                    <input
                      type="password"
                      id="exampleInputPassword"
                      class="form-control input-shadow inputBG"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                    <div class="form-control-position">
                      <i class="icon-lock"></i>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-6">
                    <div class="icheck-material-white">
                      <input
                        type="checkbox"
                        class="check_box"
                        id="user-checkbox"
                        checked=""
                      />
                      {/* <label for="user-checkbox" class="text-white">
                            Remember me
                          </label> */}
                    </div>
                  </div>
                  {/* <div class="form-group col-6 text-right text-white">
                        <a href="reset-password.html">Reset Password</a>
                      </div> */}
                </div>
                <button
                  type="button"
                  class="btn btn-light btn-block"
                  style={{ background: "#531a82" }}
                  onClick={() => {
                    Loginuser();
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div class="card-footer text-center py-3">
              <p class="text-warning mb-0">
                Do not have an account? <a href="#"> Sign Up here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
