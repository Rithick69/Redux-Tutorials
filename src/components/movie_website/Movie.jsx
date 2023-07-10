import React from 'react'
import { useParams } from 'react-router'

const Movie = () => {
  const { id } = useParams();
  return (
    <>
      <div>
      Our Single Movie { id }
      </div>
    </>
  )
}

export default Movie