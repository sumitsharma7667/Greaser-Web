import React,{useState,useEffect} from 'react';

const ServiceType =()=>{
    const[name,SetName]=useState()
    const[image,SetImage]=useState()
    const[status,SetStatus]=useState(0)
    const[AllServices,SetAllServiceType]=useState([])

    useEffect(()=>{
    GetServiceType()
    },[])
    const StoreServiceType = () => {
        // if (this.checkValidation()) {
        const data = new FormData()
        data.append('name', name)
        data.append('image',image)
        data.append('status',status)
        const url = "http://144.91.110.221:3032/StoreServiceType"
        fetch(url, {
                method: 'post',
                body: data
            })
            .then(res => res.json())
            .then(data => {
                alert("Brand Created Successfully") 
                GetServiceType()               
            })
            .then(err => {})
        // }
    }

    const GetServiceType = () => {
        fetch("http://144.91.110.221:3032/GetServiceType")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetAllServiceType(data)
            })
            .then(err => console.log(err))
    }
    return(
        <>
<div class="container-fluid">
    <div class="row mt-3">
      <div class="col-lg-12">
         <div class="card">
           <div class="card-body">
           <div class="card-title">Brands</div>
           <hr/>
            {/* <form> */}
           <div class="form-group">
            <label for="input-1">Name</label>
            <input type="text" class="form-control" onChange={(e)=>{SetName(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="form-row">
           <div class="col-lg-6 form-group">
            <label for="input-2">Image</label>
            <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.value)}}  />
           </div>
           <div class="col-lg-6 form-group"  >
           <label for="input-2">Status</label>
                <select className="form-control" onChange={(e)=>{SetStatus(e.target.value)}}>
                
                    <option value="0">Active</option>
                    <option value="1">Deacive</option>
                </select>
            </div>
            </div>
           <div class="form-group">
            <button type="submit" class="btn btn-light px-5" onClick={()=>{StoreServiceType()}}><i class="icon-lock"></i> Submit</button>
          </div>
          {/* </form> */}
         </div>
         </div>
      </div>
    </div> 
    {/* // <!--End Row--> */}

	{/* // <!--start overlay--> */}
		  <div class="overlay toggle-menu"></div>
		{/* // <!--end overlay--></form> */}

    </div>
    </>
    )
}
export default ServiceType;