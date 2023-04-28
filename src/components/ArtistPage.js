import React from "react";
import "../styles/artistpage.css";
import Navbar from "./Navbar";
import gokuu from "../assets/gokuu.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faKeyboard, faShop } from '@fortawesome/free-solid-svg-icons'

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
          <div id="followers-comments-div">
            <FontAwesomeIcon id="followers-icon" size="2x" icon={faUsers} />
            <p id="followers-p">25 followers</p>
            <FontAwesomeIcon id="keyboard" size="2x" icon={faKeyboard} />
            <p id="comments-p">25 comments</p>
          </div>
          <div id="barber-shop">
            <FontAwesomeIcon id="barber-shop-icon" size="2x" icon={faShop} />
            <p id="barber-shop-name">Ruhan Barber Shop</p>
          </div>
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
