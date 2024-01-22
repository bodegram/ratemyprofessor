import React from 'react'
import './Nav.css'


export default function Nav() {
  return (
    <nav className='container'>
        <div className="nav-social">
            <div className="nav-social-item">
                <span>f</span>
            </div>
            <div className="nav-social-item">
                <span>i</span>
            </div>
            <div className="nav-social-item">
                <span>t</span>
            </div>
        </div>
        <ul className="nav-menu">
            <li className="nav-item">
               <div>log in</div>
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
