import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
function Header(props) {
  const [mobile, setmobile] = useState(8126273523);
  const [password, setpassword] = useState();
  const [passwordSecure, setpasswordSecure] = useState(true);
  const [visible, setvissible] = useState(false);
  const [Access, setAccess] = useState(localStorage.getItem("username"));
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
          window.location.reload();
          // window.location.href = "/Services-Packages";
          setAccess(localStorage.getItem("username"));
        } catch (e) {
          alert("invalid user name or password");
          console.log(e);
        }
      });
  };
  const logOut = async () => {
    await localStorage.setItem("userid", "");
    await localStorage.setItem("username", "");
    await localStorage.setItem("role", "");
    window.location.href = "/Home";
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "50%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };
  return (
    <>
      <nav className="w-100 NavBg">
        <div id="myNav" className="overlay">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => {
              closeNav();
            }}
          >
            &times;
          </a>
          <div className="overlay-content">
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
                className="bx bx-log-in"
                data-toggle="modal"
                data-target="#myModal"
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
                <i className="bx bx-log-out"></i>
              </Link>
            </span>
            <span
              className="pr-5"
              style={{
                fontSize: "18px",
                float: "right",
                position: "relative",
                top: "15px",
              }}
            >
              <Link className="text-white">
                Howdy {localStorage.getItem("username")}
              </Link>
            </span>
          </span>
        )}
      </nav>

      {/* Modal  */}
      <div id="myModal" className="modal fade text-dark" role="dialog">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content model-sm login_form">
            <div className=" pt-3 pr-4">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body  ">
              <div className="card-body">
                <div className="card-content">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Login
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Sign Up
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="text-center ">
                        <img
                          src={require("./Images/Glogo.png").default}
                          style={{ height: "150px", objectFit: "contain" }}
                          alt="logo icon"
                          className=""
                        />
                      </div>
                      <div className="card-title text-uppercase text-center">
                        Sign In
                      </div>

                      <div className="form-group w-100">
                        <label for="exampleInputUsername" className="sr-only">
                          Username
                        </label>
                        <div className="position-relative has-icon-right text-dark">
                          <input
                            type="text"
                            id="exampleInputUsername"
                            className="form-control input-shadow inputBG"
                            placeholder="Enter Mobile No"
                            onChange={(e) => {
                              setmobile(e.target.value);
                            }}
                          />
                          <div className="form-control-position">
                            <i className="icon-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-group w-100">
                        <label for="exampleInputPassword" className="sr-only">
                          Password
                        </label>
                        <div className="position-relative has-icon-right text-dark">
                          <input
                            type="password"
                            id="exampleInputPassword"
                            className="form-control input-shadow inputBG"
                            placeholder="Enter Password"
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                          <div className="form-control-position">
                            <i className="icon-lock"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-6">
                          <div className="icheck-material-white">
                            <input
                              type="checkbox"
                              className="check_box"
                              id="user-checkbox"
                              checked=""
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-light btn-block"
                        style={{ background: "#531a82" }}
                        onClick={() => {
                          Loginuser();
                        }}
                      >
                        Sign In
                      </button>
                      <div className="card-footer text-center py-3">
                        <p className="text-warning mb-0">
                          Do not have an account?{" "}
                          <Link href="#"> Sign Up here</Link>
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      kshjkfsdgkjdgjdsjkjksdhfhjsd
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
