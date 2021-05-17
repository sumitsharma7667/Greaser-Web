import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Login(props) {
  return (
    <>
    {/* <Header /> */}


		  <section className="loginBg">
			 
			  <div className="container-fluid">
 					<h6 className="back_to_home"><i class='bx bx-arrow-back text-white'></i>Back to home</h6>
				  <div className="row">
					  <div className="col-6">
						  
						  <img src={require('./Images/Mechanicimg.png').default} className="mechanicImg" alt="logo icon" />
					  </div>
					  <div className="col-6 login_formcol">
						<div class="card-authentication1 mx-auto login_form ">
		<div class="card-body">
		 <div class="card-content">
		 	<div class="text-center">
		 		<img src={require('./Images/Glogo.png').default} style={{height:"150px",objectFit:"contain"}} alt="logo icon" />
		 	</div>
		  <div class="card-title text-uppercase text-center">Sign In</div>
		    
			  <div class="form-group w-100">
			  <label for="exampleInputUsername" class="sr-only">Username</label>
			   <div class="position-relative has-icon-right text-dark">
				  <input type="text" id="exampleInputUsername" class="form-control input-shadow inputBG" placeholder="Enter Username" />
				  <div class="form-control-position">
					  <i class="icon-user"></i>
				  </div>
			   </div>
			  </div>
			  <div class="form-group w-100">
			  <label for="exampleInputPassword" class="sr-only">Password</label>
			   <div class="position-relative has-icon-right text-dark">
				  <input type="password" id="exampleInputPassword" class="form-control input-shadow inputBG" placeholder="Enter Password" />
				  <div class="form-control-position">
					  <i class="icon-lock"></i>
				  </div>
			   </div>
			  </div>
			<div class="form-row">
			 <div class="form-group col-6">
			   <div class="icheck-material-white">
                <input type="checkbox" class="check_box" id="user-checkbox" checked="" />
                <label for="user-checkbox" class="text-white">Remember me</label>
			  </div>
			 </div>
			 <div class="form-group col-6 text-right text-white">
			  <a href="reset-password.html">Reset Password</a>
			 </div>
			</div>
			 <button type="button" class="btn btn-light btn-block" style={{background:"#531a82"}}>Sign In</button>
			  
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
		    <p class="text-warning mb-0">Do not have an account? <a href="register.html"> Sign Up here</a></p>
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

export default Login;
