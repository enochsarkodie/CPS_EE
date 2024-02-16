import React from "react";
import './login.css'


const Login = ( )=> {
    const login = async (ev) =>{
        ev.preventDefault();
    }
    return (
       
        
        
       
            <div className="form-container">
                

              <form>
                <h1>Login</h1>
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
       -        </div>


                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          );
        };
        
    





export default Login;