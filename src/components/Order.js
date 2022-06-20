import React, { useState } from 'react';
import swal from 'sweetalert';

const Order = () => {
    var [data,setdata]=useState({fname:"",lname:"",mess:"",addr:"",email:"",mysel:""});
      
     var onchangedata=(e)=>{
           e.preventDefault();
           var val=e.target.value;
           var name=e.target.name;
           setdata({...data,[name]:val});
        //    console.log(data);
     }


     
     var storedata=async()=>{
         const {fname,lname,mess,addr,email,mysel,phone}=data;
         console.log(data);
         try{
             var res=await fetch("/order",{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        fname,lname,mess,addr,email,mysel,phone
                    })
                });
                const d=await res.json();
                if(d.status===422 ||  !d){
                    window.alert("invalid data");
                }else{
                    swal("Good job!", "You order is conformed!", "success");
                    // window.location.reload();
                }
            }catch(e){
                        alert("error ");
      }
   }


    return (
        <div>
            <div class="container" id="order">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h5>Book your order now</h5>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4 text-center">
                <button class="btn btn-primary " data-toggle="modal" data-target="#mymodal">Order Now</button>
                <div class="modal fade" id="mymodal" data-backdrop="static" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="modal-title">Book your order</div>
                                <button class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="input-group mt-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">First Name</span>
                                                </div>
                                                <input type="text" class="form-control" name="fname" onChange={onchangedata}/>
                                            </div>
                                            <div class="input-group mt-3">
                                                <input type="text" class="form-control"  name="lname" onChange={onchangedata}/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Last Name</span>
                                                </div>
                                            </div>


                                            <div class="multi-select mt-3 ">
                                                <label>Menu :</label>
                                                <select className='custom-select multi-select'  name="mysel" onChange={onchangedata}>
                                                       <option value="chocolate cake"> chocolate cake</option>
                                                       <option value="Pastries"> Pastries</option>
                                                       <option value="Cool-drinks"> Cool-drinks</option>
                                                       <option value="chocolate burger"> chocolate burger</option>
                                                       <option value="Wedding cake"> Wedding cake</option>
                                                       <option value=" Pineapple cake"> Pineapple cake</option>
                                                </select>
                                              </div>


                                            <div class="input-group mt-3">
                                                <input type="text" class="form-control"
                                                    placeholder="Enter your mail-id" name="email" onChange={onchangedata}/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Email-id
                                                        <i class="fas fa-envelope ml-1"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="input-group mt-3">
                                                <input type="text" class="form-control"
                                                    placeholder="Enter your phone number" name="phone" onChange={onchangedata}/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Phone no<i class="ml-1 fas fa-phone-alt"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="input-group mt-3">
                                                <input type="text" class="form-control"
                                                    placeholder="Enter your address" name="addr" onChange={onchangedata}/>
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Address
                                                        <i class="fas fa-location-arrow ml-1"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <label for="">Message</label>
                                                <textarea class="form-control"
                                                    placeholder="Type Message(if any)" name="mess"  onChange={onchangedata}></textarea>
                                            </div>
                                            <button class="btn btn-primary">Pay here</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button class="btn btn-primary" id="orderedvv" onClick={storedata}>Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
        </div>
    );
};





export default Order;