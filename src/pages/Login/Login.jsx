import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <>
      <div className={`${signState === "Sign Up" ? "signup" : "login"}`}>
        <div className="signupnav">
          <img src={logo} className="loginlogo" />
          <button
            className={`${signState === "Sign Up" ? "signinbutton" : "hidden"}`}
            onClick={() => setSignState("Sign In")}
          >
            Sign In
          </button>
        </div>
        {signState === "Sign Up" ? (
          <div className="signupform">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Starts at ₦2,200. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="signupdetails">
              <input type="email" placeholder="Email address" />
              <Link to={"/home"}><button >
                Get Started
              </button></Link>
            </div>
          </div>
        ) : (
          <div className="loginform">
            <h1>Sign In</h1>
            <form>
              <input
                type="email"
                placeholder="Email or mobile number"
                required
              />
              <input type="password" placeholder="Password" required />
              <Link to={"/home"}>
                <button>{signState}</button>
              </Link>
              <span>OR</span>
              <button className="codebtn">Use a Sign-In Code</button>
              <span className="forgotpassword">Forgot password?</span>
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
            </form>
            <div className="formswitch">
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>
                  Sign Up Now.
                </span>
              </p>
            </div>
            <p className="captcha">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <a href="#">Learn more.</a>
          </div>
        )}
      </div>
      <div className="footer loginfooter">
        <p>Questions? Contact Us.</p>
        <ul>
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
      </div>
    </>
  );
};

export default Login;
