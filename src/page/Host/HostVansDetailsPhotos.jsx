import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVansDetailsPhotos = () => {
  const [ hostVansDetails, setHostVansDetails ] = useOutletContext();
  return (
    <div className="host--van--photo">
       <img src={hostVansDetails.imageUrl} className="host-van-detail-image" />
    </div>
  )
}

export default HostVansDetailsPhotos