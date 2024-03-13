import React from 'react'
import NavLink from 'react-router-dom'


function Navbar() {
  return (
    <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
        </ul>
    </>
  )
}

export default Navbar