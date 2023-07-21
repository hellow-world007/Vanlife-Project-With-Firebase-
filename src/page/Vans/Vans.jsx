import React, { useState, useEffect } from 'react'
import { NavLink,Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api.js'

export function loader(){
  return getVans()
}

const Vans = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [ error, setError ] = useState(null)
  const data = useLoaderData()

  const typeFilter = searchParams.get('type')
  
  const filteredData = typeFilter ? data.filter(item => item.type === typeFilter ) : data
  const vanElements = filteredData.map(item => {
    const { id, name, price, description, imageUrl, type } = item
    return (
        <div key={id} className="van-tile">
            <Link 
              to={`/vans/${id}`}
              state={{ search: searchParams.toString(),
                       type: typeFilter
                     }}
            >
                <img src={imageUrl} />
                <div className="van-info">
                    <h3>{name}</h3>
                    <p>${price}<span>/day</span></p>
                </div>
                <i className={`van-type ${type} selected`}>{type}</i>
            </Link>
      </div>
    )
  })

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }

  if(error){
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div        className="van-list-filter-buttons">
          <button
          className={`van-type simple ${typeFilter === "simple" ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type','simple')}
          >
            Simple
          </button>

          <button
          className={`van-type luxury ${typeFilter === "luxury" ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type','luxury')}
          >
            Luxary
          </button>

          <button
          className={`van-type rugged ${typeFilter === "rugged" ? 'selected' : ''}`}
            onClick={() => handleFilterChange('type','rugged')}
          >
            Rugged
          </button>

          {typeFilter && 
          <button
          className='van-type clear-filters'
            onClick={() => handleFilterChange('type',null)}
          >
            Clear items
          </button>}
        </div>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
  )
}

export default Vans