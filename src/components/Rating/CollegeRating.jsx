import React from 'react'
import './CollegeRating.css'
import Rating from './Rating'
import { FaShield } from 'react-icons/fa6'

export default function CollegeRating() {
  return (
   <>
    <div className='college-rating container'>
        <div className="college-rate">
            <div className="college-rate-text">
                3.5
            </div>
            <div className="college-rate-subtext">
                Overall Quality
            </div>
        </div>
        <div className="college-rating-list">
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Safety'/>

        </div>
    </div>
    
   </>
  )
}
