import React,{useState,useEffect} from 'react';
import DataTable from '@bit/adeoy.utils.data-table';
import $ from 'jquery';
const AllMechanicsWithService =()=>{
    const[name,SetName]=useState()
    const[image,SetImage]=useState()
    const[status,SetStatus]=useState(0)
    const[_id,SetId]=useState()
    const[AllMechanicsWithService,SetAllMechanicWithService]=useState([])

    useEffect(()=>{
    GetAllMechanicsWithService()
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
                GetAllMechanicsWithService()               
            })
            .then(err => {})
        // }
    }
    const EditObj = (obj) => {
        $("html").scrollTop(0);
        SetId(obj._id)
         SetName(obj.name)
         SetStatus(obj.status)
         SetImage(obj.image)
     }
    const UpdateServiceType =()=>{
         // if (this.checkValidation()) {
         const data = new FormData()
         data.append('_id', _id)
         data.append('name', name)      
         data.append('status', status)
         data.append('image',image)
         const url="http://144.91.110.221:3032/UpdateServiceType"
                 fetch(url,
                     {
                     method:'put',
                     body:data
                 })
                 .then(res => res.json())              
                 .then((res)=>{  
                alert('Service updated successfully !');
                GetAllMechanicsWithService()
                 })            
                 .then(err=>console.log(err))
             //   }
       }
    const GetAllMechanicsWithService = () => {
        fetch("http://144.91.110.221:3032/GetmechanicWithService")
            .then(res => res.json())
            .then(data => {
                console.log(JSON.stringify(data[0]))
                SetAllMechanicWithService(data)
            })
            .then(err => console.log(err))
    }

    // data table

    const data =[];
    {var ind=0
      AllMechanicsWithService.map((item,index)=>{   
      
      if(item.user !=undefined && item.service !=undefined ){  
        ind++ 
    data.push( {"sr_no":ind,"name":item.user.fullname,"shop":item.user.shop_name,"contact":item.user.mobile,"address":item.user.address,"service":item.service.name,"action":<span><button className="btn btn-secondary" onClick={()=>{EditObj(item)}}> Edit</button> </span>})
      }
    })}
      const columns = [
        { title: "SR NO", data: "sr_no" },
        { title: "Name", data: "name" },
        { title: "Service", data: "service" },
        { title: "Shop", data: "shop" },
        { title: "Contact", data: "contact" },
        { title: "Address", data: "address" },
        // { title: "Action", data: "action" },
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
           <div class="card-title">Brands</div>
           <hr/>
            {/* <form> */}
           <div class="form-group">
            <label for="input-1">Name</label>
            <input type="text" class="form-control" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="form-row">
           <div class="col-lg-6 form-group">
            <label for="input-2">Image</label>
            <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.files[0])}}  />
           </div>
           <div class="col-lg-6 form-group"  >
           <label for="input-2">Status</label>
                <select className="form-control" value={status} onChange={(e)=>{SetStatus(e.target.value)}}>
                
                    <option value="0">Active</option>
                    <option value="1">Deacive</option>
                </select>
            </div>
            </div>
           <div class="form-group">
            <button type="submit" class="btn btn-light px-5" onClick={()=>{StoreServiceType()}}><i class="icon-lock"></i> Submit</button><button type="submit" class="btn btn-default px-5" onClick={()=>{UpdateServiceType()}}><i class="icon-lock"></i> Update</button>
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
export default AllMechanicsWithService;