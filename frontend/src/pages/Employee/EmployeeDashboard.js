import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar'
import JourneyList from "../Admin/components/JourneyList";

const EmployeeDashboard = ()=>{
    const [journeys, setJourneys] = useState()
    const [loading, setLoading] = useState(false);
    const disp = false

    useEffect (() => {
        setLoading(true);
        const journeysList = JSON.parse(localStorage.getItem('listofJourneys'))
        setJourneys(journeysList);
        setLoading(false);
    }, [journeys])

    return (
        <div className='container-fluid'> 
       
            <div className='d-flex row'>
                <div className='col-3'>
                    <Navbar/>
                </div>
                <div className='col'>
                {(journeys) ? <JourneyList listOfJourneys={journeys} display={disp}/> : <div>NO LIST AVAILABLE</div>}
                </div>
            </div>
        </div>
    )
}


export default EmployeeDashboard;