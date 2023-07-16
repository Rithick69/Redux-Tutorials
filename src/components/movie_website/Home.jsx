import React, { useEffect } from 'react';
import Movies from './Movies';
import Search from './Search';

import { useSelector, useDispatch } from 'react-redux';

import {
	  loadingStatus,
    errorMsg,
    fetchData
} from "../../actions";

const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

const Home = () => {
  const { query, isError } = useSelector((state) => {
		return state.movieDbReducer;
	});

  const dispatch = useDispatch();

  const getMovies = async (url) => {
    dispatch(loadingStatus(true));
    try{
        const res = await fetch(url);
        const data = await res.json();
        if(data.Response === 'True') {
            dispatch(loadingStatus(false));
            dispatch(fetchData(data.Search));
            dispatch(errorMsg({
                show: false,
                msg: ''
            }));
        } else {
            dispatch(errorMsg({
                show: true,
                msg: data.Error
            }));
        }
    } catch (error) {
        console.log(error);
    }
  };

  const toggleStates = () => {
    dispatch(loadingStatus(false));
    dispatch(errorMsg({
      show: false,
      msg:""
    }));
    dispatch(fetchData([]));
  }

  useEffect(() => {
    if (query) {
        const timeOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 800);
        return () => clearTimeout(timeOut);
    } else {
      toggleStates();
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