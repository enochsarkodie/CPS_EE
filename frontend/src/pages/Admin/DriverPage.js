import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import Navbar from './components/Navbar'
import DriverList, { initialDrivers } from './components/DriverList'



const DriverPage = () => {

    const [drivers, setDrivers] = useState(initialDrivers);

    const deleteItem = (id) =>
    {
      const updatedDrivers = drivers.filter(driver => driver.id !== id);
      setDrivers(updatedDrivers);
    }

  return (
    <div className='container-fluid'>
        <div className='d-flex row'>
            <div className='col-2'>
                <Navbar/>
            </div>
            <div className='col'>
                <Link to="/admin/register/driver">
                    <div className='m-5 d-flex  justify-content-end'>
                        <button className='btn btn-primary'>
                            Create New Driver
                        </button>
                    </div>
                </Link>
            <DriverList listOfDrivers={drivers} del={deleteItem}/>
            </div>
        </div>
    </div>
  )
}

export default DriverPage