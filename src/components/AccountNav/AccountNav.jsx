import React from "react";
import "./AccountNav.css";
import { Link } from "react-router-dom";

export default function AccountNav() {
  return (
    <div className="account">
      <div>
        <div className="account-nav-header">
          <h2>Hey Samuel</h2>
        </div>
        <ul className="account-nav-menu">
          <li className="account-nav-item">
            <Link className="account-nav-link active" to='/account/profile'>Profile</Link>
          </li>
          <li className="account-nav-item">
            <Link className="account-nav-link" to='/account/settings'>Settings</Link>
          </li>
          <li className="account-nav-item">
            <Link className="account-nav-link" to='/account/ratings'>Ratings</Link>
          </li>
          <li className="account-nav-item">
            <Link className="account-nav-link" to='/saved-professors'>Saved Professors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
