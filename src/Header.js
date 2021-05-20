import React,{useEffect}from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Header(props) {

  const openNav=()=> {
    document.getElementById("myNav").style.width = "30%";
  }
  
  const closeNav =()=> {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <nav className="w-100 NavBg">
<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={()=>{closeNav()}}>&times;</a>
  <div class="overlay-content">
    <Link to="/home">Home</Link>
    <Link to="/services-packages">Services</Link>
    <a href="#">Clients</a>
    <Link to="/ContactUs">Contact Us</Link>
  </div>
</div>
<span style={{fontSize:"35px",cursor:"pointer"}} className="pl-5 text-white" onClick={()=>{openNav()}}>&#9776;</span>
<span className="pr-5" style={{fontSize:"35px",float:"right"}}><Link to="/Login" className="text-white"><i class='bx bx-log-in'></i></Link></span>
</nav>
  );
}

export default Header;
