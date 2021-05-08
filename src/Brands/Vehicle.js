import React,{useState,useEffect} from 'react';
import DataTable from '@bit/adeoy.utils.data-table';
const Vehicle =()=>{
    const[name,SetName]=useState()
    const[type,SetType]=useState("Petrol")
    const[manufacturer,SetManufacturer]=useState()
    const[image,SetImage]=useState()
    const[status,SetStatus]=useState(0)
    const[AllBrand,SetAllBrand]=useState([])
    const[AllVehicle,SetAllVehicle]=useState([])

    useEffect(()=>{
    GetBrand()
    GetVehicle()
    },[])
    const StoreVehicle = () => {
        // if (this.checkValidation()) {
        const data = new FormData()
        data.append('name', name)
        data.append('type', type)
        data.append('manufacturer',manufacturer)
        data.append('image',image)
        data.append('status',status)
        const url = "http://144.91.110.221:3032/StoreVehicle"
        fetch(url, {
                method: 'post',
                body: data
            })
            .then(res => res.json())
            .then(data => {
                alert("Brand Created Successfully") 
                GetVehicle()               
            })
            .then(err => {})
        // }
    }

    const GetVehicle = () => {
        fetch("http://144.91.110.221:3032/GetVehicle")
            .then(res => res.json())
            .then(data => {
                console.log("Vehicles "+data)
                SetAllVehicle(data)
            })
            .then(err => console.log(err))
    }
    const GetBrand = () => {
        fetch("http://144.91.110.221:3032/GetBrand")
            .then(res => res.json())
            .then(data => {
                console.log("Brands "+data)
                SetAllBrand(data)
            })
            .then(err => console.log(err))
    }

    const DeleteVehicle = (id) => {
        const apiUrl = 'http://144.91.110.221:3032/DeleteVehicle';
        fetch(apiUrl, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method:'delete',  
          body:JSON.stringify({_id:id})
        })
        .then((response) => response.json())
        .then((res) => {
        alert("Service Deleted Successfully")
        GetVehicle()
          
        })
        
      }
     // data table

     const data =[];
     {AllVehicle.map((item,index)=>{
     data.push( {"sr_no":index+1,"name":item.name,"manufacturer":item.manufacturer.name,"image":<img src={"http://144.91.110.221:3032/" + item.image} style={{ height: '100px' }} />,"action":<span><button className="btn btn-secondary" onClick={()=>{DeleteVehicle(item._d)}}> Delete</button> </span>})
     })}
       const columns = [
         { title: "SR NO", data: "sr_no" },
         { title: "Name", data: "name" },
         { title: "Manufacturer", data: "manufacturer" },
         { title: "Image", data: "image" },
         { title: "Action", data: "action" },
       ];
       const click = (row) => {
         console.log(row);
       };
    return(
        <>
<div class="container-fluid">
    <div class="row mt-3">
      <div class="col-lg-12">
         <div class="card">
           <div class="card-body">
           <div class="card-title">Vihicles</div>
           <hr/>
            {/* <form> */}
           <div class="form-group">
            <label for="input-1">Vehicle Name</label>
            <input type="text" class="form-control" onChange={(e)=>{SetName(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="form-row">
           <div class="col-lg-6 form-group"  >
                <label for="input-2">Manufacturer</label>
                <select className="form-control" onChange={(e)=>{SetManufacturer(e.target.value)}}>
                <option value="Petrol">Choose...</option>
                    {AllBrand.map((item,index)=>{
                        return(
                            <option value={item._id}>{item.name}</option> 
                        )
                    })}
                </select>
            </div>
           <div class="col-lg-6 form-group"  >
                <label for="input-2">Type</label>
                <select className="form-control" onChange={(e)=>{SetType(e.target.value)}}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="Electric">Electric</option>
                </select>
            </div>
        
           <div class="col-lg-6 form-group">
            <label for="input-2">Image</label>
            <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.files[0])}}  />
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
            <button type="submit" class="btn btn-light px-5" onClick={()=>{StoreVehicle()}}><i class="icon-lock"></i> Submit</button>
          </div>
          {/* </form> */}
         </div>
         </div>
      </div>
    </div> 
    <div class="row mt-3">
             <div className="col-12">
                <DataTable
                data={data}
                columns={columns}
                striped={true}
                hover={true}
                responsive={true}
                onClickRow={click}
                />
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
export default Vehicle;