import './Navbar.css'
import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div>
                <Link to="/" className = "navbar__logo" style={{ textDecoration: 'none' }}>
                    <h2>Calm Care</h2>
                </Link>
            </div>
            {/* Navbar links */}

        </nav>
    )
}

export default Navbar