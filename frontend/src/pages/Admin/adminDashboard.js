import React from "react";
import Navbar from './components/Navbar'

const AdminDashboard = ()=>{
    return (
        <div className='container-fluid'>
            <div className='d-flex row'>
                <div className='col-3'>
                    <Navbar/>
                </div>
                <div className='col'>
                Admin DashBoard
                </div>
            </div>
        </div>
    )
}


export default AdminDashboard;