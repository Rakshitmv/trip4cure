import React from 'react'
import './Testimonials.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import bg_testimonials from './Images/Bg_Testimonials.png';
import guest1 from './Images/Guest1.png'

const Testimonials = () => {
  return (
      <>
          <div className='testimonial_Page'>
              <div className='heading'>What our Patients say ...</div>    
              <div className='test_card'>
                  <div className='guest_img'>
                      <img src={guest1}></img>
                  </div>
                  <p className='guest_speech'>Your Service was excellent, I had a reply and appointment within 24 hours. If I require medical assistance in the future I will most certainly consider using your platform. </p>
                  <h5 className='guest_name'>JULIA ROSE</h5>
                  <h6 className='guest_location'>From Los Angeles, California</h6>
              </div>
              <div className='button_white'>
                    <button className='button_white1'></button>
                    <button className='button_white1'></button>
                    <button className='button_white1'></button>
              </div>
          </div>
    
      </>
  )
}

export default Testimonials



//    <div>
//                                 <Carousel
//                         showArrows={true}
//                         infiniteLoop={true}
//                         showThumbs={false}
//                         showStatus={false}
//                         autoPlay={true}
//                         interval={6100}
//                     >
//                         <div>
//                         <img src={image1} />
//                         <div className="myCarousel">
//                             <h3>Shirley Fultz</h3>
//                             <h4>Designer</h4>
//                             <p>
//                             It's freeing to be able to catch up on customized news and not be
//                             distracted by a social media element on the same site
//                             </p>
//                         </div>
//                         </div>

//                         <div>
//                         <img src={image2} />
//                         <div className="myCarousel">
//                             <h3>Daniel Keystone</h3>
//                             <h4>Designer</h4>
//                             <p>
//                             The simple and intuitive design makes it easy for me use. I highly
//                             recommend Fetch to my peers.
//                             </p>
//                         </div>
//                         </div>

//                         <div>
//                         <img src={image3} />
//                         <div className="myCarousel">
//                             <h3>Theo Sorel</h3>
//                             <h4>Designer</h4>
//                             <p>
//                             I enjoy catching up with Fetch on my laptop, or on my phone when
//                             I'm on the go!
//                             </p>
//                         </div>
//                         </div>
//                     </Carousel>
                 
              
//               </div>  