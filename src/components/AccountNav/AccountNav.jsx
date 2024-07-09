import React from "react";
import "./AccountNav.css";
import { Link } from "react-router-dom";

export default function AccountNav() {
  return (
    <div className="container">
      <div>
        <ul className="account-nav-menu">
          <li className="account-nav-item">
            <Link className={window.location.pathname === '/account/profile' ? 'account-nav-link active': 'account-nav-link'} to='/account/profile'>Profile</Link>
          </li>
          <li className="account-nav-item">
            <Link className={window.location.pathname === '/account/settings' ? 'account-nav-link active': 'account-nav-link'} to='/account/settings'>Settings</Link>
          </li>
          <li className="account-nav-item">
            <Link className={window.location.pathname === '/account/ratings' ? 'account-nav-link active': 'account-nav-link'} to='/account/ratings'>Ratings</Link>
          </li>
          <li className="account-nav-item">
            <Link className={window.location.pathname === '/saved-professors' ? 'account-nav-link active': 'account-nav-link'} to='/saved-professors'>Saved Professors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
