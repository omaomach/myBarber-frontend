import React from "react";
import '../styles/studiopage.css'
import Navbar from "./Navbar";
import gokuu from '../assets/gokuu.jpg'

function StudioPage() {
    return (
        <div id="studio-page-parent-div">
            <Navbar />
            <div id="second-div">
                <div id="shop-image">

                </div>
                <button id="locate-shop"><p>Locate</p></button>
                <div id="featured-artists">
                    <button id="artist-filter-button"><h2>Featured Artists</h2></button>
                    <button id="featured-artists-left-button">Left</button>
                    <button id="featured-artists-right-button">Right</button>
                </div>
                <div id="featured-artists-cards">
                <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Vincent Makhoha</p>
                            <p>Status: Available</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Vincent Makhoha</p>
                            <p>Status: Available</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Vincent Makhoha</p>
                            <p>Status: Available</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Vincent Makhoha</p>
                            <p>Status: Available</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudioPage;