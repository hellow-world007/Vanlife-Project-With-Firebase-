import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom"
import { getVan } from '../../api'

export function loader({ params }){
  return getVan(params.id)
}

const VansDetails = () => {
  const location = useLocation()
  const details = useLoaderData()

  const detailsElement = function(){
    return (
        <div className="van-detail">
            <img src={details.imageUrl} />
            <i className={`van-type ${details.type} selected`}>{details.type}</i>
            <h2>{details.name}</h2>
            <p className="van-price"><span>${details.price}</span>/day</p>
            <p>{details.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    )
  }

  const type = location.state?.type || "all"
  return (
    <div className="van-detail-container">
      <Link
        to={`..?${location.state?.search && location.state?.search}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {type} vans</span>
      </Link>

      {detailsElement()}
    </div>
  )

}

export default VansDetails