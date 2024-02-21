import React, { useState } from 'react'
import { Journey } from '../../props/Journey';
import { useNavigate } from "react-router-dom"
import { ListOfJourney } from './JourneyList';

const initializer = {
  id: null,
  pickUpLocation: '',
  destination: '',
  typeOfJourney: '',
  dateOfDeparture: null,
  timeOfDeparture: null
};

const RegJourney = () => {

  const[journey, setJourney] = useState(new Journey(initializer))
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Journey data:", journey);

    ListOfJourney.push(journey);
    navigate('/journey')
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setJourney({ ...journey, [id]: value });
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
          id="pickUpLocation" />
    </div>
    <div className="col">
        <label htmlFor="destination" className="form-label">Destination</label>
        <input 
          type="text" 
          className="form-control" 
          id="destination"/>
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="typeOfJourney" className="form-label">Type Of Journey</label>
    <select 
      id="typeOfJourney"
      className="form-control">
        <option value="">
        </option>
        <option>
          Pick Off
        </option>
        <option>
          Drop Off
        </option>
      </select>
  </div>
  </div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="dateOfDeparture" className="form-label">Date</label>
    <input 
      type="date"
      className="form-control" 
      id="dateOfDeparture"/>
  </div>
    <div className="col">
        <label htmlFor="timeOfDeparture" className="form-label">Time: </label>
        <input 
          type="time" 
          className="form-control" 
          id="timeOfDeparture"/>
    </div>  
  </div>
  
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegJourney