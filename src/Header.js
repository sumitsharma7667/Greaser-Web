import React,{useEffect}from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Header(props) {

  const openNav=()=> {
    document.getElementById("myNav").style.width = "100%";
  }
  
  const closeNav =()=> {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <nav style={{position:"absolute",zIndex:10}} className="w-100 mb-3">
<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={()=>{closeNav()}}>&times;</a>
  <div class="overlay-content">
    <Link to="/home">Home</Link>
    <Link to="/services-packages">Services</Link>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>
<span style={{fontSize:"50px",cursor:"pointer"}} className="pl-5 text-white" onClick={()=>{openNav()}}>&#9776;</span>
<span className="pr-5" style={{fontSize:"40px",float:"right"}}><Link to="/Login" className="text-white"><i class="fas fa-sign-in-alt"></i></Link></span>
</nav>
  );
}

export default Header;
