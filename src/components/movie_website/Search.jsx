import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>
          Search Your Favourite Movie
        </h2>
        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type='text' className='search-box' required placeholder='Search Here'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="close-icon" type="reset" onClick={(e) => setQuery('')}></button>
            {
              query ?
                  <h2 className='search-res'>Search results for: {query}</h2>
                  : ""
            }
          </div>
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search