import React from "react";
import Navbar from "./Navbar";
import '../styles/findartist.css'
import gokuu from '../assets/gokuu.jpg'

function FindArtist() {
    return(
        <div id="find-an-artist-page-parent">
            <Navbar />
            <div id="secondary-parent">
                <div id="map-holder">

                </div>
                <div id="filter-buttons">
                    <button id="first-location-button"><p>Shop Location</p></button>
                    <button className="location-buttons"><p>Your Location</p></button>
                    <button className="location-buttons"><p>Studio Name</p></button>
                    <button className="location-buttons"><p>Barber Name</p></button>
                    <button className="location-buttons"><p>Shop Rating</p></button>
                </div>
                <div id="featured-studios">
                    <h2>Featured Shops</h2>
                    <button id="featured-studios-left-button">Left</button>
                    <button id="featured-studios-right-button">Right</button>
                </div>
                <div id="featured-studios-cards">
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Ink City</p>
                            <p>Location: Nairobi, Moi Avenue</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Dancan Tattoos</p>
                            <p>Location: Nairobi, Biashara Street</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Dreamland Studios</p>
                            <p>Location: Karen</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Omao Machoka Stusios</p>
                            <p>Location: Kahawa Sukari, Baringo rd</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                </div>
                <div id="featured-artists">
                    <button id="artist-filter-button"><h2>Featured Stylists</h2></button>
                    <button id="featured-artists-left-button">Left</button>
                    <button id="featured-artists-right-button">Right</button>
                </div>
                <div id="featured-artists-cards">
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Joash Omao Machoka</p>
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
                            <p>Malingson Kiprotich Rono</p>
                            <p>Status: Not available</p>
                        </div>
                        <button id="book-studio-button">Book</button>
                        </div>
                    </div>
                    <div className="studio-card">
                        <img className="studio-work-images" src={gokuu} alt="gokuu" />
                        <div id="studio-info-and-book">
                            <img id="studio-logo" src={gokuu} alt="" />
                            <div id="studio-name">
                            <p>Moses Nyasimi</p>
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

export default FindArtist;