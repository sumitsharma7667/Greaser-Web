import React ,{useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery'; 
import logo from './logo.svg';
import {Link} from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Services(props) {
  useEffect(()=>{
    $(document).ready(function() {	
	
      // Random Alert shown for the fun of it
      function randomAlert() {
        var min = 5,
          max = 20;
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 20
        // post time in a <span> tag in the Alert
        $("#time").html('Next alert in ' + rand + ' seconds');
        $('#timed-alert').fadeIn(500).delay(3000).fadeOut(500);
        setTimeout(randomAlert, rand * 1000);
      };
      randomAlert();
    });
    
    /* Use 'data-target=' to show link text in Alert popup */
    $('.btn').click(function(event) {
        event.preventDefault();
        var target = $(this).data('target');
      // console.log('#'+target);
      $('#click-alert').html('data-target= ' + target).fadeIn(50).delay(3000).fadeOut(1000);
      
    });
    
    
    /* Carousel cards */
    $(document).ready(function() {	
        "use strict";
    
        // manual carousel controls
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
      // append each Card to one before it
        $('.carousel .carousel-item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
          }
          else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
        });
        
      });
    
    
  },[])
  return (
    <>
    <Header />
    <section className="SecondSection" style={{backgroundColor:"#dededede"}}>
        <div className="row">
        <div className="col-12 ">
         <h2 className="servicesHeading_in_service_feature">Services</h2>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/car.svg').default} />
            <h6>Servicing</h6>
            </div>
          </div>

          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/spray-gun.svg').default} />
            <h6>Denting & Painting</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/customization.svg').default} />
            <h6>Custamization</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/accessories.svg').default} />
            <h6>Accesories</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/wash.svg').default} />
            <h6>Car Cleaning</h6>
            </div>
          </div>
        </div>
        </div>
        <div className="col-12">
        <div className="row " style={{display:"flex"}}>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/insurance.svg').default} />
            <h6>Claim Ypur Insurance</h6>
            </div>
          </div>

          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/battery.svg').default} />
            <h6>Batteries</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/windshield.svg').default} />
            <h6>Glasses &<br/> Windshield</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/tyre.svg').default} />
            <h6>Wheels & Tyres</h6>
            </div>
          </div>
          <div className="ServiceFeaturesCard">
            <div className="service_card">
            <img src={require('../src/Images/headlights.svg').default} />
            <h6>Lights</h6>
            </div>
          </div>
        </div>
        </div>
        </div>
        </section>
        <section className="first_servicesCarousel">
          <div className="row " >
          <div className="col-12 text-center p-5">
            <h2>Top Serices</h2>
            <h4>Trending services around you</h4>
            </div>
            <div className="col-12 pl-5 pr-5 pb-5">
            

<main class="content" role="content">
	
	<section class="container-fluid" id="section1">

	<div class="container m-2">
        <div class="row">
            <div class="col-xs-12">
                <a class="btn btn-outline-secondary prev" href="" title="go back" data-target="Previous Slide"><i class="fa fa-lg fa-chevron-left"></i></a>
                <a class="btn btn-outline-secondary next" href="" title="more" data-target="Next Slide"><i class="fa fa-lg fa-chevron-right"></i></a>
            </div>
        </div>
    </div>
    <div class="carousel slide" data-ride="carousel" id="postsCarousel">
        <div class="row row-equal carousel-inner">
            <div class="carousel-item active">
                <div class="col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://picsum.photos/460/?random" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://picsum.photos/461/?random" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://picsum.photos/462/?random" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://picsum.photos/460/?random" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://picsum.photos/461/?random" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
	</section>

</main> 
	


<div class="alerts-container">
	
	<div class="row">
		<div id="timed-alert" class="alert alert-info animated tada" role="alert">
			<span id="time"></span>
		</div>
	</div>
	
	<div class="row">
		<div id="click-alert" class="alert alert-warning" role="alert">
		</div>
	</div>
	
</div>
              </div>
            </div>
        </section>
    <Footer />
    </>
  )
}
export default Services