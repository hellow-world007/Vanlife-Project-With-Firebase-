import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from '../../api'

export function loader({params}){
  return getHostVans(params.id)
}

const HostVansDetails = () => {

  const hostVansDetails = useLoaderData()[0]

  const detailsElement = function(){
    return (
        <div className="van-details">
            <img src={hostVansDetails.imageUrl} />
            <div className='info-details'>
                <i className={`van-type van-type-details ${hostVansDetails.type} selected`}>
                    {hostVansDetails.type}
                </i>
                <h2>{hostVansDetails.name}</h2>
                <p className="van-price">
                    <span>${hostVansDetails.price}</span>
                    /day
                </p>
            </div>
        </div>
    )
  }
  const activeStyles={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  return (
    <section>
      <Link
        to=".."
        relative='path'
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="van-details-section">
        { detailsElement() }
      </div>

      <nav className="host-details-nav">
        <NavLink 
          to="."
          end
          style={({isActive}) => isActive ? activeStyles : null}
        > 
          Details
        </NavLink>

        <NavLink 
          to="pricing"
          style={({isActive}) => isActive ? activeStyles : null}
        > 
          Pricing
        </NavLink>

        <NavLink 
          to="photos"
          style={({isActive}) => isActive ? activeStyles : null}
        > 
          Photos
        </NavLink>
      </nav>

      <Outlet context={[ hostVansDetails ]}/>
    </section>
    
  )

}

export default HostVansDetails