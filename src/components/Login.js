import React from "react";
import "../styles/login.css";
import GoogleButton from 'react-google-button'
import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "react-native-web";

function Login() {
  return (
    <div id="register-page-parent">
      <div id="left-side">
      <h1 id="login-h1">myBarber</h1>
        <h2 id="sign-in-text">Sign in to continue</h2>
        <div className="field-container">
            <form>
                <input type="phone_number" id="phone_number" placeholder="Phone Number"/>
                <input type="password" id="client-password" placeholder="Password"/>
                <button id="sign-up-button" type="submit">Login</button>
            </form>
            
        </div>
        <div className="straight-lines">
            <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20, width: 210 }}></div>
            <h3 id="straights-line-h3">or</h3>
            <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20, width: 210 }}></div>
        </div>
        <View style = {styles.container}>
          <StatusBar style = "auto" />
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked")
            }} />
        </View>
        <h3 id="have-an-account">Have an account? Login</h3>
      </div>
      <div id="right-side">
        
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a272a",
    alignItems: "center",
    justifyContent: "center",

  }
})

export default Login;
