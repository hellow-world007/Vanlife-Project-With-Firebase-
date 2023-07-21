import React, { useState, useEffect } from 'react'
import { Link,useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'

export function loader(){
  return getHostVans()
}

const HostVans = () => {
  
  const hostVansData = useLoaderData()

  const vanElements = hostVansData.map(item => {
    const { id,hostId, name, price, description, imageUrl, type } = item
    
    return (
      <div key={id} className="vans-item">
        <Link to={`/host/vans/${id}`}>
          <img src={imageUrl} />
          <div className="van-info">
            <h3>{name}</h3>
            <p>${price}<span>/day</span></p>
          </div>
        </Link>
      </div>
    )
  })
  
  return (
    <div className="host-van-list">
        <h1>Your listed vans</h1>
        <div className="vans-lists">
            {vanElements}
         </div>
    </div>
  )
}

export default HostVans