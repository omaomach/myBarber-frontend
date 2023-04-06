import React from "react";
import '../styles/studiopage.css'
import Navbar from "./Navbar";

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
                    <div className="artist-card">

                    </div>
                    <div className="artist-card">
                        
                    </div>
                    <div className="artist-card">
                        
                    </div>
                    <div className="artist-card">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudioPage;