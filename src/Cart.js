import React,{useEffect,useState} from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Cart(props) {
  const [data, setdata] = useState([])
  useEffect(()=>{
    getdata()
  },[])
  const getdata = async (_id) => {
    var userid = await localStorage.getItem('userid')
    fetch("http://144.91.110.221:3032/cartbyid"
        , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userid,
            })
        })
        .then(res => res.json())
        .then(res => { setdata(res) })
} 
const Deletefromcart = (id) => {
  const apiUrl = 'http://144.91.110.221:3032/Deletefromcart';
  fetch(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({ _id: id })
  })
      .then((response) => response.json())
      .then((res) => {
          getdata()
          // contexdata.getcounts()
      })
}
  return (
    <div className="">
      {/* <header id="site-header">
		<div class="container">
			<h1>Shopping cart <span>[</span> <em><a href="https://codepen.io/tag/rodeo-007" target="_blank">     Go To  Home Page</a></em> <span class="last-span is-open">]</span></h1>
		</div>
	</header> */}
      <Header />
      <section className="Cart_page_sect">
        <div className="container-fluid CheckOut_CONT">
          <div className="card Item_card p-4">
            <div className="row">
              <div className="col-5 blankCol">
                <h6 className="headin_shopCart">
                  <Link to="/Serices-Packages">
                  <i class="bx bx-arrow-back"></i>Continue Shoping
                  </Link>
                </h6>
              </div>
              <div className="col-7 blankCol">
                <h4 className="headin_shopCart"> Your Shoping Cart</h4>
              </div>
            </div>

            <div className="row"></div>
            <div className="row">
              <div className="col-8 blankCol">
                {data.map((item,index)=>{
                  return(

                 
                <div class="card Child_card_shop">
                  <div className="row cart_CenterROw">
                    <div className="col-4 Cart_productImg blankCol">
                      <img
                        class="Cart_itemImg mx-auto d-block "
                        src={"http://144.91.110.221:3032/" + item.service.service.image}
                        style={{height:"200px",width:"200px"}}
                        alt=""
                      />
                    </div>
                    <div className="col-3 blankCol">
                      <h4 className="headin_shopCart">
                        {item.service.service.name}
                      </h4>
                    </div>
                    <div className="col-2 blankCol">
                      <div className="pos_negTIveIcon">
                        {/* <i class="bx bx-plus"></i>
                        <i class="bx bx-minus"></i> */}
                      </div>
                    </div>
                    <div className="col-3 blankCol">
                      <div className="pos_negTIveIcon">
                        <h4 className="headin_shopCart">{item.service.price}</h4>

                        <i class="bx bx-trash" onClick={()=>{Deletefromcart(item._id)}}></i>
                      </div>
                    </div>
                  </div>
                </div>
                 )
                })}
              </div>
              <div className="col-4 blankCol">
                <div class=" card Secon_colCard">
                  <h3 className="text-center">Cart</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <h4>Basic Service</h4>
                        <p className="text-white">Mobile 5W30</p>
                      </div>
                      <div className="col-6">
                        <div className="text-right">
                          <h4>$3099</h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <input
                        type="text"
                        name="Apply Coupon"
                        id="coupon"
                        placeholder="Apply Coupon"
                        className="form-control text-dark"
                      />
                    </div>
                  </div>
                  <hr />
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-6">
                        <h5>Subtotal</h5>
                      </div>
                      <div class="col-6 text-right ">
                        <h5>$100.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <h5>Shipping</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$20.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <h5>Total (tax incl.)</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$190.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg CheckOutBtn "
                          id="load"
                          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing Order"
                        >
                          Check out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <footer id="site-footer">
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
	</footer> */}
      <Footer />
    </div>
  );
}

export default Cart;

