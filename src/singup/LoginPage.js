import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

 function LoginPage() {

   const[signup,getUser]=useState({
    username:'',
    email:'',
    password:''
   })

   const OnchangeHandler=e=>{
    getUser({...signup,[e.target.name]:e.target.value});
   }
   const{username,email,password}=signup;

   const formHandler=e=>{
    e.preventDefault(e);
    AddDataToServer(signup)
   }

   const  AddDataToServer=(data)=>{
    axios.post("http://localhost:8080/user/signup", data).then(
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
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"></input>

			<div class="signup">
				<form >
                <label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" ></input>
					<input type="password" name="password" placeholder="Password" required="" ></input>
					<button type='submit'>Login</button>
				</form>
			</div> 




			<div class="login">
				<form onSubmit={e=>formHandler(e)}>
                <label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="Username" required="" value={username} onChange={(e)=>OnchangeHandler(e)}></input>
					<input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e)=>OnchangeHandler(e)}></input>
					<input type="password" name="password" placeholder="Password" required="" value={password} onChange={(e)=>OnchangeHandler(e)}></input>
					<button type='submit'>Sign up</button>
				</form>
			</div>
	</div>
  )
}

export default LoginPage;
