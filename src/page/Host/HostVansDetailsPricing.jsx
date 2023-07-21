import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVansDetailsPricing = () => {
  const [ hostVansDetails, setHostVansDetails ] = useOutletContext();
  return (
    <h3 className="host-van-price">${hostVansDetails.price}<span>/day</span></h3>
  )
}

export default HostVansDetailsPricing