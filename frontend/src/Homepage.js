import React from "react";
import './Homepage.css'
import {Router, Link} from 'react-router-dom'


const Homepage= ()=>{
    return (
        <main>
        <div className="home">
       <div className="Homepage">
        <div className="logo">TheSchedular</div>
        <div className="settings">
         <Link to="/features" >Features</Link>
         <a href="">About</a>
         <a href="">Contact Us</a>
        </div>
        <div className="init">
             <div className="loginbtn"> 
             <Link to='/login'> <button>Login</button>
             </Link></div>
           <Link to='/signup'> <button>Sign Up</button></Link>
           <Link to='/loginAdmin'><button>Admin</button></Link>
        </div>
         </div>
         <div className="describe">
            <h2>TheSchedular! has become the platform 
                that solves all our Problems for us!</h2>  
         </div>

         
        <div className="get-started"> <Link to='/signup'><button>Get Started</button></Link></div>
       </div></main>
       
      
    );
}


export default Homepage