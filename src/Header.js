import React,{useEffect}from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function Header(props) {

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
    <nav className="w-100 NavBg">
<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={()=>{closeNav()}}>&times;</a>
  <div class="overlay-content">
    <Link to="/home">Home</Link>
    <Link to="/services-packages">Services</Link>
    <Link to="/ContactUs">Contact Us</Link>
  </div>
</div>
<span style={{fontSize:"35px",cursor:"pointer"}} className="pl-5 text-white" onClick={()=>{openNav()}}>&#9776;</span>
{localStorage.getItem('username')  =="" ?
<span className="pr-5" style={{fontSize:"35px",float:"right"}}><Link to="/Login" className="text-white"><i class='bx bx-log-in'></i></Link></span>
:<span><span className="pr-5" style={{fontSize:"25px",float:"right"}}><Link onClick={()=>{logOut()}} className="text-white">Logout</Link></span><span className="pr-5" style={{fontSize:"25px",float:"right"}}><Link  className="text-white">Howdy {localStorage.getItem('username')}</Link></span></span>}
</nav>
  );
}

export default Header;
