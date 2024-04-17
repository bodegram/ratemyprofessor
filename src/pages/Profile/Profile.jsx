import React, { useEffect } from "react";
import "./Profile.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AccountNav from "../../components/AccountNav/AccountNav";
import { FaPencil } from "react-icons/fa6";
import { getProfileAsync } from "../../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.profile)
    useEffect(()=>{
       dispatch(getProfileAsync())
    }, [])
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
                    {data?.first_name}
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                   Last name
                </div>
                <div className="profile-text">
                    {data?.last_name}
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                   School
                </div>
                <div className="profile-text">
                    {data?.school}
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                Field of Study

                </div>
                <div className="profile-text">
                    {data?.field_of_study}
                </div>
            </div>
            <div className="profile-item">
                <div className="profile-label">
                Expected Year of Graduation

                </div>
                <div className="profile-text">
                    {data?.year_of_graduation}
                </div>
            </div>
         </div>
      </div>
      <Footer />
    </>
  );
}
