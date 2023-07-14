import React from 'react'
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div className='loading'>Loading ...</div>
      </div>
    )
  }
  return (
    <>
      <section className='movie-page'>
        <div className='container grid grid-4-col'>
          {
            movie.map((curr) => {
              const { imdbID, Title, Poster } = curr;
              const Mname = Title.length > 15 ? `${ Title.substring(0, 15) }...` : Title;
              return <NavLink to={ `movie/${imdbID}` } key={imdbID}>
                <div className='card'>
                  <div className='card-info'>
                    <h2>
                      { Mname }
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>;
            })
          }
        </div>
      </section>
    </>
  )
}

export default Movies