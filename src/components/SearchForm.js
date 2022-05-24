import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context';
import ErrorBoundary from '../ErrorBoundary'

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');
 
  const handleChange = () => {
    setSearchTerm(searchValue.current.value);
  }

  useEffect(() => { 
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <ErrorBoundary>
      <section className="search">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-control">
            <label htmlFor="name"> search for your favorite cocktail
            </label>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={handleChange} />
          </div>
        </form>
      </section>
    </ErrorBoundary>
  )
}
