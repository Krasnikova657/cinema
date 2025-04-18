import React from 'react';
import movies from './data/movies';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div>
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;