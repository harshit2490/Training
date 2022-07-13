import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "white",
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/' style={navStyle}>
                    <li>Home</li>
                </Link>

                <Link to='/weather'  style={navStyle}>
                    <li>Weather</li>
                </Link>

                <Link to='/shop'  style={navStyle}>
                    <li>Shop</li>
                </Link>
                <Link to='/props'  style={navStyle}>
                    <li>Props</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Nav;