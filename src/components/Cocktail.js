import React from 'react'
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary'

export default function Cocktail({ id, name, img, info, glass }) {
  
  return (
    <ErrorBoundary>
      <article className="cocktails">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{info}</h4>
          <p>{glass}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-detail">
            more info
          </Link>
        </div>
      </article>
    </ErrorBoundary>
  );
}
