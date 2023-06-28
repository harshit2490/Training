import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
        <h3>List Of Movies: {movies.length}</h3>
        <p>Trending: {movies[0].name}</p>
    </nav>
  )
}

export default Nav;