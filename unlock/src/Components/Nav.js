import React from "react";
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <div className="Nav-Container">
            <div className="Div1"><h3>Unlock</h3></div>
            <div className="Div2">
        <Link to='/'><h6>Home</h6></Link>     
        <Link to='/Login'><h6>Login</h6></Link> 
        <Link to='/Register'><h6>Register</h6></Link> 
                <h6>contact US</h6>
            </div>
        </div>
    )
}
export default NavBar;