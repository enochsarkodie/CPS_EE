import React from 'react'
import "./RegVehicle.css" 

const RegDriver = () => {
  return (
        <form className="">
<div className='row justify-content-between w-50'>
    <div className="col">
        <label for="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="inputEmail4"></input>
    </div>
    <div className="col">
        <label for="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="inputPassword4"></input>
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col w-25">
    <label for="tagNumber" className="form-label">Tag Number: </label>
    <input type="text" className="form-control" id="tagNumber" placeholder="ADM130"></input>
  </div>
  <div className="col">
    <label for="phoneNumber" className="form-label">Phone Number:</label>
    <input type="text" className="form-control" id="phoneNumber"></input>
  </div>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label for="inputState" className="form-label">Gender</label>
    <select id="inputState" className="form-select">
      <option>MALE</option>
      <option>FEMALE</option>
    </select>
  </div>
    <div className="col">
        <label for="age" className="form-label">Age: </label>
        <input type="number" className="form-control" id="age"></input>
    </div>  
  </div>
  
  <div className="col w-50">
    <label for="inputZip" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputZip"></input>
  </div>
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegDriver