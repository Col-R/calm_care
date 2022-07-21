import './Navbar.css'
import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h2>Calm Care Massage</h2>
            </div>

            {/*links */}
            
            <ul className="navbar__links">
                <li>
                    <Link to = "/">
                        Home
                    </Link>
                    <Link to = "/services">
                        Services
                    </Link>
                </li>
            </ul>
            
            {/*hamburger menu for mobile*/}

        </nav>
    )
}

export default Navbar