import React from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import Navbar from './components/Navbar'
import VehicleList from './components/VehicleList'
const VehiclePage = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex row'>
            <div className='col-2'>
                <Navbar/>
            </div>
            <div className='col'>
                <div className='m-5 d-flex  justify-content-end'>
                    <Link to="/admin/register/vehicle">
                        <button className='btn btn-primary'>
                            Create New Vehicle
                        </button>
                    </Link>
                </div>
                <VehicleList/>
            </div>
        </div>
    </div>
  )
}

export default VehiclePage