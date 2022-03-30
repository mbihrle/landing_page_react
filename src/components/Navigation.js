import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Navigation() {
    const [optNavOpen, setOptNavOpen] = useState(false);

    return (
        <nav className='nav'>
            <a
                href='https://legido.de/'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt='legido logo' className='Company-logo' />
                <span className='Company-title'>LeGIDo</span>
            </a>

            <ul className={optNavOpen ? 'nav-links active' : 'nav-links'}>
                <li>
                    <Link to='/header'>Home</Link>
                </li>
                <li>
                    <Link to='/services'>Service</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <Link to='/signUp'>
                    <button className='btn'>Sign Up</button>
                </Link>
                <Link to="/logIn">
                <button className='btn'>Log In</button>
                </Link>
            </ul>
            <i
                className={
                    optNavOpen
                        ? 'fa-solid fa-bars close'
                        : 'fa-solid fa-bars open'
                }
                onClick={() => setOptNavOpen(true)}
            ></i>
            <i
                className={
                    optNavOpen
                        ? 'fa-solid fa-xmark open'
                        : 'fa-solid fa-xmark close'
                }
                onClick={() => setOptNavOpen(false)}
            ></i>
        </nav>
    );
}
