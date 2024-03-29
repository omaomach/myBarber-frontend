import React from "react";
import '../styles/singleimage.css'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

function SingleImage() {
    return (
        <div>
        <div className="navbar">
                <img src={logo} alt="logo" className="logo"/>
                <nav>
                    <ul id="menuList">
                        <li><a href="#">Find an Artist</a></li>
                        <li><a href="#">Explore Tattoos</a></li>
                        <li><a href="#">Learn More About Tattoos</a></li>
                    </ul>
                </nav>
                <img src={menu} alt="menu" className="menu"/>

            </div>
        </div>
    )
}

export default SingleImage;