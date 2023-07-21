import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }
  
  return (
    <nav className="nav--links">
        <Link className='home' to="/">
          #VANLIFE
        </Link>
        <div className='side--links'>
            <NavLink 
              to="/host"
              className={({isActive}) => isActive ? "active-link" : null}
            >
                Host
            </NavLink>

            <NavLink 
              to="/about"
              className={({isActive}) => isActive ? "active-link" : null}
            >
                About
            </NavLink>

            <NavLink 
              to="/vans"
              className={({isActive}) => isActive ? "active-link" : null}
            >
                Vans
            </NavLink>
            <Link to="/login" className="login-link">
              <img 
                src="../avatar-icon.png" 
                className="login-icon"
              />
            </Link>
            <button 
               onClick={fakeLogOut}
               className='log-out'
            >
              X
            </button>
        </div>
    </nav>
  )
}

export default Navbar