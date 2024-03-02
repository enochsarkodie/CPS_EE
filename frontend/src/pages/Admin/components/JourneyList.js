import React from 'react'
import { Journey } from '../../props/Journey'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const initialJourneys = [
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "4th Junction",
        typeOfJourney: "PICK UP",
        dateOfDeparture: "01-21-2024",
        timeOfDeparture: "7:00",
    }),
    new Journey({
        id: 2,
        pickUpLocation: "Amasaman",
        destination: "Work premises",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "10:00",
    }),
    new Journey({
        id: 3,
        pickUpLocation: "2nd Junction",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:00",
    }),
    new Journey({
        id: 4,
        pickUpLocation: "WorkPlace",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "01-31-2024",
        timeOfDeparture: "14:00",
    }),
    new Journey({
        id: 5,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "16:00",
    }),
  
]
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