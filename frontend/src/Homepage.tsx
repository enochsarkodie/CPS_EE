import React from "react";
import Navbar from "./components/Navbar";
import "./Homepage.css"
import Features from "./Features";
import Contact from "./Contact";
import About from "./About";

const Homepage:React.FC = ()=> {
    return (
        <>
            <section className="homepage-hero p-4 p-lg-0 pt-lg-5 text-center text-sm-start position-relative">
                <Navbar/>
                <div className="container-fluid p-4 h-100 position-absolute top-0 start-0">
                    <div className="d-sm-flex h-100 align-items-center justify-content-between m-2">
                        <div className="w-75"></div>
                        <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center text-center p-3">
                            <p className="md-lead my-sm-5 fs-3 pt-5 fw-bold">
                                TheSchedular has become the platform that solves all our Problems for us!
                            </p>
                            <div><hr style={{backgroundColor:'black', height:'10px'}}/></div>
                            <button className="mt-sm-2 btn btn-success btn-lg">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="p-2 p-sm-5 bg-dark">
            <div className="border rounded-3 border-5 border-warning p-3">

            <Features/>
            </div>
            </section>

            <section className="about">
                <About/>
            </section>
            <section className="bg-success bg-gradient">
            <div className="container p-2 ">
           <Contact/>            
            </div>    
            </section>
        </>
    );
}

export default Homepage;