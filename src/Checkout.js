import React,{useEffect,useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

let SubTotal =0
let GrandTotal =0
function Checkout() {
  const [CartData, setdata] = useState([])
  const [firstname, setFirstName] = useState([])
  const [lastname, setLastName] = useState([])
  const [address, setAddress] = useState([])
  const [city, setCity] = useState([])
  const [state, setState] = useState([])
  const [pincode, setPincode] = useState([])
  const [mobile, setMobile] = useState([])
  const [email, setEmail] = useState([])  
  useEffect(()=>{
    GrandTotal=0
    SubTotal=0
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
const StoreBillDetails = () => {
  const data = new FormData()
  var PushData =[]

  CartData.map((item,index)=>{
  PushData.push({'service':item.service.service.name,"price":item.service.price,"MechanicServiceID":item.service._id,"ServiceId":item.service.service._id})
  })
  data.append('fullname', firstname+" "+lastname)
  data.append('address',address)
  data.append('mobile',mobile)
  data.append('email',email)
  data.append('pincode',pincode)
  data.append('city',city)
  data.append('state',state)
  data.append('SubTotal',SubTotal)
  data.append('GrandTotal',GrandTotal)
  data.append('CartData',JSON.stringify(PushData))
  const url = "http://192.168.79.156:3032/StoreBillDetails"
  fetch(url, {
          method: 'post',
          body: data
      })
      .then(res => res.json())
      .then(data => {
          alert("Thankyou for choosing us :)") 
          // GetServiceType()               
      })
      .then(() => {
        CartData.map((item,index)=>{
        const apiUrl = 'http://144.91.110.221:3032/Deletefromcart';
        fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'delete',
            body: JSON.stringify({ _id: item._id })
        })
      })

      })
      .then(() => {
        setFirstName('')
        setLastName('')
        setMobile('')
        setPincode('')
        setAddress('')
        setCity('')
        setState('')
        setEmail('')
        getdata()
      })
}


GrandTotal=0
SubTotal=0
  return (
    <>
      <Header />
      <section>
        <div class="container p-3 ">
          <div className="row Secon_colCard">
            <div className="col-6 blankCol">
              <h4 className="text-white mt-2 text-center">Shipping Details</h4>
              <form>
                <div class="container-fluid p-3 ">
                  <div class="formfield" id="firstnamefield">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      onChange={(e)=>{setFirstName(e.target.value)}}
                      required
                    />
                    <label
                      alt="firstname"
                      for="firstname"
                      placeholder="firstname"
                    >
                      firstname
                    </label>
                  </div>
                  <div class="formfield" id="lastnamefield">
                    <input type="text" name="lastname" id="lastname" onChange={(e)=>{setLastName(e.target.value)}} required />
                    <label alt="lastname" for="lastname" placeholder="lastname">
                      lastname
                    </label>
                  </div>
                  <div class="formfield" id="Phonefield">
                    <input type="text" name="mobile" onChange={(e)=>{setMobile(e.target.value)}} id="mobile" required />
                    <label alt="mobile" for="mobile" placeholder="Mobile">
                      Mobile
                    </label>
                  </div>
                  <div class="formfield" id="Emailfield">
                    <input type="text" name="Email" onChange={(e)=>{setEmail(e.target.value)}} id="Email" required />
                    <label alt="Email" for="Email" placeholder="Email">
                      Email
                    </label>
                  </div>

                  <div class="formfield" id="addressfield">
                    <input type="text" name="address" onChange={(e)=>{setAddress(e.target.value)}} id="address" required />
                    <label alt="Adresse" for="address" placeholder="Adresse">
                      Address
                    </label>
                  </div>

                  <div class="formfield" id="zipcodefield">
                    <input type="text" name="zipcode" onChange={(e)=>{setPincode(e.target.value)}} id="zipcode" required />
                    <label
                      alt="Code postal"
                      for="zipcode"
                      placeholder="Code postal"
                    >
                      postal
                    </label>
                  </div>
                  <div class="formfield" id="landmarkfield">
                    <input type="text" name="landmark" id="landmark" required />
                    <label
                      alt="landmark"
                      for="landmark"
                      placeholder="landmark"
                    ></label>
                  </div>
                  <div class="formfield" id="cityfield">
                    <input type="text" name="city" onChange={(e)=>{setCity(e.target.value)}} id="city" required />
                    <label alt="City" for="city" placeholder="City">
                      City
                    </label>
                  </div>
                  <div class="formfield" id="statefield">
                    <input type="text" name="State" onChange={(e)=>{setState(e.target.value)}} id="State" required />
                    <label alt="State" for="State" placeholder="State">
                      State
                    </label>
                  </div>
                  {/* <div className="row">
                    <div className="col-6">
                      <div class="form-check">
                        <input
                          class="form-check-input ml-0"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label checkBoxalignment"
                          for="flexCheckIndeterminate"
                        >
                          Home
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-check ">
                        <input
                          class="form-check-input ml-0"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label checkBoxalignment"
                          for="flexCheckIndeterminate"
                        >
                          office
                        </label>
                      </div>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
            <div className="col-6 blankCol">
              <div className="alignmentCol">
                <div class="card w-70">
                  <h3 className="text-center text-white mt-2">Cart</h3>
                  <div className="container">
                  {CartData.map((item,index)=>{
                  return(
                    <div className="row">
                      <div className="col-6">
                        <h4>{item.service.service.name}</h4>
                        {/* <p className="text-white"></p> */}
                      </div>
                      <div className="col-6">
                        <div className="text-right">
                          <h4>{item.service.price}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })}
                    <hr />
                    <div>
                      <input
                        type="text"
                        name="Apply Coupon"
                        id="coupon"
                        placeholder="Apply Coupon"
                        className="form-control text-dark"
                        readOnly
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
                        <h5>{
                        CartData.map((item,index)=>{
                          SubTotal=SubTotal+parseInt(item.service.price)
                        })}
                        {SubTotal}
                        </h5>
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
                        <h5>{
                        CartData.map((item,index)=>{
                          GrandTotal=GrandTotal+parseInt(item.service.price)
                        })}
                        {GrandTotal}</h5>
                      </div>
                    </div>
                   
                  </div>
                  <div className="PaymentBtn mb-3">
                    <button className="btn btn-primary"  onClick={()=>{
                        StoreBillDetails()
                      }}>
                     
                      Proceed
                    </button>
                  </div>
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
export default Checkout;
