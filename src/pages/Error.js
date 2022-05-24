import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <article className="error-page section">
      <div className="error-container">
        <h2 className="section-title">
        oops! it's dead end 
        </h2>
        <Link to="/" className='btn btn-primary'>
          back home
        </Link>
      </div>
    </article>
  )
}
