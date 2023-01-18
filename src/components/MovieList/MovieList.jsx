import { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();
  console.log(movies);
  return (
    <>
      <ul className={s.listOfMovies}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div className={s.card}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    loading={lazy}
                  />
                  <p className={s.title}>{movie.title}</p>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;
