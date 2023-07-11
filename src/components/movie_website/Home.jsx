import React from 'react';
// import { AppContext } from './context';

// import { useGlobalContext } from './context';
import Movies from './Movies';
import Search from './Search';

const Home = () => {
  // const name = useContext(AppContext)
  // const name = useGlobalContext();

  return (
    <>
      <div>My Home page</div>
      <Search />
      <Movies />
    </>
  )
}

export default Home