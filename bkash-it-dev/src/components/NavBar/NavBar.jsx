import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assest/images/logo.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg  nav-bg'>
      <div className='container-fluid'>
        <img src={logo} alt='' />
        <NavLink to='/' className='navbar-brand'>
          Bkash IT
        </NavLink>

        <button
          className='navbar-toggler ps-0 '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Services
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Digital Marketing
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Software
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Graphics
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Our Team
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Our Client
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Online Courses
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Internship
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/' className='nav-Link'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
