import React from 'react'
import './Sign_In.css'
import signin_search from './Images/Signin_Search.png';
import signin from './Images/Sign_In.png';

const Sign_In = () => {
  return (
      <>
          <div className='sign_in_page'>
              <div className='sign_in_header'>
                  <div className='hamburger_in_box'>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                  </div>
                  <div className='company_in_name'>
                      <h1 className='company_head'>Trip4Cure</h1>
                  </div>
                  <div className='sign_in_search'>
                      <img  id='search_in_icon' src={signin_search}></img>
                      <h3>Search</h3>
                  </div>
                    </div>
                        <div className='sign_in_form'>
                        <img className='sign_in_logo' src={signin}></img>
                        <h3 className='sign_in_heading'>Sign Up</h3>
                        <div className='sign_in_details'>                                     
                            <input type="email" className="email_in" placeholder='Email'/>  <br></br>
                            <input type="password" className="pwd_in" placeholder='Password' /><br></br>                    
                        </div>
                        <div>
                          <input type="checkbox" value="lsRememberMe" id="rememberMe" className='checkbox'/>
                          <label for="rememberMe" />Remember me
                          <a className='forget_pwd' href='#' >Forget Password ?</a>
                        </div>
                        <button className='login_btn'>Login</button>
                        <div className='new_user'>
                            <a className='user'>New User ?</a>
                        </div>
                        <div className='sign_up_link'>
                            <a className='sign_up'>Sign Up</a>
                        </div>
              </div>
              
          </div>
      </>
  )
}

export default Sign_In