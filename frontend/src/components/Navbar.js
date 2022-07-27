import './Navbar.css'
import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
    return (
        <nav className = "navbar">

            <div className="navbar__logo">
                <h2>Calm Care Massage</h2>
            </div>
                <ul className = "navbar__links">
                    <Link to = "/" className = "nav_link">
                        <li className="nav_link_item">
                            Home
                        </li>
                    </Link>
                    
                    <Link to = "/services" className = "nav_link">
                        <li className="nav_link_item">
                            Services
                        </li>
                    </Link>
                </ul>
        </nav>
    )
}

export default Navbar