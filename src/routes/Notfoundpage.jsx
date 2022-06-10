import React from 'react'
import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to="/" className="btn btn-outline-primary">Home</Link>
    </div>
  )
}

export default Notfoundpage