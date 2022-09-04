
import axios from "axios";

import React, { useState } from 'react'
import './Sign.css'

function Sign() {
     // step 1: use state 
     const [user, setUser]= useState({
         firstname:'',
         lastname:'',
        email:'',
        number:''
 });

    // // step 3

     const onInputChange= e=>{
         setUser({...user,[e.target.name]:e.target.value})
     }
     const{firstname,lastname,email,number}=user;

    // //step 4 

     const FormHandler= e=>{
         e.preventDefault(e);
        addDatatoserver(user);
     }

    // //step 5

     const addDatatoserver=(data)=>{
         axios.post("http://localhost:8080/user/add", data).then(
             (response)=>{
                 console.log(response);
                 alert("sign up successfull")
             },
             (error)=>{
                 console.log(error);
                 alert("sign up failed ");
             }
       );

     }


  return (
    <div className="maincard">
        <div className="inside">
        <form className="form" onSubmit={e=>FormHandler(e)}>
            <div> 
               
                <label>firstname : </label>
                <input type="text" name="firstname"  value={firstname}  onChange={(e)=>onInputChange(e)}></input>
            </div>
                <label>lastname : </label>
                <input type="text" name="lastname" value={lastname}  onChange={(e)=>onInputChange(e)}></input>
            
            <div>
                <label>email : </label>
                <input type="email" name="email" value={email}  onChange={(e)=>onInputChange(e)}></input>   
            </div>
            <div>
                <label>number : </label>
                <input type="text"name="number" value={number}  onChange={(e)=>onInputChange(e)}></input>
            </div>
            <div>
                <button type="submit" className="button">Signup</button>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Sign