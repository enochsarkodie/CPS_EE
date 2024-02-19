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
                    <Link>
                        <li className='nav-item'>Profile</li>
                    </Link>
                    <Link>
                        <li className='nav-item'>Vehicles</li>
                    </Link>
                    <Link>
                        <li className='nav-item'>Driver</li>
                    </Link>
                    <Link>
                        <li className='nav-item'>Pickup/Drop-offs</li>
                    </Link>
                </div>
                <div className='nav-items-footer'>
                    <Link>
                        <li className='nav-item'>logout</li>
                    </Link>
                </div>
            </ul>
        </section>
    </>
  )
}

export default Navbar