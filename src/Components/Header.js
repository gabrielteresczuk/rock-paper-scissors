import React from 'react'
import './Header.css'
import logo from '../images/logo.svg'


function Header({score}) {
  return (
    <div className='Header'>
        <img src={logo} alt='logo'></img>
        <div className='Header__score' >
            <span>SCORE</span>
            <h2>{score}</h2>
        </div>
    </div>
  )
}

export default Header