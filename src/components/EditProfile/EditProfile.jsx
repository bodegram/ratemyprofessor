import React from 'react'
import './EditProfile.css'
import { universities } from '../../_helpers/universities'
import courses from '../../_helpers/courses';

export default function EditProfile() {
  console.log(universities);
  
  return (
    <div className='edit container'>
        <div className="edit-form">
          <form action="">
            <div className="edit-field">
              <label htmlFor="">First name</label><br />
              <input type="text" name="" className='edit-form-control' id="" />
            </div>
            <div className="edit-field">
              <label htmlFor="">Last name</label><br />
              <input type="text" name="" className='edit-form-control' id="" />
            </div>
            <div className="edit-field">
              <label htmlFor="">School</label><br />
              <select name="" id="" className='edit-form-control'>
                <option value="">--- Select Your School ---</option>
               {universities.sort().map((item, index)=>{
                return <option value={item.name} >{item.name}</option>
               })}
              </select>
            </div>
            <div className="edit-field">
              <label htmlFor="">Field of Study</label><br />
              <select name="" id="" className='edit-form-control'>
                <option value="">---Select Your Field of Study---</option>
                {
                  courses.sort().map((item, index)=>{
                    return <option value={item.value}>{item.label}</option>
                  })
                }
              </select>
            </div>
            <div className="edit-field">
              <label htmlFor="">Expected Year of Graduation</label><br />
              <input type="text"  name="" className='edit-form-control' id="" />
            </div>
          </form>
        </div>
    </div>
  )
}
