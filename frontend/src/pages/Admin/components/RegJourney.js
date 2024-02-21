import React, { useState } from 'react'
import { Journey } from '../../props/Journey';
import "./RegJourney.css"



const RegJourney = () => {

  const[journey, setJourney] = useState(new Journey())
  let timeString;
  let dateString;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Drver Created')
    console.log(journey)
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
        setJourney((p) => {
            updatedDriver = new Journey({...p, ...change})
            return updatedDriver;
        });
  }
  
  return (
        <form className=""
        onSubmit={handleSubmit}
        onChange={handleChange}>
<div className='row justify-content-between w-50'>
    <div className="col">
        <label htmlFor="pickUpLocation" className="form-label">Departure Location</label>
        <input 
          type="text" 
          className="form-control" 
          id="pickUpLocation" 
          value={journey.pickUpLocation}/>
    </div>
    <div className="col">
        <label htmlFor="destination" className="form-label">Destination</label>
        <input 
          type="text" 
          className="form-control" 
          id="destination"
          value={journey.destination}/>
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="typeOfJourney" className="form-label">Type Of Journey</label>
    <select 
      className="form-control" 
      id="typeOfJourney">
        <option value={journey.typeOfJourney}>
          Pick Off
        </option>
        <option value={journey.typeOfJourney}>
          Drop Off
        </option>
      </select>
  </div>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="date" className="form-label">Date</label>
    <input 
      type="date"
      className="form-control" 
      id="date"
      value={dateString}/>
  </div>
    <div className="col">
        <label htmlFor="time" className="form-label">Time: </label>
        <input 
          type="time" 
          className="form-control" 
          id="time"
          value={timeString}/>
    </div>  
  </div>
  
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegJourney