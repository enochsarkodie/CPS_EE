import React from "react";
import './login.css'
import { Link } from "react-router-dom";


const Login = ( )=> {
    const login = async (ev) =>{
        ev.preventDefault();
    }
    return (
       
        
        
       
            <div className="form-container">
                

              <form>
                <h1>Login</h1>
               
        
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
        
              
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" placeholder="Your password" required />
                </div>


                <div className="form-group">
                 <Link to='/Dashboard'> <button type="submit">Submit</button></Link>
                </div>
                <div>
                  Don't have an account? <Link to='/signup'><span className="sup">Sign Up</span></Link>
                </div>
              </form>
            </div>
          );
        };
        
    





export default Login;