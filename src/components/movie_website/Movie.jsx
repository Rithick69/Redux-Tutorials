import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { API_URL } from './context';
import './index.css';
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState('');

  const getMovies = async (url) => {
      try{
          const res = await fetch(url);
          const data = await res.json();
          if(data.Response === 'True') {
              setLoading(false);
              setMovie(data);
          }
      } catch (error) {
          console.log(error);
      }
  };
  useEffect(() => {
    setLoading(true)
    const timeOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    // UseEffect only returns one clean up method which will clear
    // anything written in the search field before debounce time has passed.

    return () => clearTimeout(timeOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading ...</div>
      </div>
    )
  }

  return (
    <>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className='card-content'>
            <p className='title'>{movie.Title}</p>
            <p className='card-text'>{movie.Genre}</p>
            <p className='card-text'>{movie.imdbRating}</p>
            <p className='card-text'>{movie.Country}</p>
            <p className='card-text'>{movie.Released}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie