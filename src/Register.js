import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Register(props) {
  return (
    <>
    {/* <Header /> */}


		   <section className="loginBg">
			 
			  <div className="container-fluid h-100">
 					<h6 className="back_to_home"><i class='bx bx-arrow-back text-white'></i>Back to home</h6>
				  <div className="row h-100">
					  <div className="col-6">
						  <div className="login_formcol">
							  <img src={require('./Images/RegisterSignup.svg').default} className="mechanicImg" alt="logo icon" />
							  </div>
					  </div>
					  <div className="col-6 login_formcol">
						<div class="card-authentication1 mx-auto login_form ">
		<div class="card-body">
		 <div class="card-content">
		 	<div class="text-center">
		 		<img src={require('./Images/Glogo.png').default} style={{height:"150px",objectFit:"contain"}} alt="logo icon" />
		 	</div>
		  <div class="card-title text-uppercase text-center">Sign Up</div>
		    
			  <div class="form-group w-100">
			  <label for="exampleInputUsername" class="sr-only">Full Name</label>
			   <div class="position-relative has-icon-right text-dark">
				  <input type="text" id="exampleInputUsername" class="form-control input-shadow inputBG" placeholder="Full Name" />
				  <div class="form-control-position">
					  <i class="icon-user"></i>
				  </div>
			   </div>
									  </div>
									  <div class="form-group w-100">
			  <label for="exampleInputUsername" class="sr-only">Email</label>
			   <div class="position-relative has-icon-right text-dark">
				  <input type="text" id="exampleInputUsername" class="form-control input-shadow inputBG" placeholder="Email" />
				  <div class="form-control-position">
					  <i class="icon-user"></i>
				  </div>
			   </div>
									  </div>
									  <div class="form-group w-100">
			  <label for="exampleInputUsername" class="sr-only">Mobile</label>
			   <div class="position-relative has-icon-right text-dark">
				  <input type="text" id="exampleInputUsername" class="form-control input-shadow inputBG" placeholder="Enter Mobile Number" />
				  <div class="form-control-position">
					  <i class="icon-user"></i>
				  </div>
			   </div>
			  </div>
			 <button type="button" class="btn btn-light btn-block" style={{background:"#531a82"}}>Submit</button>
			  
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

export default Register;
