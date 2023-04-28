import React from "react";
import "../styles/artistpage.css";
import Navbar from "./Navbar";
import gokuu from "../assets/gokuu.jpg";

function ArtistPage() {
  return (
    <div id="parent-div">
      <Navbar />
      <div id="secondary-div">
        <div id="artist-details-div-1">
            <div id="image"></div>
          <h1 id="barber-name-h1">Machoka Joash Omao</h1>
          <h1 id="barber-nickname-h1">omaomachoka</h1>
          <button id="edit-profile-button">Edit profile</button>
        </div>
        <div id="third-div">
          <div id="artist-work-images">
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
            <img id="artist-work" src={gokuu} alt="hero" />
          </div>

          <div id="artist-details-div">
            <div id="artist-option-buttons">
              <button id="option-button-1">Book Artist</button>
              <button className="option-buttons">Review Artist</button>
              <button className="option-buttons">Report Artist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
