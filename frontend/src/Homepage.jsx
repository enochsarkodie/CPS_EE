import React from "react";
import './Homepage.css'
import {Link} from 'react-router-dom'
import Navbar from "./components/Navbar";


const Homepage= ()=>{
    return (
        <main>
            <Navbar/>
        <div className="home">
       <div className="Homepage">
        <div className="logo">TheSchedular</div>
        <div className="settings">
         <Link to="#features" >Features</Link>
         <Link to="#about" >About</Link>
         <Link to="#contactus" >Contact Us</Link>
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