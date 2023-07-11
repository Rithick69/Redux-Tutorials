import React from 'react'
import { useGlobalContext } from './context';

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      {
        movie.map((curr) => {
          return <>
            <div>
              <h2>
                {curr.Title}
              </h2>
            </div>
          </>
        })
      }
    </>
  )
}

export default Movies