import React from 'react'
import './Rating.css'

export default function Rating({icon, ratingPoint, ratingText}) {
  return (
    <div className='rating'>
        <div className='rating-icon-text'>
            <div className='rating-icon'>{icon}</div>
            <div className='rating-text'>{ratingText}</div>
        </div>
        <div className='rating-point'>
           {ratingPoint}
        </div>
    </div>
  )
}
