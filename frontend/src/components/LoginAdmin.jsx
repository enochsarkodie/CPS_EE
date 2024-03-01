import React,{ useRef} from "react";
import { Link , useNavigate} from "react-router-dom";

const LoginAdmin = ()=>{
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const dummyAdminMail = "admin101"
    const dummyAdminPassword = "admin@001"


    const handleClick =()=>{
      const enteredEmail = email.current.value;
      const enteredPassword = password.current.value;

      if(enteredEmail === dummyAdminMail && enteredPassword ===dummyAdminPassword ){
        alert("Succes!")
        navigate('/adminDashboard')

      }else{
        alert("Invalid!")
      }
    }

    return (
       
        <div className="form-container">
                

        <form>
          <h1>Admin Login</h1>
         
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required ref={email}/>
          </div>
  
        
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Your password" required ref={password}/>
          </div>


          <div className="form-group">
           <button type="submit" onClick={handleClick}>Submit</button>
          </div>
        </form>
      </div>
    )}
export default LoginAdmin;
