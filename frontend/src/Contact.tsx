import React from "react";

const Contact:React.FC = ()=>{
return (
    <>
    <div className="container">
        <div className="row align-items-center my-2">
            <div className="col-md-4 text-md-end text-center">
                <h3>THeSchedular</h3>
                <hr/>
               
            </div>
            <div className="vr p-0"></div>
            <div className="col-md-4 text-center mt-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, inventore!</p>
                <button className="btn btn-warning my-3 btn-lg">More Info</button>
            </div>
            <div className="vr p-0"></div>
            <div className="col-md d-flex flex-end flex-md-column  ms-5 justify-content-around justify-content-md-end ">
                <h4 className="lead text-warning d-none d-md-block ">Social Media</h4>
                <div className="mt-2"><a href="#" className="text-decoration-none"><i className="bi bi-twitter text-dark mx-3 "></i><span className="d-none d-md-inline font-monospace text-dark">twitter</span></a></div>
                <div className="mt-2"><a href="#" className="text-decoration-none"><i className="bi bi-facebook text-dark mx-3"></i><span className="d-none d-md-inline font-monospace text-dark">facebook</span></a></div>
                <div className="mt-2"><a href="#" className="text-decoration-none"><i className="bi bi-linkedin text-dark mx-3"></i><span className="d-none d-md-inline font-monospace text-dark">linkedin</span></a></div>
                <div className="mt-2"><a href="#" className="text-decoration-none"><i className="bi bi-instagram text-dark mx-3"></i><span className="d-none d-md-inline font-monospace text-dark">instagram</span></a></div>
            </div>
        </div>
    </div>
    </>
)
}
export default Contact;