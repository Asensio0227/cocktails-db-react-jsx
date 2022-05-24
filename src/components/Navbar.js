import React from 'react'
import { Link } from 'react-router-dom'
import logo  from '../logo.svg'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db" className="log" />
        </Link>
        <ul className="nav-links">
          <Link to='/'>
            Home
          </Link>
          <Link to="/about">
            about
          </Link>
        </ul>
      </div>
    </nav>
  )
}
