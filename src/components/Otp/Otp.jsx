import React, { useState } from 'react';
import './Otp.css';
import Otp_search from './Images/Otp_Search.png';
// import Otp from './Images/Otp.png';

const Otp = () => {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

     async function Otp() {
        let item = {email,otp}
        console.warn(item)
        let result = await fetch("http://13.234.216.30:8080/activateaccount/", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })  
         result = await result.json()
         console.warn("result", result);
         localStorage.setItem("userinfo",JSON.stringify(result))
    }
    

        // const handleOtpChange = (e) => {
        //     setOtp(e.target.value);
        // };
  return (
      <>
           <div className='otp_page'>
                <div className='otp_header'>
                    <div className='hamburger_otp_box'>
                        <div className='hamburger_otp'></div>
                        <div className='hamburger_otp'></div>
                        <div className='hamburger_otp'></div>
                    </div>
                    <div className='company_name'>
                        <h1 className='company_head'>Trip4Cure</h1>
                    </div>
                    <div className='otp_search'>
                        <img  id='search_icon' src={Otp_search}></img>
                        <h3>Search</h3>
                    </div>
                </div>
                <div className='otp_section'>
                  <h5>Please enter the One-Time Password to verify your account </h5>
                  <p> A One-Time Password has been sent to "email@gmail.com" </p>
                  <div className='digit_sec'>
                      <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1"  type="text"     oninput="this.value=this.value.replace(/[^0-9]/g,'');" autoFocus />
                        <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1"  type="text"   oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                        <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1" type="text"   oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                        <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1" type="text"   oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                        <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1" type="text"  oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                        <input onChange={(e) => setOtp(e.target.value)} className='digit'  maxlength="1"  type="text"  oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
                  </div>
                  <button   onClick={Otp} className='validate_btn'>Validate</button>
                  <h6>Resend One-Time Password </h6>
                
                </div>
            </div>
      </>
  )
}

export default Otp