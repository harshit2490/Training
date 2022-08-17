import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

export default function Footer() {
    return (
        <div className="footer">
            <footer className="py-3 ">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item"><strong><Link to="/home"><div className="nav-link px-2 text-light">Home</div></Link></strong></li>
                    <li className="nav-item"><strong><Link to="/courses"><div className="nav-link px-2 text-light">Courses</div></Link></strong></li>
                    <li className="nav-item"><strong><Link to="/about"><div className="nav-link px-2 text-light">About</div></Link></strong></li>
                    <li className="nav-item"><strong><Link to="/contact-us"><div className="nav-link px-2 text-light">Contacts</div></Link></strong></li>
                    <li className="nav-item"><strong><Link to="/home"><div className="nav-link px-2 text-light">LogIn / SignUp</div></Link></strong></li>
                </ul>
                <p className="text-center text-light">©Copyright 2022, Made by NVHT Team</p>
            </footer>
        </div>
    );
}