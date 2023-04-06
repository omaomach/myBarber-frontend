import React from "react";
import '../styles/artistpage.css'
import Navbar from "./Navbar";
import gokuu from "../assets/gokuu.jpg"

function ArtistPage() {
    return (
        <div id="parent-div">
            <Navbar />
            <div id="secondary-div">
                <div id="artist-details-div">
                    <div id="image-name-div">
                        <div id="image">
                        </div>
                        <div id="name">
                            <p>Joash Omao Machoka</p>
                            <p>Status: Available</p>
                        </div>
                    </div>
                    <div id="artist-option-buttons">
                        <button id="option-button-1">Book Artist</button>
                        <button className="option-buttons">Review Artist</button>
                        <button className="option-buttons">Report Artist</button>
                    </div>
                </div>
                <div id="artist-work-images">
                    <img id="artist-work" src={gokuu} alt="hero" />
                    <img id="artist-work" src={gokuu} alt="hero" />
                    <img id="artist-work" src={gokuu} alt="hero" />
                    <img id="artist-work" src={gokuu} alt="hero" />
                    <img id="artist-work" src={gokuu} alt="hero" />
                </div>
            </div>

        </div>
    )
}

export default ArtistPage;