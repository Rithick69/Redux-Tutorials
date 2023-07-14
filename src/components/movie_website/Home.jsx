import React from 'react';
// import { AppContext } from './context';

import { useGlobalContext } from './context';
import Movies from './Movies';
import Search from './Search';

const Home = () => {
  // const name = useContext(AppContext)
  const { isError } = useGlobalContext();

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