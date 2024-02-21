import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Admin.css'
import Navbar from './components/Navbar'
import JourneyList, {initialJourneys} from './components/JourneyList'
const JourneyPage = () => {
    const [journeys, setJourneys] = useState()
    const [loading, setLoading] = useState(false);
    const disp = true
    useEffect (() => {
        if (journeys)
            localStorage.setItem('listofJourneys', JSON.stringify(journeys));
        else
            localStorage.setItem('listofJourneys', JSON.stringify(initialJourneys));
        setLoading(true);
        const journeysList = JSON.parse(localStorage.getItem('listofJourneys'))
        setJourneys(journeysList);
        setLoading(false);
    }, [journeys])

    const deleteItem = (id) =>
    {
      const updatedJourneys = journeys.filter(journey => journey.id !== id);
      setJourneys(updatedJourneys);
    }

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
                {loading && (
            <div className='center-page'>
                <span className='spinner primary'></span>
                <p>Loading...</p>
            </div>
                )}
            {(journeys !== 0) && <JourneyList listOfJourneys={journeys} del={deleteItem} display={disp}/>}
            </div>
        </div>
    </div>
  )
}

export default JourneyPage