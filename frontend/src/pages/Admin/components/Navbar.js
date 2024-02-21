import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
  return (
    <>  
        <section className='navbar border border-dark'>
            <div className='pt-0'>
                <button className="navbar-toggler px-2" type="button">
                    <FontAwesomeIcon icon={faArrowLeftLong}/>
                </button>
                <h3 className=' fw-bold'> Dashboard</h3>
            </div>

            <hr></hr>
            <ul className='nav-items'>
                <div className='nav-items-main'>
                    <Link to="/profile">
                        <li className='nav-item'>Profile</li>
                    </Link>
                    <Link to="/vehicle">
                        <li className='nav-item'>Vehicles</li>
                    </Link>
                    <Link to="/driver">
                        <li className='nav-item'>Driver</li>
                    </Link>
                    <Link to="/journey">
                        <li className='nav-item'>Pickup/Drop-offs</li>
                    </Link>
                </div>
                <div className='nav-items-footer'>
                    <Link to="/loginAdmin">
                        <li className='nav-item'>logout</li>
                    </Link>
                </div>
            </ul>
        </section>
    </>
  )
}

export default Navbar