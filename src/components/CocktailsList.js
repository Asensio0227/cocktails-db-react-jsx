import React from 'react'
import Loading from './Loading';
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail';
import ErrorBoundary from '../ErrorBoundary'

export default function CocktailsList() {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  if (cocktails.length < 1) {
    return (
      <main>
        <h2 className="section-title">
        no cocktail match your criteria
      </h2>
      </main>
    )
  };

  return (
    <ErrorBoundary>
      <section className='section'>
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })}
        </div>
      </section>
    </ErrorBoundary>
  )
}
