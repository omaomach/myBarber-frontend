import React from "react";
import "../styles/footer.css"
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="left-side">
                <img className="second-logo" src={logo} alt="second logo" />
                <p>Ink Masters consists of a group of tattoo artists. <br />
                whose aim is to provide quality services to clients <br />
                This site holds every information you may wish learn <br />
                concerning body art</p>
            </div>
            <div className="middle">

            </div>
            <div className="right-side">

            </div>
        </div>
    )
}

export default Footer;