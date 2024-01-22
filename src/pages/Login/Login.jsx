import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";


export default function Login() {
  return (
    <div className="login container">
      <div className="login-card">
        <div className="login-top">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-top-btn">
            <button className="login-top-button"><span><FaGoogle size={14}/></span> Login with Google</button>
          </div>
          <div className="login-top-text">
            <div className="login-line"></div>
            <div>or login with email</div>
            <div className="login-line"></div>
          </div>
        </div>
        <form action="">
          <div className="input-field">
            <label htmlFor="">Email</label>
            <br />
            <input type="email" name="" className="form-control" id="" />
          </div>
          <div className="input-field">
            <label htmlFor="">Password</label>
            <br />
            <input type="password" name="" className="form-control" id="" />
          </div>
          <div className="input-field">
            <Link className="forgot-password">Forgot Password?</Link>
          </div>
          <div className="input-field">
            <button type="submit" className="login-btn">
              Continue
            </button>
          </div>
          <div className="input-field">
            <div className="login-text">
              Rate My Professors is designed for and targeted to U.S. audiences
              and is governed by and operated in accordance with U.S. laws.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
