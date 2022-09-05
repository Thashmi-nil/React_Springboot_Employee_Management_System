import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import logo from '../../images/landingsvg.svg'

export const Header = () => {
  return (
    <div id='main'>
      <div className='name'>
        <div className='logoleft'>
          <h2>DON'T BE AFRAID OF</h2>
          <h1><span>FAILURE</span></h1>
          <h2>THIS IS THE WAY TO</h2>
          <h1><span>SUCCESS</span></h1>
        </div>
        <div className='logodiv'>
          <img src={logo} alt="" className='logoimg' />
        </div>
      </div>

    </div>
  )
}
