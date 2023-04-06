import React from "react"
import axios from 'axios'
import { useState } from "react"
import Regist from "./Regi"
import { Link, Redirect } from "react-router-dom"
import HomePage from "./Home"

const Login=()=>{
//    const [login,setLogIn]=useState(false)
    const [login ,setLogin]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [data,setData]=useState('')
    const Submit=()=>{
        if(email && password ){
            axios.post("http://localhost:8080/login",{
                email,password
            })
        //   alert('registered')
          .then((res)=>{{alert(res?.data?.message)}
          setData(res)
          setLogin(true)
        })
          .catch((err)=>{console.log(err)})
    
                }else{
                    alert("invalid input")   
                }
    
     } 
    //  if(login){
    //     return <Link to element={<HomePage/>}/>;
    //  }
    
    return(
        <>
        {login?<HomePage props={data}/>:(
         <div className="Login-Container">
            <input type='email' placeholder="Email..." onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password..." onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={Submit}>Login</button>
        </div>)}
        </>
       
    )
}
export default Login;