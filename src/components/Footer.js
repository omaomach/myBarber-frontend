import React from "react";
import "../styles/footer.css"
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div id="footer">
            <div id="footer-logo-item" className="footer-item">
                <div id="footer-logo">
                    <div id="img-wrapper">
                        <img id="footer-log-img" src={logo} alt="company logo"/>
                    </div>
                </div>

                <div id="footer-socials">

                </div>
            </div>

            <div id="footer-quick-links-item" className="footer-item">
                <h1>Quick Links</h1>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Links</li>
                </ul>
            </div>

            <div id="footer-contact-info-item" className="footer-item">
                <h1>Contact Info</h1>
                <ul>
                    <li>email: info@inkmasters.co.ke</li>
                    <li>tel: 0724252552</li>
                </ul>
            </div>

            <div id="footer-newsletter-item" className="footer-item">
                <h1>Newsletter</h1>
                <form id="footer-newsletter-form">
                    <input type="email" />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Footer;