import React, { useState } from 'react'
import './Hero.css'
import HeroImage from '../../assets/images/a.svg'
import { FaGraduationCap } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
    const [searchResult, setSearchResult] = useState('')
    const handleSubmit = ()=>{
        navigate('/colleges/1')
    }
  return (
    <div className='hero container'>
        <div>
            <div className='hero-image'>
                <img src={HeroImage} alt="" className='hero-img' />
            </div>
            <div className='hero-header-text'>Enter your school to get started</div>
            <div>
                <div className='hero-icon'><FaGraduationCap size={20}/></div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>setSearchResult(e.target.value)} className='hero-form-control' placeholder='Your School' id="" />
                </form>
            </div>
            <div>
               {!searchResult == "" && (
                 <div className="search-result">
                 <div>Search result for "{searchResult}"</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
                 <div className='search-result-item'>FUNAAB</div>
               
             </div>
               )}
            </div>
            <div className='hero-footer-text'>I'd like to look up a professor by name</div>
        </div>
    </div>
  )
}
