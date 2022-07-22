import './Navbar.css'
import { Link } from 'react-router-dom';
import React from 'react'

/*
        <nav className = "navbar">
            <div className="navbar__logo">
                <h2>Calm Care Massage</h2>
            </div>
                <ul>
                    <li class="nav_link_item">
                        <Link to = "/">Home</Link>
                    </li>
                
                    <li class="nav_link_item">
                        <Link to = "/services">Services</Link>
                    </li>
                </ul>
        </nav>
*/

const Navbar = () => {
    return (
        <nav className = "navbar">
            <img src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" id = "nav__img"/>
            <div className="navbar__logo">
                <h2>Calm Care Massage</h2>
            </div>
                <ul>
                    <li class="nav_link_item">
                        <Link to = "/">Home</Link>
                    </li>
                
                    <li class="nav_link_item">
                        <Link to = "/services">Services</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar