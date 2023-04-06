import React from "react"
import Login from "./Login"
import { useState } from "react"

import axios from "axios"
const Regist=()=>{
   const[registered,setRegistered]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [Confpassword,setConfpassword]=useState('');
    // const [err,setErr]=useState("")

 const Submit=()=>{
    if(name && email && (password===Confpassword)){
        axios.post("http://localhost:8080/register",{
            name,email,password
        })
    //   alert('registered')
      .then((res)=>{alert(res?.data?.message)
      setRegistered(true)
    })
      .catch((err)=>{console.log(err)})

            }else{
                alert("invalid input")   
            }

 }   
   
   
   
    return(
        <>
       {registered?<Login/>:(
        <div className="Regi-Container">
            <input type='text' placeholder="Name..." onChange={(e)=>{setName(e.target.value)}}/>
            <input type='email' placeholder="Email..." onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password..." onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="password" placeholder="Confirm-Password..." onChange={(e)=>{setConfpassword(e.target.value)}}/>
            <button onClick={Submit} >Register</button>

        </div>
)}
        </>
    )

}
export default Regist;