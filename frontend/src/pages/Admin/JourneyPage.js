import React from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import Navbar from './components/Navbar'
import JourneyList from './components/JourneyList'
const JourneyPage = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex row'>
            <div className='col-2'>
                <Navbar/>
            </div>
            <div className='col'>
                <div className='m-5 d-flex  justify-content-end'>
                    <Link to="/admin/register/journey">
                        <button className='btn btn-primary'>
                            Create New Journey
                        </button>
                    </Link>
                </div>
            <JourneyList/>
            </div>
        </div>
    </div>
  )
}

export default JourneyPage