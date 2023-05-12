
import './Global_Provider.css'
// import React, { useState } from "react";
import ReactDOM from "react-dom";
import greaterThen from './Images/GreaterThen.png'
import lessThen from './Images/LessThen.png'
import global1 from './Images/Global1.png'
import global2 from './Images/Global2.png'
import global3 from './Images/Global3.png'
import global4 from './Images/Global4.png'
// import ItemsCarousel from "react-items-carousel";


const Global_Provider = () => {
    
  return (
            <>
                <div className='global_page'>
                    <div className='global_text'>
                        <h2 className='global_heading'>Global Insurance Providers</h2>
                        <h6 className='global_info'>Global Health Accreditation Trusted Providers</h6>
                    </div>   
                        <div className='arrow_1'>
                          <div className='lessthen'><img src={lessThen}></img></div>
                          <div className='greaterthen'><img src={greaterThen}></img></div>
                    </div>
                    <div className='global_card'>
                      <div className='global_card1'>
                        <img classname='global_img1' src={global1}></img>
                      </div>
                         <div className='global_card2'>
                        <img classname='global_img1' src={global2}></img>
                      </div>
                         <div className='global_card1'>
                        <img classname='global_img1' src={global3}></img>
                      </div>
                         <div className='global_card4'>
                        <img classname='global_img1' src={global4}></img>
                      </div>
                    </div>
              </div>                        
                
                
      </>
   )
}

export default Global_Provider



// const [active, setaAtive] = useState(0);
//      <div className="container">
 
//       <ItemsCarousel
//         infiniteLoop={false}
//         gutter={12}
//         activePosition={"center"}
//         chevronWidth={20}
//         disableSwipe={false}
//         alwaysShowChevrons={true}
//         numberOfCards={4}
//         slidesToScroll={4}
//         outsideChevron={true}
//         showSlither={false}
//         firstAndLastGutter={false}
//         activeItemIndex={active}
//         requestToChangeActive={value => setaAtive(value)}
//         rightChevron={">"}
//         leftChevron={"<"}
//       >
//         {Array.from(new Array(10)).map((_, i) => (
//           <div
//             key={i}
//             style={{
//                 height: 120,
//                 width: 240,
//                 background: "url(https://png.pngtree.com/template/20190308/ourmid/pngtree-life-insurance-logo-image_62965.jpg)"
//             }}
//           />
//         ))}
//       </ItemsCarousel>
//     </div>
  