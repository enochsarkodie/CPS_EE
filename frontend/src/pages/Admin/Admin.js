import React from 'react'
// import Nav from 'react-bootstrap/bootstrap/Nav'
import './Admin.css'
import Navbar from './components/Navbar'
import RegVehicle from './components/RegVehicle'
import VehicleList from './components/VehicleList'
import RegUser from './components/RegUser'
import RegDriver from './components/RegDriver'
import DriverList from './components/DriverList'
import UserList from './components/UserList'
const Admin = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex row'>
            <div className='col-2'>
                <Navbar/>
            </div>
            <div className='col'>
            <UserList/>
            </div>
        </div>
    </div>
  )
}

export default Admin