import React from 'react';
import MovieList from '../components/MovieList';
import movies from '../data/movies';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};