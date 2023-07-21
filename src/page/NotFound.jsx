import React from 'react'
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
     <div className="not-found">
        <h1>Sorry, the page you were looking for was not found</h1>
        <NavLink className='link-button' to="/">Return to Home</NavLink>
     </div>
  )
}
export default NotFound