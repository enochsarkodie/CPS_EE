import React, { useState } from 'react'
import "./RegVehicle.css" 
import { Driver } from '../../props/Driver'


const RegDriver = () => {

  const[driver, setDriver] = useState(new Driver())
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Drver Created')
    console.log(driver)
  }

  const handleChange = (event) => {
    const {type, id, value, checked } = event.target;

    let updatedValue = value;
    if (type === "number"){
      updatedValue = Number(updatedValue)
    }
    const change = {
      [id] : value,
    }
    let updatedDriver;
        setDriver((p) => {
            updatedDriver = new Driver({...p, ...change})
            return updatedDriver;
        });
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
          value={driver.firstname}/>
    </div>
    <div className="col">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="lastName"
          value={driver.lastName}/>
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
      value={driver.tagNumber}/>
  </div>
  <div className="col">
    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
    <input 
      type="text" s
      className="form-control" 
      id="phoneNumber"
      value={driver.phoneNumber}/>
  </div>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="inputState" className="form-label">Gender</label>
    <select id="gender" className="form-select">
      <option value={driver.gender}>MALE</option>
      <option value={driver.gender}>FEMALE</option>
    </select>
  </div>
    <div className="col">
        <label htmlFor="age" className="form-label">Age: </label>
        <input 
          type="number" 
          className="form-control" 
          id="age"
          value={driver.age}/>
    </div>  
  </div>
  
  <div className="col w-50">
    <label htmlFor="address" className="form-label">Address</label>
    <input 
      type="text" 
      className="form-control" 
      id="address"
      value={driver.address}/>
  </div>
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegDriver