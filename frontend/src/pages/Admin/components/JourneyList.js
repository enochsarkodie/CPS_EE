import React from 'react'
import { Journey } from '../../props/Journey'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const ListOfJourney = [
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    }),
    new Journey({
        id: 1,
        pickUpLocation: "Amasaman",
        destination: "Antoban",
        typeOfJourney: "PICK OFF",
        dateOfDeparture: "12-23-2024",
        timeOfDeparture: "12:32",
    })
]
const JourneyList = () => {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Departure Location</th>
      <th scope="col">Destination</th>
      <th scope="col">Type Of Journey</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {ListOfJourney.map((journey) => (
        <tr key={journey.id}>
            <th scope="row">{journey.id}</th>
            <td>{journey.pickUpLocation}</td>
            <td>{journey.destination}</td>
            <td>{journey.typeOfJourney}</td>
            <td>{journey.dateOfDeparture}</td>
            <td>{journey.timeOfDeparture}</td>
            <td>
                <div className='d-sm-flex'>
                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button className='btn btn-primary'><FontAwesomeIcon icon={faTrashCan}/></button>
                </div>
            </td>
         </tr>
        ))}
  </tbody>
</table>
  )
}

export default JourneyList