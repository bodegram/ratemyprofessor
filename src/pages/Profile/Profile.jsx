import React, { useEffect, useState } from "react";
import "./Profile.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AccountNav from "../../components/AccountNav/AccountNav";
import { FaPencil } from "react-icons/fa6";
import { getProfileAsync } from "../../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "../../components/EditProfile/EditProfile";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getProfileAsync());
  }, []);
  const toggleEditButton = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      <Nav />
      <AccountNav />
      <div className="profile-header container">
            <div>
              <h2>My Profile</h2>
            </div>
            <div onClick={toggleEditButton} style={{cursor:'pointer'}}>
              Edit{" "}
              <span style={{ marginLeft: "10px"}} >
                <FaPencil />
              </span>
            </div>
          </div>
      {editMode ? (
        <EditProfile />
      ) : (
        <div className="container">
          <div className="profile-body">
            <div className="profile-item">
              <div className="profile-label">First name</div>
              <div className="profile-text">
                {data?.first_name ? data?.first_name : "Null"}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-label">Last name</div>
              <div className="profile-text">
                {data?.last_name ? data.last_name : "Null"}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-label">School</div>
              <div className="profile-text">
                {data?.school ? data?.school : "Null"}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-label">Field of Study</div>
              <div className="profile-text">
                {data?.field_of_study ? data?.field_of_study : "Null"}
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-label">Expected Year of Graduation</div>
              <div className="profile-text">
                {data?.year_of_graduation ? data?.year_of_graduation : "Null"}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
