import React from 'react'
import { Vehicle } from '../../props/Vehicle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const ListOfVehicles = [
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  }),
  new Vehicle({
    id: 1,
    vehicleNumber: "as1234",
    noOfSeats: 43
  })
]
const VehicleList = () => {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vehicle Number</th>
      <th scope="col">No of Seats</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {ListOfVehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <th scope="row">{vehicle.id}</th>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.noOfSeats}</td>
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

export default VehicleList