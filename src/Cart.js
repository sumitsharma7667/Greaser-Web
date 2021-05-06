import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
function Cart(props) {
  return (
    <div className="cartBackground">
   	{/* <header id="site-header">
		<div class="container">
			<h1>Shopping cart <span>[</span> <em><a href="https://codepen.io/tag/rodeo-007" target="_blank">     Go To  Home Page</a></em> <span class="last-span is-open">]</span></h1>
		</div>
	</header> */}
<Header />
	<div class="container">

		<section id="cart"> 
			<article class="product">
				<header>
					<a class="remove">
						<img src="http://www.sneakerfreaker.com/content/uploads/2014/03/sekure-d-custom-air-jordan-10-teal-graffiti-5.jpg" alt="" />

						<h3>Remove product</h3>
					</a>
				</header>

				<div class="content">

					<h1>Air Jordan 10 “Teal Graffiti” Custom</h1>

<span>Transforming a classic colorway into an Air Jordan 10 “Teal Graffiti” Custom that sports an Air Tech Challenge-inspired print throughout the upper, complementing the Graffiti print.</span>

					{/* <div title="You have selected this product to be shipped in the color yellow." style={{top: 0}} class="color yellow"></div>
					<div style={{top: "43px"}} class="type small">Size 11.5</div> */}
				</div>

				<footer class="content">
					<span class="qt-minus">-</span>
					<span class="qt">2</span>
					<span class="qt-plus">+</span>

					<h2 class="full-price">
						69.98
					</h2>

					<h2 class="price">
						34.99
					</h2>
				</footer>
			</article>

			<article class="product">
				<header>
					<a class="remove">
						<img src="http://4.kicksonfire.net/wp-content/uploads/2013/06/air-jordan-5-noah-1-640x395.jpeg" alt="" />

						<h3>Remove product</h3>
					</a>
				</header>

				<div class="content">

					<h1>Air Jordan 5 “Noah's Ark"</h1>

          <span>Air Jordan 5 “Noah’s Ark” is certainly one of the most amazing customs he has ever created. The sneaker is inspired by the events within the story of Noah’s Ark, utilizing various animal prints.</span>

					{/* <div title="You have selected this product to be shipped in the color red." style={{top: 0}} class="color red"></div>
					<div title="You have selected this product to be shipped sized Small."  style={{top: "43px"}} class="type small">Size 12</div> */}
				</div>

				<footer class="content">
					
					<span class="qt-minus">-</span>
					<span class="qt">1</span>
					<span class="qt-plus">+</span>

					<h2 class="full-price">
						79.99
					</h2>

					<h2 class="price">
						79.99
					</h2>
				</footer>
			</article>

			<article class="product">
				<header>
					<a class="remove">
						<img src="http://4.kicksonfire.net/wp-content/uploads/2013/06/image-22-1024x1024.jpeg" alt="" />

						<h3>Remove product</h3>
					</a>
				</header>

				<div class="content">

					<h1>Air Jordan 3 “Miami Nights” Custom</h1>

          <span>The custom transforms the original Crimson base into a well received custom viewable above so take a look at the Air Jordan 3 “Miami Nights” Custom and inquire for your own pair.</span>

					{/* <div title="You have selected this product to be shipped in the color blue." style={{top: 0}} class="color blue"></div>
					<div style={{top: "43px"}} class="type small">Large</div> */}
				</div>

				<footer class="content">
					
					<span class="qt-minus">-</span>
					<span class="qt">3</span>
					<span class="qt-plus">+</span>

					<h2 class="full-price">
						53.99
					</h2>

					<h2 class="price">
						17.99
					</h2>
				</footer>
			</article>

		</section>

	</div>

	<footer id="site-footer">
		<div class="container clearfix">
			<div class="left">
				<h2 class="subtotal">Subtotal: <span>163.96</span>€</h2>
				<h3 class="tax">Taxes (5%): <span>8.2</span>€</h3>
				<h3 class="shipping">Shipping: <span>5.00</span>€</h3>
			</div>

			<div class="right">
				<h1 class="total">Total: <span>177.16</span>€</h1>
				<a class="btn">Checkout</a>
			</div>

		</div>
	</footer>
  <Footer />
    </div>
  );
}

export default Cart;
