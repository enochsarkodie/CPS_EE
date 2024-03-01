import React, { useState } from 'react'
import "./RegVehicle.css" 
import { Driver } from '../../props/Driver'
import { useNavigate } from "react-router-dom"
import { initialDrivers } from './DriverList';


const initializer = {
  id: null,
  firstName: '',
  lastName: '',
  gender: '',
  age: null,
  tagNumber: '',
  phoneNumber: '',
  address: ''
};
const RegDriver = () => {

  const[driver, setDriver] = useState(new Driver(initializer))
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Driver data:", driver);
    initialDrivers.push(driver);
    navigate('/driver')
  }

  const handleChange = (event) => {

    const { id, value } = event.target;
    setDriver({ ...driver, [id]: value });
  }
  
  return (
        <form className=""
        onSubmit={handleSubmit}
        onChange={handleChange}>
<div className='row justify-content-between w-50'>
    <div className="col">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="firstName" 
          />
    </div>
    <div className="col">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="lastName"
          />
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col w-25">
    <label htmlFor="tagNumber" className="form-label">Tag Number: </label>
    <input 
      type="text" 
      className="form-control" 
      id="tagNumber" 
      placeholder="ADM130"
      />
  </div>
  <div className="col">
    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
    <input 
      type="text" s
      className="form-control" 
      id="phoneNumber"
      />
  </div>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="inputState" className="form-label">Gender</label>
    <select id="gender" className="form-select">
      <option >MALE</option>
      <option >FEMALE</option>
    </select>
  </div>
    <div className="col">
        <label htmlFor="age" className="form-label">Age: </label>
        <input 
          type="number" 
          className="form-control" 
          id="age"
         />
    </div>  
  </div>
  
  <div className="col w-50">
    <label htmlFor="address" className="form-label">Address</label>
    <input 
      type="text" 
      className="form-control" 
      id="address"
      />
  </div>
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegDriver