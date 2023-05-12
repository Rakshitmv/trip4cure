import React from 'react'
import './Featured_Destination.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import greaterThen from './Images/GreaterThen.png'
import lessThen from './Images/LessThen.png'
import india from './Images/India.png'
import spain from './Images/Spain.png'
import germany from './Images/Germany.png'
import i_flag from './Images/India_flag.png'
import s_flag from './Images/Spain_flag.png'
import g_flag from './Images/Germany_flag.png'

const Featured_Destination = () => {
    
  return (
      <>
          <div className='featuredDestination_Page'>
              <div className='destination_heading'>
                  <p className='destination_name'>Featured Destinations</p>
                  <p className='destination_info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptate. Mollitia, facilis beatae expedita ea, nam modi inventore repellendus similique veritatis aut quas dolores nisi. Impedit, autem. Harum, consequatur quisquam!</p>
                  <div className='arrow_sec'>
                     <div className='lessthen1'><img src={lessThen}></img></div>
                     <div className='greaterthen1'><img src={greaterThen}></img></div>
                  </div>
              </div>  
              <div className='location'>
                  <div className='india'>
                      <img  className='india_img' src={india}></img>
                      <img className='i_flag' src={i_flag}></img>  
                      <p className='location_info'> India</p>
                      <p className='location_info1'>(44 Medical Centers)</p>
                  </div>
                    <div className='india'>
                      <img  className='india_img' src={spain}></img>
                      <img className='s_flag' src={s_flag}></img>  
                      <p className='location_info-1'> Spain</p>
                      <p className='location_info2'>(52 Medical Centers)</p>
                  </div>
                    <div className='india'>
                      <img  className='india_img' src={germany}></img>
                      <img className='g_flag' src={g_flag}></img>  
                      <p className='location_info-2'> Germany</p>
                      <p className='location_info3'>(8 Medical Centers)</p>
                  </div>
              </div>
            <div className='destination_button'>
                <button className='destination_btn'>View All Destinations</button>
             </div>  
       
          </div>
      </>
  )
}

export default Featured_Destination