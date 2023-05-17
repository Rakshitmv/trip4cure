import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import logo_white from './Images/Logo_White.png'
import './Footer.css'
import twitter_logo from './Images/Twitter.png'
import facebook_logo from './Images/Facebook.png'
import linkedin_logo from './Images/Linkedin.png'

export default function Footer() {
  return (
    <>
      <div className='footer_main'>
        <MDBFooter bgColor='red' className='footer_red'  >
        <MDBContainer className='p-4'>
        <MDBCol lg='1' md='6' className='mb-4 mb-md-0'>
            
            <div className='logo_white_down'>
                <ul className='li'>
                <img  src={logo_white} height={150} width={120}/>
            
                  </ul>
                </div>
            </MDBCol>
        <div className='thdiv'>
          <MDBRow>
            <MDBCol lg='3' md='5' className='quick_col1'>
              
              <h5 className='text-Uppercase mb-2 '> Quick Links</h5>
              <div className='quick_col_1'>
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!' className='text-white'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Guide
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      How its Works
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Information
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

            <MDBCol lg='3' md='6' className='quick_col2'>
            
              <div className='quick_col_2'>
                <ul className='list-unstyled mb-4'>
                  <li>
                    <a href='#!' className='text-white'>
                    Privacy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Terms of use
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Disclamier
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>

                <MDBCol lg='3' md='6' className='speciality_footer'>
                  <div className='special_col'>
                      <h5 className='text-Uppercase md-2'>Featured Specialities</h5>
                      <div className='special_col_down'>
                        <ul className='list-unstyled mb-0'>
                          <li>
                            <a href='#!' className='text-white'>
                          Cancer Treatment
                            </a>
                          </li>
                          <li>
                            <a href='#!' className='text-white'>
                              Cardiac Surgery 
                            </a>
                          </li>
                          <li>
                            <a href='#!' className='text-white'>
                              Cosmetics Surgery
                            </a>
                          </li>
                          <li>
                            <a href='#!' className='text-white'>
                              Fertility Treatment
                            </a>
                          </li>
                          <li>
                            <a href='#!' className='text-white'>
                              Neurology
                            </a>
                          </li>
                          <li>
                            <a href='#!' className='text-white'>
                              Orthopedic Surgery
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
            </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <div className='media_col'>
                    <h5 className='text-Uppercase mb-2'>Connect With Us</h5>
                      <div className='logo_white'>
                        <img className='media_logo_white' src={twitter_logo} alt='img'></img>
                        <img className='media_logo_white' src={facebook_logo} alt='img'></img>
                        <img className='media_logo_white' src={linkedin_logo} alt='img'></img>
                      </div>
                  </div>
          
                
            </MDBCol>
          </MDBRow>
          </div>
        </MDBContainer>
          <br></br>
        <div className='text-center p-3' style={{ backgroundColor: 'rgb(177, 63, 63);' , borderTop: '0.3px solid white'}}>
          Copyright:{' '}  &copy; {new Date().getFullYear()} Trip4Cure, All Rights Reserved.
      
        </div>
        </MDBFooter>
        </div>
    </>
    
  );
}



//  <ul className='list-unstyled'>
//               <li>
//                 <a href='#!' className='text-white'>
//                  <img className='media_logo' src={twitter_logo} alt='img'></img>
//                 </a>
//               </li>
//               <li>
//                 <a href='#!' className='text-white'>
//                     <img className='media_logo' src={facebook_logo} alt='img'></img>
//                 </a>
//               </li>
//               <li>
//                 <a href='#!' className='text-white'>
//                     <img className='media_logo' src={linkedin_logo} alt='img'></img>
//                 </a>
//               </li>
//             </ul>