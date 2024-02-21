import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import Navbar from './components/Navbar'
import VehicleList, {initialVehicles} from './components/VehicleList'
const VehiclePage = () => {

    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        setLoading(true);
        setVehicles(initialVehicles)
        setLoading(false)
    },[])

    
    const deleteItem = (id) =>
    {
      const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
      setVehicles(updatedVehicles);
    }
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
                {loading && (
            <div className='center-page'>
                <span className='spinner primary'></span>
                <p>Loading...</p>
            </div>
        )}
               {(vehicles !== 0) && <VehicleList listOfVehicles={vehicles} del={deleteItem}/>}
            </div>
        </div>
    </div>
  )
}

export default VehiclePage