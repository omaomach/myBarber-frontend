import React from "react";
import "../styles/register.css";

function Register() {
  return (
    <div id="register-page-parent">
      <div id="left-side">

      </div>
      <div id="right-side">
        <h1 id="register-h1">Get started</h1>
        <h3 id="create-your-account-now">Create your account now</h3>
        <div id="field-container">
            <form>
                <h4>Username</h4>
                <input type="text" id="username"/>
                <h4>Email</h4>
                <input type="email" id="client-email"/>
                <h4>Password</h4>
                <input type="password" id="client-password"/>
                <button id="register-button" type="submit">Sign Up</button>
            </form>
        </div>
        <h3 id="have-an-account">Have an account? Login</h3>
      </div>
    </div>
  );
}

export default Register;
