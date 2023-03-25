import React from "react";
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <img className="logo" src={logo} alt="logo"/>
            <div className="nav-text">
                <h4 className="artist">Find an Artist</h4>
                <h4>Tattoos</h4>
                <h4>Learn</h4>
            </div>
            
        </div>
    )
}

export default Navbar;