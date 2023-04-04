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

                </div>
            </div>
        </div>
    )
}

export default FindArtist;