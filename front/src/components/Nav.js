import React from 'react';
import logo from "../img/University-Logo.png";
import { NavLink } from "react-router-dom";
import '../App.css';
const Nav = () => {

    const sty={
        position:"relative",
        display:"flex",
        justifyContent:"flex-end"
    }
    return (
        <div>
                 <nav className="navbar navbar-expand-sm bg-primary bg-light justify-content-center">
                        
                     
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div class="navbar-brand" href="">
                                                          <img src={logo} alt="logo" style={{width:"75px"}} />
                                             </div>
                                             <a className="navbar-brand" href="">JNEC | Alumni Association</a>
                         
                            <div className="collapse navbar-collapse" id="collapsibleNavbar" style={sty}>
        
                                <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Register">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                                        </li>

                                </ul>
                            </div>
                            </nav>
                          </div>
    )
}

export default Nav
