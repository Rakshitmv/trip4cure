import React from 'react'
import './Header.css'
import announ_logo from './Images/Announcement.png'
import twitter_logo from './Images/Twitter.png'
import facebook_logo from './Images/Facebook.png'
import main_logo from './Images/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { select } from 'react-bootstrap';
import linkedin_logo from './Images/Linkedin.png'
import search from './Images/Search.png'
import cancer from './Images/Cancer.png'
import cardiac from './Images/Cardiac.png'
import cosmetic from './Images/Cosmetic.png'
import fertility from './Images/Fertility.png'
import neurology from './Images/Neuro.png'
import ortho from './Images/Ortho.png'
import background from './Images/Background.png'

const Header = () => {
  return (
    <>
      <div className='announcement'>
        <img  className='announ_logo' src={announ_logo} alt='image'></img>
        <h4 className='announ-text'>Announcement</h4>
        <div>
          <h6>Using a medical tourism facilitator</h6>
        </div>
       
        <div className='logo'>
          <img className='media_logo' src={twitter_logo} alt='img'></img>
          <img className='media_logo' src={facebook_logo} ></img>
          <img className='media_logo' src={linkedin_logo}></img>
        </div>
        <div className='language_sec'>
          <select id="language">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
            <option value="gujurati">Gujurati</option>
          </select>
        </div>
      </div>
      <div>
      <div className='header_mainpage'>
          <div className='header1'>
            <img id='main_logo' src={main_logo} alt='image'></img>
            <div className='button_1'>
              <button className='signup_btn'>Sign Up</button>
              <button className='contact_btn'>Contact Us</button>
            </div>
          </div> 
          <div className='text'>
            <h1 className='innertext'>Wellness & Medical</h1>
            <h1> tourism for</h1>
          </div>
          <p className='innertext1'>Everyone, Everywhere.</p>
          <div className='select' >
                      <div className="select-wrap">
                        <label className='left_side1'>Choose Speciality</label> <br></br>
                         <select className="color" style={{ width: 380 }}>
                            <option value="">All Specialty</option>
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                          </select>
              </div>
              <div>
                      <div className="select-wrap">
                        <label className='left_side'>Choose County</label> <br></br>
                          <select className="color" style={{ width: 380 }}>
                          <option value="">All countries</option>
                          <option value="yellow">Yellow</option>
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                        </select>
                </div>
              
                     
          </div>
            
       
              {/* <select className="form-select" >
                <option selected>Choose Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select> */}
          <div className='btn_info'>
               <button type="button" className="btn_btn_info">
                  <img src={search}></img> Search
               </button>
          </div>
          </div>
          <div className='speciality'>
            <p className='speciality_text'>Or browse Top Specialties:</p>
            <span className='speciality_red'>View All Specialties</span>
          </div>
          <div className='browse_option'>
            <div className='options'>
              <div className='option-icons'>
                <img src={cancer}></img></div>
              <p>Cancer Treatment</p>
            </div >
            <div className='options'>
              <div className='option-icons'>
                <img src={cardiac}></img>
              </div>
              <p>Cardiac Surgery</p>
            </div>
            <div className='options'>
              <div className='option-icons'>
                <img src={cosmetic}></img>
              </div>
              <p>Cosmetic Surgery</p>
            </div>
            <div className='options'>
              <div className='option-icons'>
                <img src={fertility}></img>
              </div>
              <p>Fertility Treatment</p>
            </div>
            <div className='options'>
              <div className='option-icons'>
                <img src={neurology}></img>
              </div>
              <p>Neurology</p>
            </div>
            <div className='options'>
              <div className='option-icons'>
                <img src={ortho}></img>
              </div>
              <p>Orthopedic Surgery</p>
            </div>
          </div>
       
        </div>
        
      </div>
    </>
  )
}

export default Header