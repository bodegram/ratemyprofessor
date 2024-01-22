import React from 'react'
import './Features.css'
import ImgOne from '../../assets/images/b.svg'
import ImgTwo from '../../assets/images/c.svg'
import ImgThree from '../../assets/images/d.svg'

export default function Features() {
  return (
   <>
   <div className="features-header">
     <h2>Welcome back!</h2>
   </div>
    <div className='features container'>
        <div className="feature">
            <div className="feature-image">
                <img src={ImgThree} alt="" className='feature-img' />
            </div>
            <div className="feature-text">
                <div>Manage and edit your ratings</div>
            </div>
        </div>
        <div className="feature">
            <div className="feature-image">
                <img src={ImgOne} alt="" className='feature-img' />
            </div>
            <div className="feature-text">
                <div>Your ratings are always anonymous</div>
            </div>
        </div>
        <div className="feature">
            <div className="feature-image">
                <img src={ImgTwo} alt="" className='feature-img-three' />
            </div>
            <div className="feature-text">
                <div>Like or dislike ratings</div>
            </div>
        </div>
    </div>
    <div className="features-button">
        <button>My Ratings</button>
    </div>
   </>
  )
}
