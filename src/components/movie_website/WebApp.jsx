import React from 'react';
import Home from './Home';
import Movie from './Movie';
import Error from './Error';
import './index.css'

import { Routes, Route  } from 'react-router-dom';

const WebApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="movie/:id" element={ <Movie /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </>
  )
}

export default WebApp;