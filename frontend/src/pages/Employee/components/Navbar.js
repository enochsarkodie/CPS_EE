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
                    <Link to="/journey/booking">
                        <li className='nav-item'>BOOK Pick Up</li>
                    </Link>
                    <Link to='/journey/booking'>
                        <li className='nav-item'>BOOK Journey</li>
                    </Link>
                </div>
                <div className='nav-items-footer'>
                    <Link to="/login">
                        <li className='nav-item'>logout</li>
                    </Link>
                </div>
            </ul>
        </section>
    </>
  )
}

export default Navbar