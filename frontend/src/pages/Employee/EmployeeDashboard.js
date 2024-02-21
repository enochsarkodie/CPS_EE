import React from "react";
import Navbar from './components/Navbar'
import JourneyList from "../Admin/components/JourneyList";

const EmployeeDashboard = ()=>{
    const disp = false
    return (
        <div className='container-fluid'>
            <div className='d-flex row'>
                <div className='col-3'>
                    <Navbar/>
                </div>
                <div className='col'>
                <JourneyList display={disp}/>
                </div>
            </div>
        </div>
    )
}


export default EmployeeDashboard;