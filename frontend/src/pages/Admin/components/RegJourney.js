import React, { useState } from 'react'
import { Journey } from '../../props/Journey';
import "./RegJourney.css"



const RegJourney = () => {

  const[journey, setJourney] = useState(new Journey())
  const[timeOfDeparture, setTimeOfDeparture] = useState("")
  const [errors, setErrors] = useState({
    pickUpLocation: "",
    destination: "",
    typeOfJourney: "",
    dateOfDeparture: "",
    timeOfDeparture: ""

})
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Journey Created')
    console.log(journey)
    setErrors(() => validate(journey));
    console.error(errors)
  }

  const handleChange = (event) => {
    const {type, id, value, checked } = event.target;

    let updatedValue = value;
    if (type === "number"){
      updatedValue = Number(updatedValue)
    }
  

    const change = {
      [id] : updatedValue,
    }

    let updatedJourney;
        setJourney((p) => {
            updatedJourney = new Journey({...p, ...change})
            return updatedJourney;
        });
        // console.log(journey)

    
      
  }


  function validate(journey) {
    let error =  {
      pickUpLocation: "",
      destination: "",
      typeOfJourney: "",
      dateOfDeparture: "",
      timeOfDeparture: ""
};
    
    if (!journey.pickUpLocation) {
        error.pickUpLocation = "Depature Location is required";
    }
    if (!journey.destination) {
        error.destination = "Destination is required";
    }
    if (!journey.typeOfJourney) {
        error.typeOfJourney = "Type of Journey is required";
    }
    if (!journey.dateOfDeparture) {
        error.dateOfDeparture = "Date of Departure is required.";
    }
    if (!journey.timeOfDeparture) {
      error.timeOfDeparture = "Time of Departure is required.";
  }

    return error;
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
      id="typeOfJourney"
      className="form-control">
        <option value="">
        </option>
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
    <label htmlFor="dateOfDeparture" className="form-label">Date</label>
    <input 
      type="date"
      className="form-control" 
      id="dateOfDeparture"
      value={journey.dateOfDeparture}/>
  </div>
    <div className="col">
        <label htmlFor="timeOfDeparture" className="form-label">Time: </label>
        <input 
          type="time" 
          className="form-control" 
          id="timeOfDeparture"
          value={journey.timeOfDeparture}/>
    </div>  
  </div>
  
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">Create</button>
  </div>
</form>

  )
}

export default RegJourney