import React from "react";
import "../styles/footer.css"
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div id="footer">
            <div className="footer-outer">
                <div id="footer-logo">
                    <div id="img-wrapper">
                        <img id="footer-log-img" src={logo} alt="company logo"/>
                    </div>
                </div>

                <div id="footer-socials">

                </div>
            </div>

            <div id="footer-quick-links" className="footer-inner">

            </div>

            <div id="footer-contact-info" className="footer-inner">
            </div>

            <div id="footer-newsletter" className="footer-outer">
                <form id="footer-newsletter-form">
                    <input type="email" />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Footer;