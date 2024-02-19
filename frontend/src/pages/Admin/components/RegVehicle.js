import React from 'react'
import "./RegVehicle.css" 

const RegVehicle = () => {
  return (
        <form className="">
<div className='row justify-content-between w-50'>
    <div className="col-4">
        <label for="firstName" className="form-label">Vehicle Number</label>
        <input type="text" className="form-control" id="inputEmail4"></input>
    </div>
</div>
  
  <div className="col-4 w-25">
    <label for="tagNumber" className="form-label">MaxNo Of Seats: </label>
    <input type="text" className="form-control" id="tagNumber" placeholder="ADM130"></input>
  </div>
 
  <div className="d-flex align-items-end justify-content-center mt-4 w-25">
    <button type="submit" className="btn btn-primary w-25">Add</button>
  </div>
</form>

  )
}

export default RegVehicle