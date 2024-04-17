import React, { useEffect } from 'react'
import './Colleges.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import CollegeRating from '../../components/Rating/CollegeRating'
import { useSelector } from 'react-redux'

export default function Colleges() {
  const {data} = useSelector(state=>state.college)
  console.log('data', data[0]);
  return (
    <>
    <Nav/>
    <div className="colleges-header container">
        <div className="collges-header-top-text">
        {data[0].country}
        </div>
        <div className="colleges-header-top-subtext">
        {data[0].name}
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
