import React from 'react'
import './Features.css'
import ImgOne from '../../assets/images/b.svg'
import ImgTwo from '../../assets/images/c.svg'
import ImgThree from '../../assets/images/d.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Features() {
    const {isAuthenticated, username} = useSelector(state=>state.auth)
    const navigate = useNavigate()
  return (
   <>
   <div className="features-header">
     <h2>Welcome back {isAuthenticated && username}!</h2>
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
        <button onClick={()=>navigate('/account/ratings')}>My Ratings</button>
    </div>
   </>
  )
}
