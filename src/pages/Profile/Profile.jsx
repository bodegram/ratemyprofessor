import React from "react";
import "./Profile.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AccountNav from "../../components/AccountNav/AccountNav";
import { FaPencil } from "react-icons/fa6";

export default function Profile() {
  return (
    <>
      <Nav />
      <AccountNav />
      <div className="profile">
         <div className="profile-header">
             <div><h2>My Profile</h2></div>
             <div>Edit <span style={{marginLeft:'10px'}}><FaPencil/></span></div>
         </div>
         <div className="profile-body">
            <div className="profile-item">
                <div className="profile-label">
                   First name
                </div>
                <div className="profile-text">
                    Samuel
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                   Last name
                </div>
                <div className="profile-text">
                    Samuel
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                   School
                </div>
                <div className="profile-text">
                    Samuel
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                Field of Study

                </div>
                <div className="profile-text">
                    Samuel
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                Expected Year of Graduation

                </div>
                <div className="profile-text">
                    Samuel
                </div>
            </div>
         </div>
      </div>
      <Footer />
    </>
  );
}
