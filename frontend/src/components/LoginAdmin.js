import React from "react";
import { Link } from "react-router-dom";

const LoginAdmin = ()=>{
    return (
       
        <div className="form-container">
                

        <form>
          <h1>Admin Login</h1>
         
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
  
        
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Your password" required />
          </div>


          <div className="form-group">
          <Link to='/adminDashboard'> <button type="submit">Submit</button></Link>
          </div>
        </form>
      </div>
    )}
export default LoginAdmin;
