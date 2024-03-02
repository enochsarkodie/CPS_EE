import React, {  } from "react";
import Navbar from "./Navbar";

const EmployeeBooked = ()=>{
    const journey = JSON.parse(localStorage.getItem('employeeBooking'))
    return (
        <div className='container-fluid'> 
        <h2>LIST AVAILABLE JOURNEYS</h2>
            <div className='d-flex row'>
                <div className='col-3'>
                    <Navbar/>
                </div>
                <div className='col'>
                <form className="">
<div className='row justify-content-between w-50'>
    <div className="col">
        <label htmlFor="pickUpLocation" className="form-label">Departure Location</label>
        <div>{journey.pickUpLocation}</div>
    </div>
    <div className="col">
        <label htmlFor="destination" className="form-label">Destination</label>
        <div>{journey.destination}</div>
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="dateOfDeparture" className="form-label">Date</label>
    <div>{journey.dateOfDeparture}</div>

  </div>

  <div className="col">
    <label htmlFor="timeOfDeparture" className="form-label">Time</label>
    <div>{journey.timeOfDeparture}</div>

  </div>
  </div>
</form>

                </div>
            </div>
        </div>
    )
}


export default EmployeeBooked;