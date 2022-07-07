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

            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to = "/">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to ="/cart" className = "cart__link">
                        {/*Icon*/}
                        <i className = "fas fa-shopping-cart"></i>
                        Cart
                        <span className = "cartlogo__badge">0</span>
                    </Link>
                </li>
            </ul>

            {/*hamburger menu for mobile*/}
            <div className="hamburgerMenu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar