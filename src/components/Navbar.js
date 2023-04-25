import React, { useRef } from "react";
import logo from '../assets/logo.png'
import "../styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav ref={navRef}>
                <div id="links-container">
                    <NavLink to="/landing"><button className="nav-buttons">Landing</button></NavLink>
                    <NavLink to="/findbarber"><button className="nav-buttons">Find a Barber</button></NavLink>
                    <NavLink to="/explore"><button className="nav-buttons">Explore Haircuts</button></NavLink>
                    <NavLink to="/articles"><button className="nav-buttons">Articles on Hair Care</button></NavLink>
                </div>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>

            </nav>
            <button className="nav-btn nav-bars-btn" onClick={showNavbar}>
                <FaBars />
            </button>

            {/* <div className="nav-text">
                <h4 className="artist">Find an Artist</h4>
                <h4>Tattoos</h4>
                <h4>Learn</h4>
            </div> */}
            
        </header>
    )
}

export default Navbar;