import React, { useRef } from "react";
import logo from '../assets/logo.png'
import "../styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav ref={navRef}>
                <div id="links-container">
                    <a href="/find">Find a Barbar</a>
                    <a href="/#">Explore Haircuts</a>
                    <a href="/#">Articles on Hair Care</a>
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