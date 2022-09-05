import React, { useState } from 'react'
import logo from '../../images/logo.png';
// import { Link } from 'react-scroll';
import './LandingPage.css'


export const Navbar = () => {

    const [nav, setnav] = useState(false);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <input className='menu-btn' type="checkbox" id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/login' smooth={true} duration={1000}>Login</a></li>
            </ul>
            <ul className='menu'>
                <li><a href='/registration' smooth={true} duration={1000}>JOIN US</a></li>
            </ul>
        </nav>
    )
}
