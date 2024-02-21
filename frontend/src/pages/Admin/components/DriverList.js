import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Driver } from '../../props/Driver'

export const initialDrivers = [
  new Driver({
    id: 1,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  }),
  new Driver({
    id: 2,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  }),
  new Driver({
    id: 3,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  }),
  new Driver({
    id: 4,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  }),
  new Driver({
    id: 5,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  }),
  new Driver({
    id: 6,
    firstName:"Mark",
    lastName:"Otto",
    gender:"MALE",
    age:76,
    tagNumber:"ADM1234",
    phoneNumber:"01275455454",
    address:"Akosombo Dam 123"

  })
]


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
          {listOfDrivers.map((driver) => (
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
          ))}
        </tbody>
  </table>
  )
}

export default DriverList