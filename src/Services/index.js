import React,{useState,useEffect} from 'react';
import CKEditor from "react-ckeditor-component";
import DataTable from '@bit/adeoy.utils.data-table';
const CreateService =()=>{
    const[status,SetStatus]=useState(0)
    const[name,SetName]=useState()
    const[_id,SetId]=useState()
    const[mode,SetMode]=useState()
    const[service_type,SetServiceType]=useState()
    const[estimated_time,SetEstimatedTime]=useState()
    const[warranty,Setwarranty]=useState(1)
    const[remark,SetRemark]=useState()
    const[description,SetDescription]=useState()
    const[features,SetFeatures]=useState()
    const[image,SetImage]=useState()
    const[AllServices,SetAllService]=useState([])
    const[AllServiceType,SetAllServiceType]=useState([])

    useEffect(()=>{
    GetServices()
    GetServiceType()
    },[])

    const GetServiceType = () => {
        fetch("http://http://144.91.110.221:3032/GetServiceType")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetAllServiceType(data)
            })
            .then(err => console.log(err))
    }
    const StoreService = () => {
        if (this.checkValidation()) {
        const data = new FormData()
        data.append('name', name)
        data.append('mode', mode)
        data.append('service_type', service_type)
        data.append('estimated_time', estimated_time)
        data.append('warranty', warranty)
        data.append('remark', remark)
        data.append('description', description)
        data.append('features', features)
        data.append('status', status)
        data.append('image',image)
        const url = "http://144.91.110.221:3032/StoreService"
        fetch(url, {
                method: 'post',
                body: data
            })
            .then(res => res.json())
            .then(data => {
                alert("Service Created Successfully") 
                GetServices()               
            })
            .then(err => {})
        }
    }

    const GetServices = () => {
        fetch("http://http://144.91.110.221:3032/GetServices")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetAllService(data)
            })
            .then(err => console.log(err))
    }

    const EditObj = (obj) => {
  
       SetId(obj._id)
        SetName(obj.name)
        SetServiceType(obj.service_type)
        Setwarranty(obj.warranty)
        SetDescription(obj.description)
        SetRemark(obj.remark)
        SetFeatures(obj.features)
        SetMode(obj.mode)
        SetEstimatedTime(obj.estimated_time)
        SetStatus(obj.status)
        SetImage(obj.image)
    }
   const UpdateService =()=>{
        // if (this.checkValidation()) {
        const data = new FormData()
        data.append('_id', _id)
        data.append('name', name)
        data.append('mode', mode)
        data.append('service_type', service_type)
        data.append('estimated_time', estimated_time)
        data.append('warranty', warranty)
        data.append('remark', remark)
        data.append('description', description)
        data.append('features', features)
        data.append('status', status)
        data.append('image',image)
        const url="http://http://144.91.110.221:3032/UpdateService"
                fetch(url,
                    {
                    method:'put',
                    body:data
                })
                .then(res => res.json())              
                .then((res)=>{  
               alert('Service updated successfully !');
               GetServices()
                })            
                .then(err=>console.log(err))
            //   }
      }

      const DeleteService = (id) => {
        const apiUrl = 'http://http://144.91.110.221:3032/DeleteService';
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
        GetServices()
          
        })
        
      }

     function onChange(evt){
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        SetFeatures(newContent)
      }

    // data table

    const data =[];
    {AllServices.map((item,index)=>{
    data.push( {"sr_no":index+1,"name":item.name,"service_type":item.service_type.name,"mode":item.mode,"estimated_time":item.estimated_time,"warranty":item.warranty,"action":<span><button className="btn btn-secondary" onClick={()=>{EditObj(item)}}> Edit</button> <button className="btn btn-danger" onClick={()=>{DeleteService(item._id)}}> Delete</button></span>})
    })}
      const columns = [
        { title: "SR NO", data: "sr_no" },
        { title: "Name", data: "name" },
        { title: "Type", data: "service_type" },
        { title: 'Mode',data: "mode"},
        { title: 'Estimated Time', data: "estimated_time"},
        { title: "Warranty", data: "warranty" },
        { title: "Action", data: "action" },
      ];
      const click = (row) => {
        console.log(row);
      };
    // end data table
    return(
        <>
<div class="container-fluid">
    <div class="row mt-3">
      <div class="col-lg-12">
         <div class="card">
           <div class="card-body">
           <div class="card-title">Services</div>
           <hr/>
            {/* <form> */}
        <div class="form-row">
           <div class="col-lg-6  form-group">
            <label >Service Name</label>
            <input type="text" class="form-control" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Enter Service Name" />
           </div>
           <div class="col-lg-6 form-group">
            <label > Service Type</label>
            <select className="form-control" value={service_type} onChange={(e)=>{SetServiceType(e.target.value)}}>
                <option value="">choose type...</option>
                {AllServiceType.map((item,index)=>{
                    return(
                        <option value={item._id}>{item.name}</option>
                    )
                })}
            </select>
            {/* <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.value)}}  /> */}
           </div>
           <div class="col-lg-6 form-group">
            <label > Mode</label>
            <select className="form-control" value={mode} onChange={(e)=>{SetMode(e.target.value)}}>
                <option value="">choose mode...</option>
                <option value="Paid">Paid</option>
                <option value="Free">Free</option>              
            </select>
            {/* <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.value)}}  /> */}
           </div>
           <div class="col-lg-6  form-group">
            <label >Estimated Time</label>
            <input type="text" class="form-control" value={estimated_time}  onChange={(e)=>{SetEstimatedTime(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="col-lg-6 form-group">
            <label > Warranty <span className="text-success">(in years)</span></label>
            <select className="form-control" value={warranty}  onChange={(e)=>{Setwarranty(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            {/* <input type="file" class="form-control" onChange={(e)=>{SetImage(e.target.value)}}  /> */}
           </div>
            <div class="col-lg-6  form-group">
            <label >Remark</label>
            <input type="text" class="form-control" value={remark} onChange={(e)=>{SetRemark(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="col-lg-6  form-group">
            <label >Image</label>
            <input type="file" class="form-control"  onChange={(e)=>{SetImage(e.target.value)}} placeholder="Enter Brand Name" />
           </div>
           <div class="col-lg-6 form-group">
            <label >Description</label>
                <textarea className="form-control"  onChange={(e)=>{SetDescription(e.target.value)}}>{description}</textarea>
            </div>
           <div class="col-lg-12 form-group">
           <label >Features</label>
           <CKEditor activeClass="editor" content={features}   events={{
                "change": onChange
              }} />
            </div>       
            <div class="col-lg-6 form-group"  >
            <label for="input-2">Status</label>
                    <select className="form-control" onChange={(e)=>{SetStatus(e.target.value)}}>
                        <option value="0">Active</option>
                        <option value="1">Deacive</option>
                    </select>
            </div>
           <div class="col-lg-6 form-group">
               <br/>
            <button type="submit" class="btn btn-light px-5" onClick={()=>{StoreService()}}><i class="icon-lock"></i> Submit</button>      <button type="submit" class="btn btn-default px-5" onClick={()=>{UpdateService()}}><i class="icon-lock"></i> Update</button>
          </div>
          </div>

          {/* </form> */}
         </div>
         </div>
      </div>
    </div> 
    {/* // <!--End Row--> */}
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
	{/* // <!--start overlay--> */}
		  <div class="overlay toggle-menu"></div>
		{/* // <!--end overlay--></form> */}

    </div>
    </>
    )
}
export default CreateService;