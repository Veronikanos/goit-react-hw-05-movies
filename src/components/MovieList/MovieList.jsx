import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    // <>{console.log(movies)}</>
    <>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;
