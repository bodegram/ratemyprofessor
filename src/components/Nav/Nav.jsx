import React from 'react'
import './Nav.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='container'>
        <div className="nav-social">
            <div className="nav-social-item">
                <span><FaFacebook size={24}/></span>
            </div>
            <div className="nav-social-item">
                <span><FaInstagram size={24}/></span>
            </div>
            <div className="nav-social-item">
                <span><FaTwitter size={24}/></span>
            </div>
        </div>
        <ul className="nav-menu">
            <li className="nav-item">
               <Link className='nav-log-in' to='/login'>Log in</Link>
            </li>
            <li className="nav-item">
            <button className='nav-item-button'>Sign up</button>
            </li>
        </ul>
        <div className="nav-button">
            <span>Menu</span>
        </div>
    </nav>
  )
}
