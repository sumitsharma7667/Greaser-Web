import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import "./homepage.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";


function SingleService(props) {
  const [data,setdata]=useState([])
  const [ServiceData,SetServiceData] =useState([])
  useEffect(()=>{
    getdata()
    getServiceById()
  },[])
  const getServiceById = (_id) => {     
    fetch("http://144.91.110.221:3032/getServiceById"
        , {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              _id:props.match.params.service_id,
            })
        })
        .then(res => res.json())
        .then(res => { SetServiceData(res[0])
        console.log(res[0].name,"here")
        })
}
  const getdata = (_id) => {     
    fetch("http://144.91.110.221:3032/mechanicbyservice"
        , {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id:props.match.params.service_id,
            })
        })
        .then(res => res.json())
        .then(res => { setdata(res) 
        console.log(res,"here")
        })
}
const Addtocart=async(_id,m_id)=>{  
  var id= await localStorage.getItem('userid')  
  if(id == ''){
    window.location.href = "/Login";
  } 
   fetch("http://144.91.110.221:3032/cartbyid"
   , {
       method: 'POST',
       headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           userid: id
       })
   })
   .then(res => res.json())
   .then(async(res) => { 
    
     console.log(res)
     if(JSON.stringify(res).includes(_id)==false){                     
      await fetch("http://144.91.110.221:3032/Addtocart"
       , {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
              userid:id,
              _id:_id,
              m_id:m_id
           })
       })
       .then(res => res.json())
       .then(res=>{
       alert("added successfully")})
       window.location.href = "/Cart";
   }
   else{
       alert("This Service is allready in Your Cart ")
       }
 })
}
  return (
    <>
      <Header />
      <section className="Cart_page_sect">
        <div className="container-fluid CheckOut_CONT">
          <div className="card Item_card p-4">
            <div className="row">
              <div className="col-5 blankCol">
                <h6 className="headin_shopCart text-dark">
                  <Link to="/Serices-Packages">
                    <i class="bx bx-arrow-back"></i>Continue Shoping
                  </Link>
                </h6>
              </div>
              <div className="col-7 blankCol">
                <h4 className="headin_shopCart"> Your Shoping Cart</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-8 blankCol">
                <div class="card Child_card_shop">
                  <div className="row cart_CenterROw">
                    <div className="col-4 Cart_productImg blankCol">
                      <img
                        class="Cart_itemImg mx-auto d-block "
                        src={"http://144.91.110.221:3032/" + ServiceData.image}
                        style={{height:"200px",width:"200px"}}
                        alt=""
                      />
                    </div>
                    <div className="col-3 blankCol">
                      <h4 className="headin_shopCart">                        
                        {ServiceData.name }
                      </h4>
                    </div>
                    <div className="col-2 blankCol">
                      <div className="pos_negTIveIcon">
                        <i class="bx bx-plus"></i>
                        <i class="bx bx-minus"></i>
                      </div>
                    </div>
                    <div className="col-3 blankCol">
                      <div className="pos_negTIveIcon">
                        <h4 className="headin_shopCart">$78.00</h4>
                        <i class="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 blankCol">
                <div class=" card Secon_colCard">
                  <h3 className="text-center mt-2">Cart</h3>
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
                  </div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-6">
                        <h5>Mechanic Charge</h5>
                      </div>
                      <div class="col-6 text-right ">
                        <h5>$100.00</h5>
                      </div>
                    </div>
                    {/* <div class="row">
                      <div class="col-6">
                        <h5>Shipping</h5>
                      </div>
                      <div class="col-6 text-right">
                        <h5>$20.00</h5>
                      </div>
                    </div> */}
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
                          Secure Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mechanicHr" />

            <div className="row ">
              {data.map((item,index)=>{
                return(

              
              <div className="col-3 blankCol">
                <div className="row mechanicRow p-2 m-0">
                  <div className="col-12">
                    <img
                      class="Mechanic_itemImg mx-auto d-block "
                      src={require("./Images/carousel1.jpeg").default}
                      alt=""
                    />
                  </div>
                  <div className=" text-center w-100">
                    <h4>{item.name}</h4>
                  </div>
                  <hr />
                  <div className="col-6">
                    <h5 className="">Price</h5>
                    <h5 className="">Time</h5>
                    <h5 className="">Contact</h5>
                    <h5 className="">Address</h5>
                  </div>
                  <div className="col-6">
                    <h5 className="text-right">{item.price}</h5>
                    <h5 className="text-right">{item.time} Hours</h5>
                    <h5 className="text-right">{item.user.mobile}</h5>
                    <h5 className="text-right">{item.user.address}</h5>
                  </div>
                    <div class="row w-100">
                      <div class="col-12 text-center mb-3">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg CheckOutBtn "
                          id="load"
                          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Processing Order"
                        onClick={()=>{Addtocart(item._id,item.user._id)}}
                        >
                          ADD TO CART
                        </button>
                    </div>
                  </div>
                </div>
              </div>

)
})}
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default SingleService;
