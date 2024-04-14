import React from 'react'
import './CollegeRating.css'
import Rating from './Rating'
import { FaShield } from 'react-icons/fa6'
import RatingComment from './RatingComment'

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
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Opportunities'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Clubs'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Happiness'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Facilities'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Social'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Internet'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Location'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Food'/>
            <Rating icon={<FaShield size={22}/>} ratingPoint={3.5} ratingText='Reputation'/>

        </div>
    </div>
    <div className="college-rating-footer container">
          <RatingComment/>
        </div>
    
   </>
  )
}
