import React, { useState } from 'react'
import './Hero.css'
import HeroImage from '../../assets/images/a.svg'
import { FaGraduationCap } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { universities } from '../../_helpers/universities'
import { useDispatch } from 'react-redux'
import { getCollegeAsync } from '../../redux/slices/collegeSlice'

export default function Hero() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [searchResult, setSearchResult] = useState('')
    const [filterResults, setFilterResults] = useState(universities)
    const handleSubmit = (e)=>{
        e.preventDefault()
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
                    <input type="text" onChange={(e)=>{
                      setSearchResult(e.target.value)
                      setFilterResults(universities.filter((uni)=> uni.name.includes(searchResult)))
                    }} className='hero-form-control' placeholder='Your School' id="" />
                </form>
            </div>
            <div>
               {!searchResult == "" && (
                 <div className="search-result">
                 <div>Search result for "{searchResult}"</div>
                 {
                  filterResults.map((item)=>(
                  <div className='search-result-item' onClick={()=>{
                    dispatch(getCollegeAsync(item.name))
                   navigate('/school')
                  }}>{item.name}</div>
                  ))
                 }
                 {
                  filterResults.length === 0 &&(
                    <div style={{marginTop:'15px'}}>No result found</div>
                  )
                 }
                
                 
               
             </div>
               )}
            </div>
            <div className='hero-footer-text'>I'd like to look up a professor by name</div>
        </div>
    </div>
  )
}
