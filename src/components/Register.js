import React from "react";
import "../styles/register.css";

function Register() {
  return (
    <div id="register-page-parent">
      <div id="left-side">

      </div>
      <div id="right-side">
        <h1 id="register-h1">myBarber</h1>
        <h2 id="create-your-account-now">Register and enjoy all our services</h2>
        <div className="field-container">
            <form>
                <input type="text" id="username" placeholder="Username"/>
                <input type="email" id="client-email" placeholder="Email"/>
                <input type="phone_number" id="phone_number" placeholder="Phone Number"/>
                <input type="password" id="client-password" placeholder="Password"/>
                <input type="password" id="client-password" placeholder="Password Confirmation"/>
                <button id="register-button" type="submit">Sign Up</button>
            </form>
            
        </div>
        <div className="straight-lines">
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20, width: 210 }}></div>
            <p id="straights-line-p">or</p>
            <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20, width: 210 }}></div>
        </div>
        <h3 id="have-an-account">Have an account? Login</h3>
      </div>
    </div>
  );
}

export default Register;
