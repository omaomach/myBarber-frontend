import React from "react";
import Navbar from "./Navbar";
import "../styles/landing.css"

function Landing() {
    return(
        <div className="landing-page-parent">
            <Navbar />
            <div className="vertical-align-one">
                <div className="holder">
                    <p>Search, view and get connected with
                        <br/>an Ink Master Today</p>
                </div>
                
                <div className="holder-1">
                <p>As an artist, share your art and skill set and get connected with a client <br/>
                    All our Ink Masters are licensed and professional artists with years of experience</p>
                </div>
                <button className="get-started">Get Started</button>

                <div className="holder-2">

                </div>

                <div className="holder-3">
                    <div className="left-clients-holder">

                    </div>
                    <div className="right-artists-holder">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing;