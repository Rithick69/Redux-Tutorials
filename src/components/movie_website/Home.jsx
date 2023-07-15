import React, { useEffect } from 'react';
import Movies from './Movies';
import Search from './Search';

import { useSelector } from 'react-redux';
import { GetMovies, API_URL } from './api';

const Home = () => {
  const { query, isError } = useSelector((state) => {
		return state.movieDbReducer;
	});

  useEffect(() => {
    if (query) {
        const timeOut = setTimeout(() => {
            GetMovies(`${API_URL}&s=${query}`);
        }, 800);
        return () => clearTimeout(timeOut);
    }
}, [query]);

  return (
    <>
      <Search />
      {
        !isError.show ? <Movies /> : <div></div>
      }
    </>
  )
}

export default Home