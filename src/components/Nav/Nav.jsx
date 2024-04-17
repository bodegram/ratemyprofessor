import React, { useState } from 'react'
import './Nav.css'
import { FaFacebook, FaTwitter, FaInstagram, FaBars, } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'


export default function Nav() {
    const {isAuthenticated, username} = useSelector(state=>state.auth)
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()
    const toggleNav = () =>{
        setShowMenu(!showMenu)
    }
  return (
    <nav className='container'>
        <div className="nav-social">
            <div className='nav-user'>
                <div>Hey {username ? username: 'Guest'},</div>
            </div>
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
        <ul className={showMenu ? 'nav-menu' : 'nav-menu nav-hide'}>
            {!isAuthenticated ? (
          <>
            <li className="nav-item">
               <Link className='nav-log-in' to='/login'>Log in</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-item-button' to='/register'>Sign up</Link>
            </li>
          </>
            ):
            (
            <>
             <li className="nav-item">
               <Link className='nav-log-in' to='/'>Home</Link>
            </li>
            <li className="nav-item">
               <Link className='nav-log-in' to='/account/profile'>Profile</Link>
            </li>
            <li className="nav-item">
               <Link className='nav-log-in' to='/login'>Account Settings</Link>
            </li>
            <li className="nav-item">
               <Link className='nav-log-in' to='/account/ratings'>Your Ratings</Link>
            </li>
            <li className="nav-item">
               <Link className='nav-log-in' to='/login'>My Saved Professors </Link>
            </li>
            <li className="nav-item">
               <div className='nav-log-in' style={{cursor:'pointer'}} onClick={()=>{
                dispatch(logout())
               }}>Log out</div>
            </li>
            </>
  
            )}
        </ul>
        <div className="nav-button">
            <span onClick={toggleNav}>{showMenu ? <FaTimes size={24}/>: <FaBars size={24}/>}</span>
        </div>
    </nav>
  )
}
