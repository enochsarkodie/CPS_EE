import React, { useEffect } from "react";
import Navbar from './components/Navbar'
import { initialDrivers } from "./components/DriverList";
import { initialJourneys } from "./components/JourneyList";
import { initialVehicles } from "./components/VehicleList";

const AdminDashboard = ()=>{
    useEffect (() => {

        
    })
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