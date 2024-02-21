import React, { useState } from 'react'
import "./RegVehicle.css" 
import {User} from '../../props/User'

const RegUser = () => {
  const [user, setUser] = useState(new User());


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New User Created');
    console.log(user)
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
    let updateUser;
        setUser((p) => {
            updateUser = new User({...p, ...change})
            return updateUser;
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
          value={user.firstName}/>
    </div>
    <div className="col">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="lastName"
          value={user.lastName}/>
    </div>
</div>
<div className='row justify-content-between w-50'>
<div className="col">
    <label htmlFor="inputState" className="form-label">Department</label>
    <select id="department" className="form-select">
      <option value={user.department}>ADMIN</option>
      <option value={user.department}>OTHER DEPT</option>
    </select>
  </div>
  <div className="col">
    <label htmlFor="employeeNumber" className="form-label">Employee Number </label>
    <input 
      type="text" 
      className="form-control" 
      id="employeeNumber" 
      placeholder="ADM130"
      value={user.employeeNumber}/>
  </div>
</div>
  <div className="col-4">
    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
    <input 
      type="text" 
      className="form-control" 
      id="phoneNumber"
      value={user.phoneNumber}/>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="inputState" className="form-label">Gender</label>
    <select id="gender" className="form-select">
      <option value={user.gender}>MALE</option>
      <option value={user.gender}>FEMALE</option>
    </select>
  </div>
    <div className="col">
        <label htmlFor="age" className="form-label">Age: </label>
        <input 
          type="number" 
          className="form-control" 
          id="age"
          value={user.age}/>
    </div>  
  </div>
  
  <div className="col w-50">
    <label htmlFor="inputZip" className="form-label">Address</label>
    <input 
      type="text" 
      className="form-control" 
      id="address"
      value={user.address}
      />
  </div>
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegUser