import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <>
      <h1>An error Occured</h1>
      <p>Error: {error.message}</p>
      <pre>{error.statusText} - {error.status}</pre>
    </>
  )
}

