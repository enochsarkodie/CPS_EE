import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file
import {Link} from 'react-router-dom'

const SignUp= () => {
  
  

  return (
   
    <div className="form-container">
                

    <form>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />
      </div>

    
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Your password" required />
      </div>


      <div className="form-group">
       <Link to="/login"> <button type="submit">Submit</button></Link>
      </div>
      <div>
                  Already have an account? <Link to='/login'><span className='sup'>Login</span></Link>
                </div>
    </form>
  </div>
  )
  }
export default SignUp;
