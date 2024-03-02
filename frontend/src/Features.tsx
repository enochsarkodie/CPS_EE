import React from "react";

const Features:React.FC = ()=>{
return (
<section id="instructors" className="p-4">
    <div className="container">
        <h2 className="text-center text-white">Some Features</h2>
        <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web develober in the industry
        </p>
        <div className="row g-4">
            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                    <div className="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/women/11.jpg" className="rounded-circle mb-3" alt="" />
                        <h3 className="card-title mb-3">Jane Doe</h3>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum rem expedita facere consectetur voluptates!</p>
                        <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                    <div className="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" className="rounded-circle mb-3" alt="" />
                        <h3 className="card-title mb-3">John Doe</h3>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum rem expedita facere consectetur voluptates!</p>
                        <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                    <div className="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/men/12.jpg" className="rounded-circle mb-3" alt="" />
                        <h3 className="card-title mb-3">Hans Berch</h3>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum rem expedita facere consectetur voluptates!</p>
                        <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                    <div className="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/women/12.jpg" className="rounded-circle mb-3" alt="" />
                        <h3 className="card-title mb-3">Freda Smith</h3>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum rem expedita facere consectetur voluptates!</p>
                        <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                        <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)
}
export default Features;