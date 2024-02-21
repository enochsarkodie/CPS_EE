import React, { useEffect, useRef, useState } from 'react';
import './SignUp.css'; 
import { Link,  useNavigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const SignUp= () => {
  
  const name =useRef();
  const email =useRef();
  const password =useRef();
  const [showLogin,setShowLogin]= useState(false);
  const localSignUp = localStorage.getItem("email")
  const navigate = useNavigate();
  useEffect(()=>{
    if(localSignUp){
      setShowLogin(true)
    }
  })

  const handleClick=()=>{
    if(name.current.value&&email.current.value&&password.current.value)
    {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      
     
      alert("Successfully Created Account!")
      navigate('/login')
    }
  };
  const handleLoginClick = () =>{
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email.current.value === storedEmail && password.current.value === storedPassword){
      navigate('/Dashboard');
    }else{
      alert("invalid credentials")
    }
  };
 
  return (
         

          <div>
           
    <div className="form-container">
           

    <form>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required ref={name}/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required ref={email} />
      </div>

    
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Your password" required ref={password} />
      </div>


      <div className="form-group">
       <button type="submit" onClick={handleClick}>Submit</button>
      </div>
      <div>
                  Already have an account? <Link to='/login'><span className='sup'>Login</span></Link>
                </div>
    </form>
   
  </div>

  </div>    
  )
  }
export default SignUp;
