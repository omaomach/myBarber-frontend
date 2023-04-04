import React from "react";
import Navbar from "./Navbar";
import '../styles/findartist.css'

function FindArtist() {
    return(
        <div id="find-an-artist-page-parent">
            <Navbar />
            <div id="secondary-parent">
                <div id="map-holder">

                </div>
                <div id="filter-buttons">
                    <button id="first-location-button"><p>Location</p></button>
                    <button className="location-buttons"><p>Your Location</p></button>
                    <button className="location-buttons"><p>Studio Name</p></button>
                    <button className="location-buttons"><p>Artist Name</p></button>
                </div>
                <div id="featured-studios">
                    <h2>Featured Studios</h2>
                    <button id="featured-studios-left-button">Left</button>
                    <button id="featured-studios-right-button">Right</button>
                </div>
                <div id="featured-studios-cards">
                    <div className="studio-card">

                    </div>
                    <div className="studio-card">
                        
                    </div>
                    <div className="studio-card">
                        
                    </div>
                    <div className="studio-card">
                        
                    </div>
                </div>
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

export default FindArtist;