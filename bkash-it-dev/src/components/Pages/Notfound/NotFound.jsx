import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className='notfound'>
      <div className='notfound-content'>
        <h1>
          404 !<br /> <span>Not Found Pages</span>
        </h1>
        <NavLink to='/'>
          <button>Back To Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
