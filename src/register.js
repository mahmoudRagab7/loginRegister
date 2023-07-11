import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { React, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { auth } from "./firebase";

export const Resgister = (props) => {
  const [emial, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [confPass, setConfPass] = useState("");
  const [show, setShow] = useState("Show");
  const [passType, setPassType] = useState("password");
  const [show2, setShow2] = useState("Show");
  const [passType2, setPassType2] = useState("password");

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

  const togglePassword2 = () => {
    if (confPass !== "" && show2 === "Show") {
      setShow2("Hide");
      setPassType2("text");
      //   console.log(show);
    } else if (show2 === "Hide") {
      setShow2("Show");
      setPassType2("password");
    }
  };

  // start check empty inputs
  const checkAuth = () => {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let confirmPass = document.getElementById("conf-password");
    // console.log(email);
    // console.log(password);
    if (name.value == "") {
      name.style.border = "thin solid #e01b24";
      document.getElementById("error3").style.display = "block";
    }
    if (email.value == "") {
      email.style.border = "thin solid #e01b24";
      document.getElementById("error5").style.display = "block";
    }
    if (password.value == "") {
      password.style.border = "thin solid #e01b24";
      document.getElementById("icon-pass-2").style.display = "none";
      document.getElementById("error4").style.display = "block";
    }
    if (confirmPass.value == "") {
      confirmPass.style.border = "thin solid #e01b24";
      document.getElementById("icon-pass-3").style.display = "none";
      document.getElementById("error6").style.display = "block";
    } else {
      name.style.border = "none";
      email.style.border = "none";
      password.style.border = "none";
      confirmPass.style.border = "none";
      name.style.borderBottom = "thin solid #fed049";
      email.style.borderBottom = "thin solid #fed049";
      password.style.borderBottom = "thin solid #fed049";
      confirmPass.style.borderBottom = "thin solid #fed049";
    }
  };
  const changeNameInput = (e) => {
    setName(e.target.value);
    let name = document.getElementById("name");
    if (name.value != "") {
      document.getElementById("error3").style.display = "none";
    }
  };
  const changeEmailInput = (e) => {
    setEmail(e.target.value);
    let email = document.getElementById("email");
    if (email.value != "") {
      document.getElementById("error5").style.display = "none";
    }
  };
  const changePassInput = (e) => {
    setPass(e.target.value);
    let password = document.getElementById("password");

    if (password.value != "") {
      document.getElementById("icon-pass-2").style.display = "block";
      document.getElementById("error4").style.display = "none";
    }
  };
  const changeConfirmPassInput = (e) => {
    setConfPass(e.target.value);
    let confirmPassword = document.getElementById("password");

    if (confirmPassword.value != "") {
      document.getElementById("icon-pass-3").style.display = "block";
      document.getElementById("error6").style.display = "none";
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
      <div className="register-head">
        <h2>Create a new account</h2>
        <p>Basic account informatin</p>
      </div>
      <form className="login-form d-flex flex-column" onSubmit={handleSubmit}>
        <div className="inp-holder">
          <div className="inp-container">
            <input
              className="inp-field"
              value={name}
              onChange={changeNameInput}
              type="text"
              placeholder="Name"
              id="name"
              name="name"
            />
            <FaExclamationTriangle id="error3" className="error-triangle" />
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
            />
            <span id="icon-pass-2" className="toggle" onClick={togglePassword}>
              {show}
            </span>
            <FaExclamationTriangle id="error4" className="error-triangle" />
          </div>

          <div className="inp-container">
            <input
              className="inp-field"
              value={emial}
              onChange={changeEmailInput}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
            <FaExclamationTriangle id="error5" className="error-triangle" />
          </div>

          <div className="pass-container">
            <input
              className="inp-field pass"
              value={confPass}
              onChange={changeConfirmPassInput}
              type={passType2}
              placeholder="Confirm password"
              id="conf-password"
              name="conf-password"
            />
            <span id="icon-pass-3" className="toggle" onClick={togglePassword2}>
              {show2}
            </span>
            <FaExclamationTriangle id="error6" className="error-triangle" />
          </div>
        </div>
        <div className="signup-social-holder">
          <button
            className="btn rounded-pill my-3 reg"
            type="submit"
            onClick={checkAuth}
          >
            Sign Up
          </button>
          <div className="signup-social d-flex">
            <p>Or sign up with </p>
            <div className="social-icons">
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
          </div>
        </div>
      </form>

      <div className="switch-register">
        <p>I accept privacy terms and conditions </p>
        {/* <input type="checkbox" value={"Accept"} id="accept" name="accept" /> */}
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="accept"
          ></input>
        </div>
      </div>
    </div>
  );
};
