import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export function LandingPage() {
  return (
    <div className='landing-page'>


        {/* <div className='logo'>

            <img src="./images/download.png"/>

        
        
        </div> */}



      <h3>Get started with Any.Do app</h3>
      <div className='goal'>
        Motivate yourself to achieve your goals.
      </div>
      <p>Explore more by clicking the buttons below or using the navigation</p>
      <div className='landing-btns'>
        <Link to='/todolist' className='landing-btn todos-link'>Go To Todos</Link>
        <Link to='/forms' className='landing-btn forms-link'>Go To Forms</Link>
      </div>
    </div>
  )
}