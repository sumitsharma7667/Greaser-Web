import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
function Login(props) {
  const [mobile, setmobile] = useState(8126273523)
  const [password, setpassword] = useState()
  const [passwordSecure, setpasswordSecure] = useState(true)
  const [visible,setvissible]=useState(false)
  const Loginuser = () => {
    fetch("http://144.91.110.221:3032/usersignin"
        , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
            })
        })
        .then(res => res.json())
        .then(async (user) => {

            try {
                const Userid = user.userid
                await localStorage.setItem('userid', user.user._id)
                await localStorage.setItem('username', user.user.fullname)
                await localStorage.setItem('role', user.user.role)
                window.location.href = "/Services-Packages";
                
            }
            catch (e) {
                alert('invalid user name or password')
                console.log(e);
            }
        })

}
  return (
    <>
      {/* <Header /> */}

      <section className="loginBg">
        <div className="container-fluid h-100">
          {/* <h6 className="back_to_home"> */}
            <Link className="pt-5 pl-5" to="/Home">
            <i class="bx bx-arrow-back text-white"></i>Back to home
            </Link>
          {/* </h6> */}
          <div className="row h-100">
            <div className="col-6">
              <div className="login_formcol ">
                <img
                  src={require("./Images/Mechanicimg.png").default}
                  className="mechanicImg "
                  alt="logo icon"
                />
              </div>
            </div>
            <div className="col-6 login_formcol blankCol">
              <div class="card-authentication1 mx-auto login_form ">
                <div class="card-body">
                  <div class="card-content">
                    <div class="text-center ">
                      <img
                        src={require("./Images/Glogo.png").default}
                        style={{ height: "150px", objectFit: "contain" }}
                        alt="logo icon" className=""
                      />
                    </div>
                    <div class="card-title text-uppercase text-center">
                      Sign In
                    </div>

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
                          onChange={(e)=>{setmobile(e.target.value)}}
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
                          onChange={(e)=>{setpassword(e.target.value)}}
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
                      onClick={()=>{Loginuser()}}
                    >
                      Sign In
                    </button>

                    {/* <div class="form-row mt-4">
			  <div class="form-group mb-0 col-6">
			   <button type="button" class="btn btn-light btn-block"><i class="fa fa-facebook-square"></i> Facebook</button>
			 </div>
			 <div class="form-group mb-0 col-6 text-right">
			  <button type="button" class="btn btn-light btn-block"><i class="fa fa-twitter-square"></i> Twitter</button>
			 </div>
			</div> */}
                  </div>
                </div>
                <div class="card-footer text-center py-3">
                  <p class="text-warning mb-0">
                    Do not have an account?{" "}
                    <a href="#"> Sign Up here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Login;
