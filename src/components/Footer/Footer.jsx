import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaAngleDown,
  FaAngleUp
  
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };
  return (
    <footer className="container">
      <div className="footer-toggle">
        <div onClick={toggleFooter} className="footer-toggle-icon">
          {showFooter ? <FaAngleUp/> :<FaAngleDown />}
        </div>
      </div>
      {showFooter && (
        <div className="footer-top">
          <div className="footer-item">
            <div className="footer-item-header">
              <h3>SITE</h3>
            </div>
            <div className="footer-item-menu">
              <div>
                <span>
                  <Link className="footer-link">About</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">Help</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">Site Guidelines</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-item-header">
              <h3>LEGAL</h3>
            </div>
            <div className="footer-item-menu">
              <div>
                <span>
                  <Link className="footer-link">Terms and Conditions</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">Privacy Policy</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">
                    Copyright Compliance Policy
                  </Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">CA Notice at Collection</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link className="footer-link">
                    CA Do Not Sell or Share My Personal Information
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-item-header">
              <h3>PARTNERS</h3>
            </div>
            <div className="footer-item-menu">
              <div>
                <span>
                  <Link className="footer-link">Optimum</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-bottom">
        <div>© 2024 Altice USA News, Inc. All Rights Reserved</div>
        <div className="footer-social">
          <div>
            <span>
              <FaFacebook />
            </span>
          </div>
          <div>
            <span>
              <FaInstagram />
            </span>
          </div>
          <div>
            <span>
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
