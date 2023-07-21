import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVansDetailsInfo = () => {
  const [ hostVansDetails, setHostVansDetails ] = useOutletContext();
  return (
    <section className="host-van-detail-info">
      {hostVansDetails && 
        <>
          <h4>Name: {hostVansDetails.name}</h4>
          <h4>Category: {hostVansDetails.type}</h4>
          <h4>Description: {hostVansDetails.description}</h4>
          <h4>Visibility: public</h4> 
        </>
      }
    </section>
  )
}

export default HostVansDetailsInfo