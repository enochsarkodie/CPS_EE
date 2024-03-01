import React, {  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Driver } from '../../props/Driver'

export const initialDrivers = [
  new Driver({
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      gender: "MALE",
      age: 76,
      tagNumber: "ADM1234",
      phoneNumber: "01275455454",
      address: "Akosombo Dam 123"
  }),
  new Driver({
      id: 2,
      firstName: "Emily",
      lastName: "Smith",
      gender: "FEMALE",
      age: 45,
      tagNumber: "DRV5678",
      phoneNumber: "01234567890",
      address: "123 Main Street"
  }),
  new Driver({
      id: 3,
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      age: 32,
      tagNumber: "DRV9876",
      phoneNumber: "09876543210",
      address: "456 Elm Street"
  }),
  new Driver({
      id: 4,
      firstName: "Sarah",
      lastName: "Johnson",
      gender: "FEMALE",
      age: 28,
      tagNumber: "DRV2468",
      phoneNumber: "07123456789",
      address: "789 Oak Avenue"
  }),
  new Driver({
      id: 5,
      firstName: "Michael",
      lastName: "Brown",
      gender: "MALE",
      age: 54,
      tagNumber: "DRV1357",
      phoneNumber: "01928374655",
      address: "101 Pine Road"
  }),
  new Driver({
      id: 6,
      firstName: "Jennifer",
      lastName: "Garcia",
      gender: "FEMALE",
      age: 38,
      tagNumber: "DRV8024",
      phoneNumber: "03659874123",
      address: "202 Cedar Lane"
  }),
  new Driver({
      id: 7,
      firstName: "David",
      lastName: "Martinez",
      gender: "MALE",
      age: 61,
      tagNumber: "DRV3690",
      phoneNumber: "07654321987",
      address: "303 Maple Drive"
  })
];

// Assuming Driver class is defined elsewhere
// Make sure you have the Driver class defined before using this array.


const DriverList = ({listOfDrivers, del}) => {

  
const handledelte = (id) => {
   del(id);
}
 
  return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Tag Number</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {listOfDrivers ? (listOfDrivers.map((driver) => (
              <tr key={driver.id}>
              <th scope="row">{driver.id}</th>
              <td>{driver.firstName}</td>
              <td>{driver.lastName}</td>
              <td>{driver.tagNumber}</td>
              <td>{driver.phoneNumber}</td>
              <td>{driver.gender}</td>
              <td>{driver.age}</td>
              <td>{driver.address} </td>
              <td>
                <div className='d-sm-flex'>
                <button className='btn btn-primary'><FontAwesomeIcon icon={faPenToSquare}/></button>
                  <button className='btn btn-primary' onClick={() => handledelte(driver.id)} ><FontAwesomeIcon icon={faTrashCan}/></button>
                </div>
              </td>
            </tr>
          ))) : <div>No List Available</div>}
        </tbody>
  </table>
  )
}


export default DriverList