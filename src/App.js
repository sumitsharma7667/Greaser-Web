import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
function App(props) {
  return (
<body class="bg-theme bg-theme1">
 
 
  <div id="wrapper">
  
   
    <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
      <div class="brand-logo">
       <a href="index.html">
        <img src={require("./Images/logo.png").default} class="logo-icon" alt="logo icon" />
        {/* <h5 class="logo-text">Greaser</h5> */}
      </a>
    </div>
    <ul class="sidebar-menu do-nicescrol">
       <li class="sidebar-header">MAIN NAVIGATION</li>
       <li>
         <Link to="/">
           <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
         </Link>
       </li>
 
       <li>
         <Link to="/service">
           <i class="zmdi zmdi-invert-colors"></i> <span>Services</span>
         </Link>
       </li>
       <li>
         <Link to="/service-type">
           <i class="zmdi zmdi-grid"></i> <span>Service Type</span>
         </Link>
       </li>
       <li>
         <Link to="/brand">
           <i class="zmdi zmdi-format-list-bulleted"></i> <span>Brands</span>
         </Link>
       </li>
       <li>
         <Link to="/vehicle">
           <i class="zmdi zmdi-format-list-bulleted"></i> <span>Vehicles</span>
         </Link>
       </li>
 
       {/* <li>
         <a href="tables.html">
           <i class="zmdi zmdi-grid"></i> <span>Tables</span>
         </a>
       </li>
 
       <li>
         <a href="calendar.html">
           <i class="zmdi zmdi-calendar-check"></i> <span>Calendar</span>
           <small class="badge float-right badge-light">New</small>
         </a>
       </li>
 
       <li>
         <a href="profile.html">
           <i class="zmdi zmdi-face"></i> <span>Profile</span>
         </a>
       </li>
 
       <li>
         <a href="login.html" target="_blank">
           <i class="zmdi zmdi-lock"></i> <span>Login</span>
         </a>
       </li>
 
        <li>
         <a href="register.html" target="_blank">
           <i class="zmdi zmdi-account-circle"></i> <span>Registration</span>
         </a>
       </li>
 
       <li class="sidebar-header">LABELS</li>
       <li><a href="javaScript:void();"><i class="zmdi zmdi-coffee text-danger"></i> <span>Important</span></a></li>
       <li><a href="javaScript:void();"><i class="zmdi zmdi-chart-donut text-success"></i> <span>Warning</span></a></li>
       <li><a href="javaScript:void();"><i class="zmdi zmdi-share text-info"></i> <span>Information</span></a></li>
  */}
     </ul>
    
    </div>
 <header class="topbar-nav">
  <nav class="navbar navbar-expand fixed-top">
   <ul class="navbar-nav mr-auto align-items-center">
     <li class="nav-item">
       <a class="nav-link toggle-menu" href="javascript:void();">
        <i class="icon-menu menu-icon"></i>
      </a>
     </li>
     <li class="nav-item">
       <form class="search-bar">
         <input type="text" class="form-control" placeholder="Enter keywords" />
          <a href="javascript:void();"><i class="icon-magnifier"></i></a>
       </form>
     </li>
   </ul>
      
   <ul class="navbar-nav align-items-center right-nav-link">
     <li class="nav-item dropdown-lg">
       <a class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();">
       <i class="fa fa-envelope-open-o"></i></a>
     </li>
     <li class="nav-item dropdown-lg">
       <a class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();">
       <i class="fa fa-bell-o"></i></a>
     </li>
     <li class="nav-item language">
       <a class="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();"><i class="fa fa-flag"></i></a>
       <ul class="dropdown-menu dropdown-menu-right">
           <li class="dropdown-item"> <i class="flag-icon flag-icon-gb mr-2"></i> English</li>
           <li class="dropdown-item"> <i class="flag-icon flag-icon-fr mr-2"></i> French</li>
           <li class="dropdown-item"> <i class="flag-icon flag-icon-cn mr-2"></i> Chinese</li>
           <li class="dropdown-item"> <i class="flag-icon flag-icon-de mr-2"></i> German</li>
         </ul>
     </li>
     <li class="nav-item">
       <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
         <span class="user-profile"><img src="https://via.placeholder.com/110x110" class="img-circle" alt="user avatar"/></span>
       </a>
       <ul class="dropdown-menu dropdown-menu-right">
        <li class="dropdown-item user-details">
         <a href="javaScript:void();">
            <div class="media">
              <div class="avatar"><img class="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
             <div class="media-body">
             <h6 class="mt-2 user-title">Sarajhon Mccoy</h6>
             <p class="user-subtitle">mccoy@example.com</p>
             </div>
            </div>
           </a>
         </li>
         <li class="dropdown-divider"></li>
         <li class="dropdown-item"><i class="icon-envelope mr-2"></i> Inbox</li>
         <li class="dropdown-divider"></li>
         <li class="dropdown-item"><i class="icon-wallet mr-2"></i> Account</li>
         <li class="dropdown-divider"></li>
         <li class="dropdown-item"><i class="icon-settings mr-2"></i> Setting</li>
         <li class="dropdown-divider"></li>
         <li class="dropdown-item"><i class="icon-power mr-2"></i> Logout</li>
       </ul>
     </li>
   </ul>
 </nav>
 </header>

 
 <div class="clearfix"></div>
   
    <div class="content-wrapper">

            <React.Fragment>
               {props.children}
            </React.Fragment>
     
    </div>
     {/* <!--End content-wrapper--> */}
    {/* <!--Start Back To Top Button--> */}
     <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
     {/* <!--End Back To Top Button--> */}
   
   {/* <!--Start footer--> */}
   <footer class="footer">
       <div class="container">
         <div class="text-center">
           Copyright © 2021 GIKS
         </div>
       </div>
     </footer>
   {/* <!--End footer--> */}
   
   {/* <!--start color switcher--> */}
    <div class="right-sidebar">
     <div class="switcher-icon">
       <i class="zmdi zmdi-settings zmdi-hc-spin"></i>
     </div>
     <div class="right-sidebar-content">
 
       <p class="mb-0">Gaussion Texture</p>
       <hr/>
       
       <ul class="switcher">
         <li id="theme1"></li>
         <li id="theme2"></li>
         <li id="theme3"></li>
         <li id="theme4"></li>
         <li id="theme5"></li>
         <li id="theme6"></li>
       </ul>
 
       <p class="mb-0">Gradient Background</p>
       <hr/>
       
       <ul class="switcher">
         <li id="theme7"></li>
         <li id="theme8"></li>
         <li id="theme9"></li>
         <li id="theme10"></li>
         <li id="theme11"></li>
         <li id="theme12"></li>
         <li id="theme13"></li>
         <li id="theme14"></li>
         <li id="theme15"></li>
       </ul>
       
      </div>
    </div>
   {/* <!--end color switcher--> */}
    
   </div>

   {/* <!--End wrapper--> */}
 

 
   
 </body>
  );
}

export default App;
