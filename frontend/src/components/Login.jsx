import React,{useRef} from "react";
import './login.css'
import { Link ,useNavigate} from "react-router-dom";


const Login = ( )=> {
  
  const email = useRef();
  const password= useRef();
  const navigate= useNavigate();
  const handleLoginClick = () =>{
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    console.log(`koko ${storedEmail} ooj`)
    if (email.current.value === storedEmail && password.current.value === storedPassword){
      navigate('/dashboard/employee');
    }else{
      alert("invalid credentials")
    }
  };
    const login = async (ev) =>{
        ev.preventDefault();
    }

    return (
       
            <div className="form-container">
                

              <form>
                <h1>Login</h1>
               
        
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required ref={email} />
                </div>
        
              
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" placeholder="Your password" required  ref={password}/>
                </div>


                <div className="form-group">
                         <button type="submit" onClick={handleLoginClick}>Submit</button>
                </div>
                <div>
                  Don't have an account? <Link to='/signup'><span className="sup">Sign Up</span></Link>
                </div>
              </form>
            </div>
          );
        };
        
    





export default Login;