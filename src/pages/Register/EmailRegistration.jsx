import React, { useState } from "react";
import "./EmailRegistration.css";
import { Link } from "react-router-dom";

export default function EmailRegistration({ emailValue, onChange }) {
  const [email, setEmail] = useState(emailValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(email)

  };
  console.log('emailValue', email);
  return (
    <div className="email-register-card">
      <div className="email-register-card-header">
        <h3>
          <span style={{ fontWeight: "bolder" }}>Student</span>{" "}
          <span style={{ fontWeight: 'bolder', color:'red' }}>Sign Up</span>
        </h3>
        <p>
          Are you a professor?
          <Link style={{ textDecoration: "none", color: "blue",marginLeft:'5px' }}>
            Sign up here
          </Link>
        </p>
      </div>
      <div className="email-register-card-body">
        <div>
          <div className="email-google-button">
            <button>Sign up with Google</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>Or sign up with email</div>
          </div>
          <div className="email-form">
            <form action="" onSubmit={handleSubmit}> 
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="email-form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button type="submit" className="email-btn">
                Continue
              </button>
            </form>
          </div>
          <div style={{ fontSize: "small", textAlign: "center" }}>
            Rate My Professors is designed for and targeted to U.S. audiences
            and is governed by and operated in accordance with U.S. laws.
          </div>
        </div>
      </div>
    </div>
  );
}
