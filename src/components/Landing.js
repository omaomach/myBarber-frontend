import React from "react";
import Navbar from "./Navbar";
import "../styles/landing.css"

function Landing() {
    return(
        <div className="landing-page-parent">
            <Navbar />
            <div className="vertical-align-one">
                <div className="holder">
                    <p id="vertical-align-one-p">Find the right barber for your next haircut,
                        <br/>coz a fresh fade is all you need.</p>
                </div>
                
                <div className="holder-1">
                <p id="holder-1-p">As a hair stylist, share your work and skill set to get connected with a client. <br/>
                    A fresh haircut makes you look presentable and adds an extra touch of polish to your personality and look. <br/>
                    Lets make your experience, a great one.</p>
                </div>
                <button className="get-started">Get Started</button>

                <div className="holder-2">

                </div>

                <div className="holder-3">
                    <div className="left-clients-holder">
                        <div className="clients-text">
                            
                        </div>
                        <p id="left-clients-holder-p">Clients on myBarbar</p>
                        <p id="left-clients-holder-p1">Checkout our customers' reviews on our services</p>
                        <button>Checkout reviews</button>
                    </div>
                    <div className="right-artists-holder">
                        <div className="clients-text">
                            
                        </div>
                        <p id="right-artists-holder-p">Hair stylists on myBarber</p>
                        <p id="right-artists-holder-p1">Search and Checkout our stylists today</p>
                        <button>Discover Stylists</button>

                    </div>
                </div>

                <div className="holder-4">
                    <div className="get-inked-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Get a haircut today</p>
                        <p id="holder-4-ink">Lets link you to a barber of your choice</p>
                    </div>
                    <div className="get-piercing-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Get dreadlocks today</p>
                        <p id="holder-4-ink">Lets link you to a professional hair stylist</p>
                    </div>
                    <div className="access-shop-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Checkout Our Shop</p>
                        <p id="holder-4-ink">Find and purchase hair and skin care products today</p>
                    </div>
                </div>
                <p id="client-reviews-text">Our clients love us! Read what they have to say</p>
                <div className="holder-5-reviews">
                    <div className="reviews-card">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            hair stylists are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. myBarber is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>

                    <div className="reviews-card" id="reviews-card-2">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            hair stylists are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. myBarber is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>

                    <div className="reviews-card" id="reviews-card-3">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            hair stylists are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. myBarber is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>
                    
                </div>

                <div className="holder-6-vision">
                    <div className="left-vision">
                        <h3 id="left-vision-header">Our Vision</h3>
                        <div className="left-vision-text">
                            <p id="left-vision-text-p">The main reason behind myBarber is to allow <br />
                            clients to easily search and find hair stylists near them.<br />
                            myBarber also allows clients to book appointments <br />
                            in advance rather than going to a barber shop and <br />
                            having to wait an hour for an appointment.</p>
                        </div>
                        <button>Get Started</button>
                    </div>
                    <div className="right-vision">

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Landing;