import React, { useEffect, useState } from 'react'
import { Journey } from '../../props/Journey';
import { useNavigate } from "react-router-dom"
import { initialJourneys } from '../../Admin/components/JourneyList';


const initializer = {
  id: null,
  pickUpLocation: '',
  destination: '',
  dateOfDeparture: null,
  timeOfDeparture: null
};

const BookJourney = () => {
   

  const [journey, setJourney] = useState(new Journey(initializer))
  const [journeys, setJourneys] = useState([])
  const dest = Array.from(new Set(journeys.map((j) => j.destination)));
  const dep = Array.from(new Set(journeys.map((j) => j.pickUpLocation)));
  const time = Array.from(new Set(journeys.map((j) => j.timeOfDeparture)));
  const date = Array.from(new Set(journeys.map((j) => j.timeOfDeparture)));





    const navigate = useNavigate();
  useEffect (() => {
    const journeysList = JSON.parse(localStorage.getItem('listofJourneys'))
    setJourneys(journeysList)
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Journey data:", journey);
    
    localStorage.setItem('employeeBooking', JSON.stringify(journey))
    initialJourneys.push(journey);
    navigate('/journey/booked');
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
        <select 
      id="pickUpLocation"
      className="form-control">
        <option value=""></option>
        { dep && dep.map((d) =>(
            <option>{d}</option>
        ) )}
      </select>
    </div>
    <div className="col">
        <label htmlFor="destination" className="form-label">Destination</label>
        <select 
      id="destination"
      className="form-control">
        <option value=""></option>
        { dest && dest.map((d) =>(
            <option>{d}</option>
        ) )}
      </select>
    </div>
</div>
  <div className='row justify-content-between w-50'>
  <div className="col">
    <label htmlFor="dateOfDeparture" className="form-label">Date</label>
    <select 
      id="dateOfDeparture"
      className="form-control">
        <option value=""></option>
        { date && date.map((d) =>(
            <option>{d}</option>
        ) )}
      </select>
  </div>

  <div className="col">
    <label htmlFor="timeOfDeparture" className="form-label">Time</label>
    <select 
      id="timeOfDeparture"
      className="form-control">
        <option value=""></option>
        { time && time.map((t) =>(
            <option>{t}</option>
        ) )}
      </select>
  </div>
  </div>
  <div className="d-flex align-items-end justify-content-center mt-4 w-50">
    <button type="submit" className="btn btn-primary w-25">BOOK</button>
  </div>
</form>

  )
}

export default BookJourney