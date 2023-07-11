import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { React, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { auth } from "./firebase";

export const Login = (props) => {
  const [emial, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState("Show");
  const [passType, setPassType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePassword = () => {
    if (pass !== "" && show === "Show") {
      setShow("Hide");
      setPassType("text");
      //   console.log(show);
    } else if (show === "Hide") {
      setShow("Show");
      setPassType("password");
    }
  };

  // start check empty inputs
  const checkAuth = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email);
    // console.log(password);
    if (email.value == "") {
      email.style.border = "thin solid #e01b24";
      document.getElementById("error1").style.display = "block";
    }
    if (password.value == "") {
      password.style.border = "thin solid #e01b24";
      document.getElementById("icon-pass-1").style.display = "none";
      document.getElementById("error2").style.display = "block";
    } else {
      email.style.border = "none";
      password.style.border = "none";
      email.style.borderBottom = "thin solid #fed049";
      password.style.borderBottom = "thin solid #fed049";
    }
  };
  const changeEmailInput = (e) => {
    setEmail(e.target.value);
    let email = document.getElementById("email");
    if (email.value != "") {
      document.getElementById("error1").style.display = "none";
    }
  };
  const changePassInput = (e) => {
    setPass(e.target.value);
    let password = document.getElementById("password");

    if (password.value != "") {
      document.getElementById("icon-pass-1").style.display = "block";
      document.getElementById("error2").style.display = "none";
    }
  };
  // end check empty inputs

  // start sign in with google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    console.log("Logged in successfully");
  };
  // end sign in with google
  // start sign in with facebook
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    console.log("Logged in successfully");
  };
  // end sign in with facebook

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form d-flex flex-column" onSubmit={handleSubmit}>
        <div className="pass-container">
          <input
            className="inp-field"
            value={emial}
            onChange={changeEmailInput}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <FaExclamationTriangle id="error1" className="error-triangle" />
        </div>
        <div className="pass-container">
          <input
            className="inp-field pass"
            value={pass}
            onChange={changePassInput}
            type={passType}
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          <span id="icon-pass-1" className="toggle" onClick={togglePassword}>
            {show}
          </span>
          <FaExclamationTriangle id="error2" className="error-triangle" />
        </div>
        <button className="link-btn">Forgot your password ?</button>
        <button
          className="btn rounded-pill m-auto my-3 log"
          type="submit"
          onClick={checkAuth}
        >
          Login
        </button>
      </form>
      <div className="login-social d-flex">
        <p>Or login with </p>
        <button className="soc-log-btn">
          <FaLinkedinIn />
        </button>
        <button className="soc-log-btn" onClick={handleGoogleLogin}>
          <FaGoogle />
        </button>
        <button className="soc-log-btn" onClick={handleFacebookLogin}>
          <FaFacebookF />
        </button>
      </div>
      <div className="switch">
        <p>Not a member yet ? </p>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          click here to sign up
        </button>
      </div>
    </div>
  );
};
// justify-content-sm-center
