import React from 'react'
import { Journey } from '../../props/Journey'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const initialJourneys = [
  new Journey({
      id: 1,
      pickUpLocation: "Plant Department",
      destination: "Administration",
      typeOfJourney: "PICK OFF",
      dateOfDeparture: "12-23-2024",
      timeOfDeparture: "12:32",
      passengers: [],
  }),
  new Journey({
      id: 2,
      pickUpLocation: "Warehouse",
      destination: "Cafeteria",
      typeOfJourney: "DROP OFF",
      dateOfDeparture: "12-24-2024",
      timeOfDeparture: "09:15",
      passengers: [],
  }),
  new Journey({
      id: 3,
      pickUpLocation: "Human Resources",
      destination: "Research Lab",
      typeOfJourney: "PICK OFF",
      dateOfDeparture: "12-25-2024",
      timeOfDeparture: "11:00",
      passengers: [],
  }),
  new Journey({
      id: 4,
      pickUpLocation: "Main Entrance",
      destination: "Meeting Room",
      typeOfJourney: "DROP OFF",
      dateOfDeparture: "12-26-2024",
      timeOfDeparture: "14:45",
      passengers: [],
  }),
  new Journey({
      id: 5,
      pickUpLocation: "IT Department",
      destination: "Training Room",
      typeOfJourney: "PICK OFF",
      dateOfDeparture: "12-27-2024",
      timeOfDeparture: "08:30",
      passengers: [],
  }),
  new Journey({
      id: 6,
      pickUpLocation: "Security Office",
      destination: "Executive Suite",
      typeOfJourney: "DROP OFF",
      dateOfDeparture: "12-28-2024",
      timeOfDeparture: "16:20",
      passengers: [],
  }),
  new Journey({
      id: 7,
      pickUpLocation: "Maintenance",
      destination: "Library",
      typeOfJourney: "PICK OFF",
      dateOfDeparture: "12-29-2024",
      timeOfDeparture: "10:10",
      passengers: [],
  })
];

// Assuming Journey class is defined elsewhere
// Make sure you have the Journey class defined before using this array.

const JourneyList = ({listOfJourneys, del, display}) => {

  const handledelte = (id) => {
    del(id);
 }
  return (
    <div>
      <h2>LIST AVAILABLE JOURNEYS</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Departure Location</th>
      <th scope="col">Destination</th>
      <th scope="col">Type Of Journey</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      {display &&  <th scope="col">Action</th>}
    </tr>
  </thead>
  <tbody>
    {listOfJourneys ? listOfJourneys.map((journey) => (
        <tr key={journey.id}>
            <th scope="row">{journey.id}</th>
            <td>{journey.pickUpLocation}</td>
            <td>{journey.destination}</td>
            <td>{journey.typeOfJourney}</td>
            <td>{journey.dateOfDeparture}</td>
            <td>{journey.timeOfDeparture}</td>
            {display && 
            <td>
                <div className='d-sm-flex'>
                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button className='btn btn-primary' onClick={() => handledelte(journey.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                </div>
            </td>}
         </tr>
        )) : <div>NO List Available</div>}
  </tbody>
</table>
</div>
  )
}

export default JourneyList