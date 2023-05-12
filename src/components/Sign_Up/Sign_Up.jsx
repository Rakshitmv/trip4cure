import React from 'react';
import './Sign_Up.css';
import signup_search from './Images/Signup_Search.png';
import signup from './Images/Sign_Up.png';

const Sign_Up = () => {
  return (
      <>
          <div className='sign_up_page'>
              <div className='sign_up_header'>
                  <div className='hamburger_box'>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                  </div>
                  <div className='company_name'>
                      <h1 className='company_head'>Trip4Cure</h1>
                  </div>
                  <div className='sign_search'>
                      <img  id='search_icon' src={signup_search}></img>
                      <h3>Search</h3>
                  </div>
                </div>
                  <div className='sign_up_form'>
                      <img className='sign_up_logo' src={signup}></img>
                      <h3 className='sign_up_heading'>Sign Up</h3>
                      <div className='sign_up_details'>
                          
                              <input type="text"  className="fname" placeholder='First Name' /><br></br>
                              <input type="text" className="lname" placeholder='Last Name' /> <br></br>
                              <input type="email" className="email" placeholder='Email'/>  <br></br>
                              <input type="password" className="pwd" placeholder='Password' /><br></br>
                              <input type="password" className="confirm_pwd" placeholder='Confirm Password' /><br></br>
                                                
                      </div>
                      <button className='register_btn'>Register</button>
                  </div>
              </div>
         
      </>
  )
}

export default Sign_Up

