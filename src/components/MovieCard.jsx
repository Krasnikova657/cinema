// /src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css'; // Стилі

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.image} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <span>Жанр: {movie.genre}</span>
    <span>Сеанс: {movie.time}</span>
  </div>
);

export default MovieCard;
