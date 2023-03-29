import React from "react";
import Navbar from "./Navbar";
import "../styles/landing.css"

function Landing() {
    return(
        <div className="landing-page-parent">
            <Navbar />
            <div className="vertical-align-one">
                <div className="holder">
                    <p id="vertical-align-one-p">Search, view and get connected with
                        <br/>an Ink Master Today</p>
                </div>
                
                <div className="holder-1">
                <p id="holder-1-p">As an artist, share your art and skill set and get connected with a client <br/>
                    All our Ink Masters are licensed and professional artists with years of experience</p>
                </div>
                <button className="get-started">Get Started</button>

                <div className="holder-2">

                </div>

                <div className="holder-3">
                    <div className="left-clients-holder">
                        <div className="clients-text">
                            
                        </div>
                        <p id="left-clients-holder-p">Clients on Ink Masters</p>
                        <p id="left-clients-holder-p1">Checkout our customers' reviews on our services</p>
                        <button>Checkout eviews</button>
                    </div>
                    <div className="right-artists-holder">
                        <div className="clients-text">
                            
                        </div>
                        <p id="right-artists-holder-p">Artists on Ink Masters</p>
                        <p id="right-artists-holder-p1">Checkout our licensed and professional artist today</p>
                        <button>Discover artists</button>

                    </div>
                </div>

                <div className="holder-4">
                    <div className="get-inked-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Get Inked Today</p>
                        <p id="holder-4-ink">Lets link you to an artist of your choice</p>
                    </div>
                    <div className="get-piercing-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Get a Piercing</p>
                        <p id="holder-4-ink">Lets link you to a licensed professional</p>
                    </div>
                    <div className="access-shop-today">
                        <div className="inked-today-text">

                        </div>
                        <p id="holder-4-p">Checkout Our Shop</p>
                        <p id="holder-4-ink">Find and purchase tattoo and piercing related items</p>
                    </div>
                </div>
                <p id="client-reviews-text">Our clients love us! Read what they have to say</p>
                <div className="holder-5-reviews">
                    <div className="reviews-card">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            creatives are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. Ink Masters is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>

                    <div className="reviews-card" id="reviews-card-2">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            creatives are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. Ink Masters is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>

                    <div className="reviews-card" id="reviews-card-3">
                        <div className="reviews-text">
                            <h1 id="reviews-comma">"</h1>
                            <p id="reviews-p-text">I have never seen a platform that's completely free, where <br />
                            creatives are given this much power to not only show <br />
                            their work, learn, get hired for doing what they <br /> 
                            enjoy and love. Ink Masters is the simply the best!!!</p>
                        </div>
                        <div className="user-info-review">

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Landing;