import React, { useState } from 'react'
import { Vehicle } from '../../props/Vehicle';
import { initialVehicles } from './VehicleList';

import { useNavigate } from "react-router-dom"



const initializer = {
  id: null,
  vehicleNumber: '',
  noOfSeats: '',
};





const RegVehicle = () => {
  const[vehicle, setVehicle] = useState(new Vehicle(initializer))

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("vehicle data:", vehicle);
    initialVehicles.push(vehicle);
    navigate('/vehicle')

  }
  
  
  
  const handleChange = (event) => {
  
    const { id, value } = event.target;
    setVehicle({ ...vehicle, [id]: value });
  }
  return (
        <form className=""
        onSubmit={handleSubmit}
        onChange={handleChange}>
<div className='row justify-content-between'>
    <div className="col">
        <label htmlFor="firstName" className="form-label">Vehicle Number</label>
        <input 
          type="text"
          className="form-control" 
          id="vehicleNumber"/>
    </div>
</div>
  
  <div className="col-4 w-25">
    <label htmlFor="noOfSeats" className="form-label">Max No Of Seats: </label>
    <input 
      type="number" 
      className="form-control" 
      id="noOfSeats"/>
  </div>
 
  <div className="d-flex align-items-end justify-content-center mt-4 w-25">
    <button type="submit" className="btn btn-primary w-25">Add</button>
  </div>
</form>

  )
}

export default RegVehicle