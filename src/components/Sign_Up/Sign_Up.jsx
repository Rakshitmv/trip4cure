import React,{useState} from 'react';
import './Sign_Up.css';
import signup_search from './Images/Signup_Search.png';
import signup from './Images/Sign_Up.png';

const Sign_Up = () => {

    const [first_name, setFirst_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [c_password, setC_Password] = useState("")
    const [role, setRole] = useState("")
    const [country, setCountry] = useState("")

     async function signUp() {
        let item = { first_name,last_name,email,password,c_password,role,country}
        console.warn(item)
        let result = await fetch("http://13.234.216.30:8080/register/", {
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
                          
                              <input type="text"  value={first_name} onChange={(e) => setFirst_Name(e.target.value)} className="fname" placeholder='First Name' /><br></br>
                              <input type="text" value={last_name} onChange={(e) => setLast_Name(e.target.value)} className="lname" placeholder='Last Name' /> <br></br>
                              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email"  placeholder='Email'/>  <br></br>
                              <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="pwd" placeholder='Password' /><br></br>
                              <input type="password" value={c_password} onChange={(e) => setC_Password(e.target.value)} className="confirm_pwd" placeholder='Confirm Password' /><br></br>
                      
                                                
                      </div>
                      <button  onClick={signUp} className='register_btn'>Register</button>
                  </div>
              </div>
         
      </>
  )
}

export default Sign_Up

