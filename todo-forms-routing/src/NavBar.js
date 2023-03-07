import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './NavBar.css';

export function NavBar() {
  return (
    <>
      <ul>
        <li><Link to='/' style={{color: '#ffffff', marginLeft: '600px'}} >Home</Link></li>
        <div className='btns'>
          <li><Link to='/todolist' className='nav-btn1'>Todos</Link></li>
          <li><Link to='/forms' className='nav-btn2'>Forms</Link></li>
        </div>
        <li><Link to='/profile' style={{color: "#ffffff"}}>About Us</Link></li>
      </ul>
      <Outlet />
    </>
  )
}