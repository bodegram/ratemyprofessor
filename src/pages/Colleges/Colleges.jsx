import React from 'react'
import './Colleges.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import CollegeRating from '../../components/Rating/CollegeRating'

export default function Colleges() {
  return (
    <>
    <Nav/>
    <div className="colleges-header container">
        <div className="collges-header-top-text">
        West Haven, CT
        </div>
        <div className="colleges-header-top-subtext">
        University of New Haven
        </div>
        <div className="colleges-header-top-link">
            <Link className='colleges-header-link'>View all Lecturers</Link>
        </div>
        <div className="colleges-header-buttons">
           <div>
             <button className='colleges-header-btn-one'>Rate this college</button>
           </div>
           <div>
             <button className='colleges-header-btn-two'>Compare this college</button>
           </div>
        </div>
    </div>
    <CollegeRating/>
    <Footer/>
    </>
  )
}
