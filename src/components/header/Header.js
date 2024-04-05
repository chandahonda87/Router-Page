import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

import logo from '../images/logo.jpg';

export default function Header() {
  return (
    <div>
        <header className="shadow-sm sticky-top" style={{ zIndex: 50 }}>
            <nav className="bg-white border px-4 lg:px-6 py-2.5">
                 <div className="d-flex justify-content-between align-items-center mx-auto container-xl">
                    <Link to='/' className="d-flex align-items-center">
                        <img src={logo} className="mr-3 rounded-circle" style={{ height: '6rem' }} alt="Logo"/>
                    </Link>
                    <div className="d-flex align-items-center order-lg-2">
                    <Link
                    to='#'
                    className="btn btn-primary font-weight-medium rounded-pill text-sm px-4 py-2.5 mr-2 focus-ring focus-outline-none"
                    >
                    Log in
                    </Link>
                    <Link
                    to='#'
                    className="btn btn-primary font-weight-medium rounded-pill text-sm px-4 py-2.5 mr-2 focus-ring focus-outline-none m-1"
                    >
                    Get started
                    </Link>
                </div>
                    <div className="d-flex align-items-center" id="mobile-menu-2">
                        <ul className="d-flex mt-4 font-weight-medium gap-8 list-unstyled">
                            <li>
                                <NavLink
                                to='/'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/about'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contact'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/youtube'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                YouTube
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/github'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                NASA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/user'
                                className="nav-link px-3 py-2 border-bottom border-gray-100" activeClassName="active"
                                >
                                User
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
