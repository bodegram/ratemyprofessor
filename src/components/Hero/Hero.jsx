import React, { useState } from 'react'
import './Hero.css'
import HeroImage from '../../assets/images/a.svg'
import { FaGraduationCap } from 'react-icons/fa6'

export default function Hero() {
    const [searchResult, setSearchResult] = useState('')
  return (
    <div className='hero container'>
        <div>
            <div className='hero-image'>
                <img src={HeroImage} alt="" className='hero-img' />
            </div>
            <div className='hero-header-text'>Enter your school to get started</div>
            <div>
                <div className='hero-icon'><FaGraduationCap size={20}/></div>
                <form action="" method="get">
                    <input type="text" onChange={(e)=>setSearchResult(e.target.value)} className='hero-form-control' placeholder='Your School' id="" />
                </form>
            </div>
            <div>
               {!searchResult == "" && (
                 <div className="search-result">
                 <div>Search result for "{searchResult}"</div>
             </div>
               )}
            </div>
            <div className='hero-footer-text'>I'd like to look up a professor by name</div>
        </div>
    </div>
  )
}
